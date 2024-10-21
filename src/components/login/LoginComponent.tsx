"use client";
import React, { useState } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


import { BottomGradient, Input, Label, LabelInputContainer } from "@/components/ui/singinfrom";
import { OtpVerify } from "@/components/login/OtpVerify";


export const LoginComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
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
        {!isLoginMode && <div className={"flex flex-col space-y-2 mb-4"}>
          <LabelInputContainer>
            <Label htmlFor={"Name"}>Full Name</Label>
            <Input id={"Name"} placeholder={"John dev"} type={"text"} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor={"u-name"}>User Name</Label>
            <Input id={"u-name"} placeholder={"@john"} type={"text"} />
          </LabelInputContainer>
        </div>}
        <LabelInputContainer className={"mb-4"}>
          <Label htmlFor={"email"}>Email Address</Label>
          <Input id={"email"} placeholder={"john@ex.com"} type={"email"} />
        </LabelInputContainer>
        <LabelInputContainer className={"mb-4"}>
          <Label htmlFor={"password"}>Password</Label>
          <Input id={"password"} placeholder={"••••••••"} type={"password"} />
        </LabelInputContainer>
        <div className={"flex gap-2"}>
          <button
            className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto px-6 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"}
            type={"submit"}
            onClick={() => setIsLoginMode(!isLoginMode)}
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
        isOpen={true}
        onOpenChange={onOpenChange}
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
              </ModalBody>
              <ModalFooter>
                <Button color={"primary"} onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
