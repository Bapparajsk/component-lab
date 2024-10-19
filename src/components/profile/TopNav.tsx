"use client";

import { useMemo } from "react";
import {
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Card,
    CardBody,
    CardFooter,
    Divider
} from "@nextui-org/react";
import { IconBell } from "@tabler/icons-react";

import { SideBarItem } from "@/components/mainPage/SideBarItem";
import { EmailIcon, PasswordIcon, LogoutIcon, SeeAllIcon } from "@/icons/animation-icon";
import { Notiftion } from "@/components/profile/index";

export default function TopNav() {

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
        <div className={"h-20 w-full max-w-[150px] flex items-center justify-end gap-x-6 px-6 "}>
            <div className={"h-fit w-fit"}>
                <Popover
                    showArrow={true}
                    classNames={{
                        base: [
                            // arrow color
                            "before:bg-default-200 mt-2",
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
                            className={"relative w-8 h-8 text-black dark:text-white flex items-center justify-center cursor-pointer group"}
                        >
                            <div
                                className={"absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm z-40"}>
                                9+
                            </div>
                            <IconBell size={24} className={"z-10 transition-transform duration-300 group-hover:scale-125"} />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className={"p-1"}>
                        <Card className={"max-w-[400px]"}>
                            <CardBody>
                                <div className={"w-full h-auto flex flex-col gap-2"}>
                                    <Notiftion
                                        img={"https://i.pravatar.cc/150?u=a04258114e29026702d"}
                                        name={"John Do"}
                                        username={"@johndoe"}
                                        profileLink={"/"}
                                        body={"lorem ipsum dolor sit amet, co  labore et dolo dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna alre magna aliqua."}
                                    />
                                    <Notiftion
                                        img={"https://i.pravatar.cc/150?u=a04258114e29026702d"}
                                        name={"John Do"}
                                        username={"@johndoe"}
                                        profileLink={"/"}
                                        body={"lorem ipsum dolor sit amet, co  labore et dolo dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna al dolor sit amet, co  labore et dolore magna alre magna aliqua."}
                                    />
                                    <Notiftion
                                        img={"https://i.pravatar.cc/150?u=a04258114e29026702d"}
                                        name={"John Do"}
                                        username={"@johndoe"}
                                        profileLink={"/"}
                                        body={"lorem ipsum dolor sitlabore et dolore magna al dolor sit amet, na alre magna aliqua."}
                                    />
                                </div>
                            </CardBody>
                            <Divider />
                            <CardFooter className={"h-fit"}>
                                <SideBarItem
                                    className={"h-4"}
                                    title={"See All"}
                                    iconSize={20}
                                    icon={SeeAllIcon}
                                    link={"/notiftion"}
                                    color={"auto"}
                                    textAnimation={true}
                                    linkClassName={"min-w-[200px] flex items-center justify-center"}
                                />
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
                            "before:bg-default-200 mt-2",
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
                            className={" transition-transform duration-300 cursor-pointer hover:scale-110"}
                            src={"https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg"}
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
    );
}
