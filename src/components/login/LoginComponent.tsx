"use client";
import { useEffect, useMemo, useState, FormEvent, useRef } from "react";
import { IconBrandGithub, IconBrandGoogle, IconArrowNarrowRight } from "@tabler/icons-react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, CircularProgress } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

import { BottomGradient, Input, Label, LabelInputContainer } from "@/components/ui/singinfrom";
import { OtpVerify } from "@/components/login/OtpVerify";
import { chatAllDataValid } from "@/lib/validator";
import { login, register, verifyOtp } from "@/lib/authentication";
import { ErrorTypes } from "@/types/form";
import { getDefaultError, inputs } from "@/lib/form";
import { useUser } from "@/context/UserContext";


export const LoginComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [time, setTime] = useState(10);
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string>("");
  const [showErrors, setShowErrors] = useState<ErrorTypes>(getDefaultError());
  const [token, setToken] = useState("");

  const { setUserState, setTokenInLocalStorage } = useUser();
  const router = useRouter();

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
            type={"button"}
            onClick={() => {
              setTime(10);
              resendOtpHandler();
            }}
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

  const mutation = useMutation({
    mutationKey: ["form-mutation"],
    mutationFn: async ({ data, fn, onSuccess, onError }: { data: any, fn: (data: any) => Promise<any>, onSuccess: (data: any) => void, onError?: (error: any) => void }) => {
      try {
        const response = await fn(data);
        onSuccess(response);
      } catch (error) {
        if (onError) {
          onError(error);
        }
      }
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [fullName, UName, email, password] = inputsRef.current.map((input) => input.value);
    const errors = chatAllDataValid({ email, password, fullName, UName }, isLoginMode);
    if (errors !== null) {
      setShowErrors(errors);
      return;
    }

    // * Login User mutation
    if (isLoginMode) {

      if (mutation.isPending) return;
      if(showErrors.main.error && showErrors.email.data === email && showErrors.password.data === password ) {
        setShowErrors({ ...showErrors, main: { error: true, message: "Please enter different Credentials...!" }});
        return;
      }

      mutation.mutate({
        data: { email, password }, fn: login,
        onSuccess: (data) => {
          setUserState(data.user);
          setTokenInLocalStorage(data.token);
          router.replace("/profile");
        },
        onError: (error) => {
          // ! Handle error
          if(!axios.isAxiosError(error)) {
            setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
            return;
          }

          const { response } = error;
          if(response?.status !== 401) {
            setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
            return;
          }

          setShowErrors({
            ...getDefaultError(),
            main: { error: true, message: "Invalid Credentials, Please try again..." },
            email: { error: true, message: "Email is incorrect", data: email },
            password: { error: true, message: "Password is incorrect",  data: password },
          });
        }
      });
      return;
    } 

    // * Register User mutation
    mutation.mutate({
      data: { fullName, UName, email, password }, fn: register,
      onSuccess: (token) => {
        console.log(token);
        setToken(token);
        onOpen();
      },
      onError: (error) => {
        // ! Handle error
        console.error(error);
        if(!axios.isAxiosError(error)) {
          setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
          return;
        }

        const { response } = error;
        if(response?.status !== 400) {
          setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
          return;
        }

        const e = getDefaultError();
        let message = "Something went wrong";

        switch (response.data?.message) {
          case "User already exist":
            message = "User already exists";
            e.email = { error: true, message: "Email already exists", data: email };
            e["u-name"] = { error: true, message: "User Name already exists", data: UName };
            break;
          case "Display name already exist":
            message = "Username already exists";
            e["u-name"] = { error: true, message: "user Name already exists", data: UName };
            break;
          case "Email already exist":
            message = "Email already exists";
            e.email = { error: true, message, data: email };
            break;
        }

        e.main = { error: true, message: `${message}, Please try different Details...!`, data: "" };
        setShowErrors(e);
      }
    });
  };

  function verifyOtpHandler() {
    if (mutation.isPending) return;
    if (otp.length !== 4) {
      setShowErrors({ ...getDefaultError(), otp: { error: true, message: "Please enter 4 digit OTP", data: otp } });
      return;
    }

    if(showErrors.otp.error && showErrors.otp.data === otp) {
      setShowErrors({ ...getDefaultError(), otp: { error: true, message: "Please enter different OTP", data: otp } });
      return;
    }

    mutation.mutate({
      data: { token, otp },
      fn: verifyOtp,
      onSuccess: (data) => {
        setUserState(data.user);
        setTokenInLocalStorage(data.token);
        router.replace("/profile");
      },
      onError: (error) => {
        // ! Handle error
        console.error(error);
        if(!axios.isAxiosError(error)) {
          setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
          return;
        }

        const { response } = error;
        if(response?.status !== 400) {
          setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
          return;
        }

        const e = getDefaultError();
        let message = "Something went wrong";

        switch (response.data?.message) {
          case "Invalid OTP":
            message = "Invalid OTP";
            e.otp = { error: true, message, data: otp };
            break;
        }

        e.main = { error: true, message: `${message}, Please try different OTP...!`, data: "" };
        setShowErrors(e);
      }
    });
  }

  function resendOtpHandler() {
    if (isLoginMode || mutation.isPending || time !== 0) return;
    mutation.mutate({
      data: { token },
      fn: register,
      onSuccess: (token) => { setToken(token); },
      onError: (error) => {
        // ! Handle error
        console.error(error);
        setShowErrors({ ...getDefaultError(), main: { error: true, message: "Something went wrong, Please try again..." }});
      }
    });
  }

  return (
    <div
      className={"max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"}>
      <h2 className={"font-bold text-xl text-neutral-800 dark:text-neutral-200"}>
        Welcome to Component Lab
      </h2>
      <p className={"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"}>
        {isLoginMode ? "Login to" : "Create account"} Component-lab if you can because we don&apos;t have a login flow
        yet
      </p>
      {showErrors.main.error && <p className={"mt-8 text-red-600 font-fredoka"}>
        {showErrors.main.message}
      </p>}
      <form className={"my-8"} onSubmit={handleSubmit}>
        {inputs.map(({ id, placeholder, type, label }, idx) => (
          <LabelInputContainer key={idx} className={`mb-4 ${isLoginMode && idx <= 1 && "hidden"}`}>
            <Label htmlFor={id}>{label}</Label>
            <Input className={`${showErrors[id].error && "text-red-500 dark:text-red-500"}`} id={id} placeholder={placeholder} type={type} ref={e => {
              if (e) inputsRef.current[idx] = e;
            }} />
            {showErrors[id].error && <p className={"text-red-500 text-sm"}>{showErrors[id].message}</p>}
          </LabelInputContainer>
        ))}
        <div className={"flex gap-2"}>
          <button
            className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-auto px-6 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"}
            type={"button"}
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setShowErrors(getDefaultError());
            }}
            disabled={mutation.isPending}
          >
            {isLoginMode ? "Sing up" : "Sing in"} <IconArrowNarrowRight size={16} stroke={2} />
            <BottomGradient />
          </button>
          <button
            className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-auto flex-grow text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"}
            type={"submit"}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <CircularProgress size={"sm"} /> : (isLoginMode ? "Sing in" : "Create Account")} {!mutation.isPending && <IconArrowNarrowRight size={16} stroke={2} />}
            <BottomGradient />
          </button>
        </div>

        <div
          className={"bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"} />
        <div className={"flex flex-col space-y-4"}>
          <button
            className={"relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"}
            type={"submit"}
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
        // isOpen={true}
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
                  send a verification code to your email address <br /> <code>bapparaj@code.com</code>
                </p>
              </ModalHeader>
              <ModalBody>
              {showErrors["otp"].error && <p className={"text-red-500 text-sm"}>{showErrors["otp"].message}</p>}
                <OtpVerify otp={otp} setOtp={(o) => setOtp(o)} isInvalid={showErrors["otp"].error}/>
                {counter}
              </ModalBody>
              <ModalFooter className={"justify-between"}>
                <Button variant={"bordered"} color={"danger"} onPress={() => {
                  onClose();
                }}>
                  Change Email
                </Button>
                <button
                  className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto px-6 text-white border-t border-gray-600 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] tracking-wider"}
                  type={"button"}
                  onClick={verifyOtpHandler}
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
