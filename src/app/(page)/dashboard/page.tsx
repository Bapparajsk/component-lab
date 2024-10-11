"use client";

import {Badge, Button, Avatar,
  Popover, PopoverTrigger, PopoverContent
} from "@nextui-org/react";
import { Notification } from "@nextui-org/shared-icons";

const Page = () => {
  return (
    <div className={"w-full h-auto"}>
      <div className={"w-full h-20 flex items-center justify-end gap-x-4 px-6"}>
        <div className={"w-fit h-fit "}>
          <Badge content={"1"} shape={"circle"} color={"danger"} showOutline={false} placement={"top-right"}>
            <Button
              radius={"full"}
              isIconOnly={true}
              aria-label={"more than 99 notifications"}
              variant={"light"}
            >
              <Notification className={"fill-current"} size={24} />
            </Button>
          </Badge>
        </div>
        <div className={"w-auto h-auto"}>
          <Popover
            showArrow={true}
            classNames={{
              base: [
                // arrow color
                "before:bg-default-200"
              ],
              content: [
                "py-3 px-4 border border-default-200",
                "bg-gradient-to-br from-white to-default-300",
                "dark:from-default-100 dark:to-default-50",
              ],
            }}
          >
            <PopoverTrigger>
              <Avatar
                className={"cursor-pointer"}
                src={"https://i.pravatar.cc/150?u=a04258114e29026702d"}
              />
            </PopoverTrigger>
            <PopoverContent className={"p-1"}>
              <div className={"flex flex-col gap-y-2"}>
                <Button >Profile</Button>
                <Button >Settings</Button>
                <Button >Logout</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Page;
