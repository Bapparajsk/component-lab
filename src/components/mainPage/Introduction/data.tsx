"use client";

import { ReactNode } from "react";
import { Image } from "@nextui-org/react";

import { LinkText } from "@/components/ui/text-effect";

export interface SectionType {
    id: string;
    label: string;
    content: ReactNode;
}

export const sections: SectionType[] = [
  {
    id: "1",
    label: "What is Component Lab?",
    content: <ComponentLab />
  },
  {
    id: "2",
    label: "How to use Component Lab",
    content: <HowToUseComponentLab />
  },
  {
    id: "3",
    label: "Why use Component Lab?",
    content: (
      <div className={"w-52 h-auto border-1"}>
        <h3>Why use Component Lab?</h3>
        <p>
          Component Lab is a great tool for developers who want to create and share React components. It allows you to
          easily create new components and share them with others. It also allows you to use components that others have
          created, saving you time and effort.
        </p>
      </div>
    )
  }
];

function ComponentLab () {
  return (
    <div className={"w-full h-auto"}>
      <h3 className={"text-6xl font-fredoka mb-20"}>Introduction</h3>
      <p className={"font-fredoka text-lg"}>Welcome to the Component Lab documentation!</p>
      <Image
        alt={"Programming code background"}
        width={700}
        className={"mt-10 border border-gray-500"}
        src={"https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"}
      />
      <div className={"w-full h-auto font-rubik mt-10 space-y-5"}>
        <h3 className={"font-fredoka text-5xl"}>What is Component Lab?</h3>
        <div className={"space-y-5 text-large"}>
          <p>Component Lab is a versatile UI library designed for developers who want to create and share React
            components efficiently.
            It provides a platform where you can build new components, save them, and even utilize components created by
            others.
            <LinkText href={"https://bapparaj.me"}>
              Create Your Component.
            </LinkText>
          </p>
          <p>
            Component Lab Helps you to create and share React components. It allows you to easily create new components
            and share them with others.
          </p>
        </div>
      </div>
      <div className={"w-full h-[1px] bg-gray-600 mt-10"} />
    </div>
  );
}

function HowToUseComponentLab() {
  return (
    <div className={"w-full h-auto mt-10"}>
      <h3 className={"text-5xl font-fredoka mb-20"}></h3>
      <p>Component Lab is a versatile UI library designed for developers who want to create and share React components
        efficiently.
        It provides a platform where you can build new components, save them, and even utilize components created by
        others.
        <LinkText href={"https://bapparaj.me"}>
          Create Your Component.
        </LinkText>
      </p>
      <div className={"w-full h-[1px] bg-gray-600 mt-10"} />
    </div>
  );
}
