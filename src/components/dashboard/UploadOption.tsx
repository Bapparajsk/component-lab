"use client";

import { Button, Input, Pagination } from "@nextui-org/react";
import { IconBookUpload } from "@tabler/icons-react";

import { PostCard } from "@/components/dashboard/PostCard";
import QueryButton from "@/components/dashboard/QueryButton";

export const UploadOption = () => {

  return (
    <div className={"w-full h-auto py-4 px-3 flex gap-x-2 flex-col items-center"}>
      <div className={"w-full h-auto flex flex-col gap-5 max-w-6xl"}>
        <div className={"w-full h-auto flex gap-2"}>
          <div className={"w-full h-auto "}>
            <Input
              variant={"bordered"}
              placeholder={"Find a Component..."}
              color={"primary"}
              classNames={{
                "input": "tracking-wider"
              }}
            />
          </div>
          <div className={"w-auto h-auto flex gap-2"}>
            <QueryButton title={"Tag"} onClick={(key) => (console.log(key))}/>
            <QueryButton title={"Sort"} onClick={(key) => (console.log(key))}/>
            <Button startContent={<IconBookUpload size={20} />} className={"text-white font-bold bg-[#4F913D]"}>
              New
            </Button>
          </div>
        </div>
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
          description={"This is a simple upload option for your project. This is a simple upload option for your project. This is a simple upload option for your project. This is a simple upload option for your project. This is a simple upload option for your project."}
        />

        <div className={"w-full h-auto flex justify-end"}>
          <Pagination
            showShadow={true}
            isCompact={true}
            showControls={true}
            total={20}
            initialPage={1}
            onChange={(page: number) => {
              console.log(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};




