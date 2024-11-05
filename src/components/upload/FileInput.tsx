"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { IconCodeDots, IconFileInfo, IconUpload, IconZoomCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";

import { ErrorContext } from "@/lib/ErrorContext";
import { isValidRepoUrl } from "@/lib/validator";

const data = [
  {
    icon: <IconFileInfo />,
    title: "Upload a information",
    description: "Add your Component Name, Github Url and Description"
  },
  {
    icon: <IconZoomCheck />,
    title: "Verify your information",
    description: "Verify your information is correct so that you can proceed else re-upload the information"
  },
  {
    icon: <IconCodeDots />,
    title: "Rewrite your code",
    description: "Your code write a code sport for all code languages"
  },
  {
    icon: <IconUpload />,
    title: "Publish your component",
    description: "Publish your component to the world"
  }
];

const FileInput = () => {

  const [errorContext] = useState(new ErrorContext(["componentName", "githubUrl", "main"]));

  const inputRef = useRef<HTMLInputElement[]>([]);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log("rerender");
  });

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

      if (errorContext.isAllError()) {
        errorContext.set("main", { message: "Please fill ", data: "" });
      }

      console.log(errorContext.getAll());
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
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
                isInvalid={errorContext.get("componentName").error}
                errorMessage={errorContext.get("componentName").message}
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
                isInvalid={errorContext.get("githubUrl").error}
                errorMessage={errorContext.get("githubUrl").message}
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
              isInvalid={errorContext.get("description").error}
              errorMessage={errorContext.get("description").message}
            />
          </div>
        </div>
        <div className={"border-b border-gray-600 py-3"}>
          <ul className={"w-full h-auto flex flex-col gap-2"}>
            {data.map((item, index) => (
              <UploadDetails
                key={index}
                icon={item.icon}
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
    </div>
  );
};

function UploadDetails({
  icon,
  title,
  description,
}:{
  icon: ReactNode,
  title: string,
  description: string
}) {
  return (
    <li className={"w-auto h-auto flex items-center gap-2"}>{icon} {title} <span
      className={"text-default-400 hidden lg:block"}>#{description}</span></li>
  );
}

export default FileInput;
