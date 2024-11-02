"use client";
import { useEffect, useMemo, useState, FormEvent, useRef } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";

import { BottomGradient, Input, Label, LabelInputContainer } from "@/components/ui/singinfrom";
import { OtpVerify } from "@/components/login/OtpVerify";
import { isValidEmail, isValidPassword } from "@/lib/validator";
import { login } from "@/lib/authentication";
import { UserTypes } from "@/types/user";

interface TypesMutation {
  data: {
    fullName?: string;
    UName?: string;
    email: string;
    password: string;
  },
  fn: (data: any) => Promise<{token: string, user: UserTypes}>,
}

const getDefaultError = () => {
  return {
    fullName: { error: false, message: "", },
    UName: { error: false, message: "", },
    email: { error: false, message: "", },
    password: { error: false, message: "", },
  };
};

const inputes = [
  { id: "Name", placeholder: "John dev", type: "text", label: "Full Name" },
  { id: "u-name", placeholder: "@john", type: "text", label: "User Name" },
  { id: "email", placeholder: "john@ex.com", type: "email", label: "Email" },
  { id: "password", placeholder: "••••••••", type: "password", label: "Password" },
];

export const LoginComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [time, setTime] = useState(5);
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [showErrors, setShowErrors] = useState(getDefaultError());

  useEffect(() => {
    const timeId = setInterval(() => {

      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timeId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  const counter = useMemo(() => {
    return (
      <div className={"w-full h-auto flex items-center justify-start"}>
        <p className={"text-neutral-600 dark:text-neutral-300 text-sm"}>
          Didn&apos;t receive the code? {time !== 0 && "Wait"}
        </p>
        {time === 0 && (
          <button
            className={"text-primary-500 dark:text-primary-400 text-sm font-medium ml-2 hover:underline"}
            onClick={onOpen}
          >
            Resend OTP
          </button>
        )}
        {
          !(time === 0) &&
          <>
            <p className={"text-neutral-600 dark:text-neutral-300 text-sm ml-2"}>
              in
            </p>
            <p className={"text-primary-500 dark:text-primary-400 text-sm font-medium ml-2"}>
              {time}
            </p>
            <p className={"text-neutral-600 dark:text-neutral-300 text-sm ml-2"}>
              seconds
            </p>
          </>
        }
      </div>
    );
  }, [time]);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({data, fn}: TypesMutation) => {
      return await fn(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [fullName, UName, email, password] = inputsRef.current.map((input) => input.value);

    if (!fullName || !UName || !email || !password) {
      console.log("error");
      setShowErrors({
        fullName: { error: !fullName, message: "Full name is required" },
        UName: { error: !UName, message: "User name is required" },
        email: { error: !email, message: "Email is required" },
        password: { error: !password, message: "Password is required" },
      });
      return;
    }

    loginMutation.mutate({
      data: {fullName, UName, email, password},
      fn: login
    });
  };

  return (
    <div
      className={"max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"}>
      <h2 className={"font-bold text-xl text-neutral-800 dark:text-neutral-200"}>
        Welcome to Component Lab
      </h2>
      <p className={"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"}>
        {isLoginMode ? "Login to" : "Create account" } Component-lab if you can because we don&apos;t have a login flow
        yet
      </p>
      <form className={"my-8"} onSubmit={handleSubmit}>
        {inputes.map(({id, placeholder, type, label}, idx) => (
          <LabelInputContainer key={idx} className={`mb-4 ${isLoginMode && idx <= 1 && "hidden"}`}>
            <Label htmlFor={id}>{label}</Label>
            <Input className={"dark:text-red-500"} id={id} placeholder={placeholder} type={type} ref={e => {
              if (e) inputsRef.current[idx] = e;
            }}/>
            {showErrors.email.error && <p className={"text-red-500 text-sm"}>{showErrors.email.message}</p>}
          </LabelInputContainer>
        ))}
        <div className={"flex gap-2"}>
          <button
            className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto px-6 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"}
            type={"button"}
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setShowErrors(getDefaultError());
            }}
            disabled={loginMutation.isPending}
          >
            {isLoginMode ?  "Sing up": "Sing in" } &rarr;
            <BottomGradient />
          </button>
          <button
            className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto flex-grow text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"}
            type={"submit"}
          >
            {isLoginMode ?  "Sing in" : "Create Account"} &rarr;
            <BottomGradient />
          </button>
        </div>

        <div
          className={"bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"} />
        <div className={"flex flex-col space-y-4"}>
          <button
            className={"relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"}
            type={"submit"}
            disabled={loginMutation.isPending}
          >
            <IconBrandGithub className={"h-4 w-4 text-neutral-800 dark:text-neutral-300"} />
            <span className={"text-neutral-700 dark:text-neutral-300 text-sm"}>
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className={"relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"}
            type={"submit"}
            disabled={loginMutation.isPending}
          >
            <IconBrandGoogle className={"h-4 w-4 text-neutral-800 dark:text-neutral-300"} />
            <span className={"text-neutral-700 dark:text-neutral-300 text-sm"}>
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={"flex flex-col gap-1"}>
                <h3 className={"text-lg font-semibold"}>Verify Information</h3>
                <p className={"text-sm text-neutral-600 dark:text-neutral-300"}>
                  send a verification code to your email address <br/> <code>bapparaj@code.com</code>
                </p>
              </ModalHeader>
              <ModalBody>
                <OtpVerify />
                {counter}
              </ModalBody>
              <ModalFooter className={"justify-between"}>
                <Button variant={"bordered"} color={"danger"}>
                  Change Email
                </Button>
                <button
                  className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto px-6 text-white border-t border-gray-600 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] tracking-wider"}
                  type={"button"}
                >
                  Verify &rarr;
                  <BottomGradient />
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
