"use client";

import { Input, Textarea, Button } from "@nextui-org/react";
import {IconFileInfo, IconZoomCheck, IconCodeDots, IconUpload} from "@tabler/icons-react";
import { ReactNode } from "react";

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
  return (
    <div className={"w-full h-full"}>
      <div className={"flex flex-col gap-5 border-b border-gray-600 py-5"}>
        <div className={"flex flex-col md:flex-row gap-5"}>
          <div className={"md:w-1/2"}>
            <p className={"font-bold"}>Component Name <span className={"text-danger-500"}>*</span></p>
            <Input
              isRequired={true}
              type={"text"}
              variant={"bordered"}
              fullWidth={true}
            />
          </div>
          <div className={"md:w-1/2"}>
            <p className={"font-bold"}>Github Url <span className={"text-danger-500"}>*</span></p>
            <Input
              isRequired={true}
              type={"text"}
              variant={"bordered"}
              fullWidth={true}
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
        <Button  className={"bg-[#468237]"}>Create Component</Button>
      </div>
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
