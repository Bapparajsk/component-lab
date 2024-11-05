"use client";

import { FormEvent, useRef, useState } from "react";
import { Button, Input, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

import { ErrorContext } from "@/lib/ErrorContext";
import { isValidRepoUrl } from "@/lib/validator";
import AppServer from "@/lib/axios";
import { uploadTree } from "@/data/form";


const FileInput = () => {

  const [errorContext] = useState(new ErrorContext(["componentName", "githubUrl", "main"]));
  const inputRef = useRef<HTMLInputElement[]>([]);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const mutation = useMutation({
    mutationKey: ["createComponent"],
    mutationFn: async ({ componentName, githubUrl, description }: {
      componentName: string,
      githubUrl: string,
      description: string | undefined
    }) => {
      if (!componentName) {
        errorContext.set("componentName", { message: "Component name is required", data: componentName });
      } else {
        errorContext.clear("componentName");
      }

      if (!githubUrl) {
        errorContext.set("githubUrl", { message: "Github url is required", data: githubUrl });
      } else {
        errorContext.clear("githubUrl");
      }

      if (!(await isValidRepoUrl(githubUrl))) {
        errorContext.set("githubUrl", { message: "Invalid github url", data: githubUrl });
      } else {
        errorContext.clear("githubUrl");
      }

      if (errorContext.isAnyError()) {
        errorContext.set("main", { message: "Please fix the error before submitting", data: "" });
        return;
      } else {
        errorContext.clear("main");
      }

      const token = localStorage.getItem("user-token");
      if (!token) {
        errorContext.set("main", { message: "You are not logged in", data: "" });
        router.replace("/login");
        return;
      }

      await AppServer.post("/post/upload", {
        title: componentName, url: githubUrl, description
      }, { headers: { "authorization": token} });

      return true;
    },
    onError: (error) => {
      if (!axios.isAxiosError(error)) {
        errorContext.clear();
        errorContext.set("main", { message: "An error occurred..!", data: "" });
        return;
      }

      const { response } = error;
      if (response?.status === 401) {
        errorContext.set("main", { message: "You are not logged in", data: "" });
        router.replace("/login");
        return;
      }

      if (response?.status === 400) {
        errorContext.clear();
        errorContext.set("main", { message: response.data.message, data: "" });
        return;
      }
    },
    onSuccess: () => {
      onOpen();
    }
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      componentName: inputRef.current[0].value,
      githubUrl: inputRef.current[1].value,
      description: descriptionRef.current?.value
    };
    mutation.mutate(data);
  };

  return (
    <div className={"w-full h-full"}>
      <form onSubmit={onSubmit}>
        <div className={"flex flex-col gap-5 border-b border-gray-600 py-5"}>
          {errorContext.get("main")?.error && (
            <div className={"w-full text-danger-500 p-2 rounded-md"}>
              {errorContext.get("main")?.message}
            </div>
          )}
          <div className={"flex flex-col md:flex-row gap-5"}>
            <div className={"md:w-1/2"}>
              <p className={"font-bold"}>Component Name <span className={"text-danger-500"}>*</span></p>
              <Input
                isRequired={true}
                type={"text"}
                variant={"bordered"}
                fullWidth={true}
                ref={(e) => {
                  if (e) {
                    inputRef.current[0] = e;
                  }
                }}
                isInvalid={errorContext.get("componentName")?.error}
                errorMessage={errorContext.get("componentName")?.message}
              />
            </div>
            <div className={"md:w-1/2"}>
              <p className={"font-bold"}>Github Url <span className={"text-danger-500"}>*</span></p>
              <Input
                isRequired={true}
                type={"text"}
                variant={"bordered"}
                fullWidth={true}
                ref={(e) => {
                  if (e) {
                    inputRef.current[1] = e;
                  }
                }}
                isInvalid={errorContext.get("githubUrl")?.error}
                errorMessage={errorContext.get("githubUrl")?.message}
              />
            </div>
          </div>
          <div className={"w-full md:max-w-80"}>
            <p className={"font-bold"}>Description <span className={"text-gray-600 text-sm"}>(optional)</span></p>
            <Textarea
              required={false}
              placeholder={"Description"}
              variant={"bordered"}
              fullWidth={true}
              ref={descriptionRef}
              isInvalid={errorContext.get("description")?.error}
              errorMessage={errorContext.get("description")?.message}
            />
          </div>
        </div>
        <div className={"border-b border-gray-600 py-3"}>
          <ul className={"w-full h-auto flex flex-col gap-2"}>
            {uploadTree.map((item, index) => (
              <UploadDetails
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
        </div>
        <div className={"w-full flex justify-end py-3"}>
          <Button type={"submit"} className={"bg-[#468237]"}>Create Component</Button>
        </div>
      </form>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} hideCloseButton={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={"flex flex-col gap-1"}>
                <h3 className={"text-2xl font-rubik"}>Component Uploaded.</h3>
              </ModalHeader>
              <ModalBody>
                <p className={""}>Your component has been successfully uploaded.</p>
              </ModalBody>
              <ModalFooter>
                <Button className={"bg-[#468237]"} onPress={() => {
                  router.push("/dashboard");
                  onClose();
                }}>
                  Dashboard
                </Button>
                <Button color={"primary"} variant={"shadow"} onPress={() => {
                  router.push("/profile");
                  onClose();
                }}>
                  Profile
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

function UploadDetails({
  Icon,
  title,
  description,
}:{
  Icon: any,
  title: string,
  description: string
}) {
  return (
    <li className={"w-auto h-auto flex items-center gap-2"}>{<Icon/>} {title} <span
      className={"text-default-400 hidden lg:block"}>#{description}</span></li>
  );
}

export default FileInput;
