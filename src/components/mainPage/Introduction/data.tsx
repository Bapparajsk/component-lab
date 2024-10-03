import { ReactNode } from "react";

export interface SectionType {
    id: string;
    label: string;
    content: ReactNode;
}

export const sections: SectionType[] = [
  {
    id: "1",
    label: "What is Component Lab?",
    content: (
      <div className={"w-52 h-auto border-1"}>
        <h3>What is Component Lab?</h3>
        <p>
          Component Lab is a tool that allows you to create and share React components. You can create a new component,
          write the code for it, and then share it with others. You can also use components that others have created.
        </p>
      </div>
    )
  },
  {
    id: "2",
    label: "How to use Component Lab",
    content: (
      <div className={"w-52 h-auto border-1"}>
        <h3>How to use Component Lab</h3>
        <p>
          To use Component Lab, you need to create an account. Once you have an account, you can create a new component
          by clicking the &quot;Create Component&quot; button. You can then write the code for your component and save it. You can
          also use components that others have created by searching for them in the search bar.
        </p>
      </div>
    )
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
