"use client";

import { useMemo } from "react";
import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card, CardHeader, CardBody, CardFooter, Divider, Image
} from "@nextui-org/react";
import { IconBell } from "@tabler/icons-react";
import Link from "next/link";

import { SideBarItem } from "@/components/mainPage/SideBarItem";
import { EmailIcon, PasswordIcon, LogoutIcon } from "@/icons/animation-icon";

const Page = () => {

  const userLinks = useMemo(() => [
    {
      link: "/email",
      icon: EmailIcon,
      title: "Email"
    },
    {
      link: "/password",
      icon: PasswordIcon,
      title: "Password"
    },
    {
      icon: LogoutIcon,
      title: "Logout"
    }
  ], []);

  return (
    <div className={"h-auto w-full flex flex-col items-center justify-center"}>
      <div className={"flex h-20 w-full items-center justify-end gap-x-6 px-6 max-w-[1000px]"}>
        <div className={"h-fit w-fit"}>
          <Popover
            showArrow={true}
            classNames={{
              base: [
                // arrow color
                "before:bg-default-200",
              ],
              content: [
                "py-3 px-4 border border-default-200",
                "bg-gradient-to-br from-white to-default-300",
                "dark:from-default-100 dark:to-default-50",
              ],
            }}
          >
            <PopoverTrigger>
              <div
                className={"relative w-8 h-8 text-black dark:text-white flex items-center justify-center cursor-pointer"}
              >
                <div
                  className={"absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm"}>
                  9+
                </div>
                <IconBell size={24} />
              </div>
            </PopoverTrigger>
            <PopoverContent className={"p-1"}>
              <Card className={"max-w-[400px]"}>
                <CardHeader className={"flex gap-3"}>
                  <Image
                    alt={"nextui logo"}
                    height={40}
                    radius={"sm"}
                    src={"https://avatars.githubusercontent.com/u/86160567?s=200&v=4"}
                    width={40}
                  />
                  <div className={"flex flex-col"}>
                    <p className={"text-md"}>NextUI</p>
                    <p className={"text-small text-default-500"}>nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href={"https://github.com/nextui-org/nextui"} >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
            </PopoverContent>
          </Popover>
        </div>
        <div className={"h-auto w-auto"}>
          <Popover
            showArrow={true}
            placement={"bottom"}
            classNames={{
              base: [
                // arrow color
                "before:bg-default-200",
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
              <div className={"flex flex-col"}>
                {userLinks.map((item) => (
                  <SideBarItem
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    link={item.link}
                    color={"auto"}
                    linkClassName={"min-w-[200px] flex items-center justify-center"}
                    onClick={() => {
                      if (item.title === "Logout") {
                        console.log("Logout");
                      }
                    }}
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Page;
