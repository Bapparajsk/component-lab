"use client";

import { useMemo } from "react";
import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Divider
} from "@nextui-org/react";
import { IconBell } from "@tabler/icons-react";
import Link from "next/link";

import { SideBarItem } from "@/components/mainPage/SideBarItem";
import { EmailIcon, PasswordIcon, LogoutIcon } from "@/icons/animation-icon";
import { Notiftion } from "@/components/mainPage/dashboard/index";

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
                <CardHeader className={"flex "}>
                  <div className={"absolute right-2 cursor-pointer"}>
                    <Link href={"/user/notiftion"} className={"relative group text-blue-600 flex"}>
                      <span className={"transition-color duration-300 group-hover:text-blue-500"}>View all</span>
                      <span
                        className={"absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"}
                      ></span>
                    </Link>
                  </div>
                </CardHeader>
                <CardBody>
                  <Notiftion
                    img={"https://i.pravatar.cc/150?u=a04258114e29026702d"}
                    name={"John Doe"}
                    username={"@johndoe"}
                    body={"lorem ipsum dolor sit amet, co  labore et dolo dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna alre magna aliqua."}
                  />
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
