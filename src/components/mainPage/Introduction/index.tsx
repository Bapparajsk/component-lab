"use client";

import { Image } from "@nextui-org/react";

import { LinkText } from "@/components/ui/text-effect";

export const Introduction = () => {
  return (
    <div className={"w-full h-auto px-20 text-large font-rubik"}>
      <div className={"w-full h-auto mt-4 ml-5"}>
        <h3 className={"text-6xl font-fredoka mb-20"}>Introduction</h3>
        <p className={"font-fredoka text-lg"}>Welcome to the Component Lab documentation!</p>
      </div>
      <div className={"w-full h-auto"}>
        <Image
          alt={"Programming code background"}
          height={500}
          className={"mt-10 border-[1px] border-gray-600 object-cover"}
          src={"https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"}
        />
      </div>
      <div className={"w-full h-auto mt-10 space-y-5"}>
        <h3 className={"font-fredoka text-5xl"}>What is Component Lab?</h3>
        <div className={"space-y-5"}>
          <p>Component Lab is a versatile UI library designed for developers who want to create and share React
            components efficiently.
            It provides a platform where you can build new components, save them, and even utilize components created
            by others.
          </p>
          <p>
            Component Lab Helps you to create and share React components. It allows you to easily create new
            components
            and share them with others.
          </p>
        </div>
      </div>
      <div className={"w-full h-[1px] bg-gray-600 my-10"} />
      <div className={"w-full h-auto space-y-5"}>
        <h3 className={"text-5xl font-fredoka"}>
          How Component Lab Works?
        </h3>
        <p>Component Lab is a versatile UI library designed for developers who want to create and share React components
          efficiently.
          It provides a platform where you can build new components, save them, and even utilize components created by
          others.
        </p>
      </div>
      <div className={"w-full h-[1px] bg-gray-600 my-10"} />
      <div className={"w-full h-auto space-y-5"}>
        <h3 className={"text-5xl font-fredoka"}>How to Upload your Beautiful Component?</h3>
        <div className={"w-full h-auto"}>
          <div className={"w-full h-auto ml-5"}>
            <div className={"w-full h-auto relative mb-3"}>
              <h4 className={"font-fredoka text-4xl"}>Create a new Component Lab Account.</h4>
              <div className={"w-full h-auto ml-6 relative mt-2"}>
                <p>
                  Fast Sing-up with your Google account or create a new account with your email, <LinkText
                  href={"/user"} space={false}>Sing-Up</LinkText>.
                </p>
                <p>
                  After creating an account, you can start uploading your components <LinkText href={"/upload"}
                                                                                               space={false}>Upload
                  Here</LinkText>.
                </p>
                <p>
                  You can also browse and download components created by others <LinkText href={"/components"}
                                                                                          space={false}>Browse
                  Components</LinkText>.
                </p>
                <div className={"w-[2px] rounded-2xl h-full bg-red-600 absolute -left-4 top-0"} />
              </div>
            </div>
            <div className={"w-full h-auto relative"}>
              <h4 className={"font-fredoka text-4xl"}>Component Upload Option.</h4>
              <div className={"w-full h-auto ml-6 relative mt-2"}>
                <p>
                  Connect your Github account to upload your components directly from your repository, <LinkText
                  href={"/upload"} space={false}>Connect GihHub</LinkText>.
                </p>
                <p>
                  You can also upload your components drag and drop, <LinkText href={"/upload"} space={false}>Upload
                  Manually</LinkText>.
                </p>
                <div className={"w-[2px] rounded-2xl h-full bg-red-600 absolute -left-4 top-0"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
