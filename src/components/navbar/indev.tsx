"use client";
import React, {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Button,
    Kbd,
    Tooltip,
    User,
} from "@nextui-org/react";
import { IconTableFilled, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
import { SearchIcon } from "@nextui-org/shared-icons";
import Link from "next/link";

import {TolContent} from "@/components/navbar/TolContent";
import {ThemeToggleButton} from "@/components/navbar/ThemeToggle";
import { HoveredLink, Menu, MenuItem } from "@/components/mainPage/dropdown";
import { content } from "@/data/componentPage/content";

const optimalPath = (path: string) => {
    return path.split(" ").join("").toLowerCase();
};

export default function AppNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [active, setActive] = useState<string | null>(null);


    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const links = [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/bappa-raj-sk-6a0153233/",
            icon: IconBrandLinkedin,
        },
        {
            name: "Github",
            url: "https://github.com/Bapparajsk",
            icon: IconBrandGithub,
        },
    ];

    return (
        <Navbar
            isBordered={true}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={"z-[1000]"}

        >
            <NavbarContent justify={"start"} className={"lg:hidden"}>
                <NavbarBrand>
                    <Link href={'/'} color={"foreground"} className={"flex items-start justify-center"}>
                        <IconTableFilled />
                        <p className={"font-bold text-inherit ml-1"}>Component Lab</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className={"lg:hidden"} justify={"end"}>
                {
                    links.map((link, index) => (
                        <NavbarItem key={index}>
                            <Link
                                href={link.url}
                                target={"_blank"}
                                className={"text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-300 ease-in-out transition-all hover:scale-125"}
                            >
                                <link.icon />
                            </Link>
                        </NavbarItem>
                    ))
                }
                <NavbarItem>
                    <ThemeToggleButton />
                </NavbarItem>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className={"hidden lg:flex gap-4"} justify={"center"}>
                <NavbarBrand>
                    <Link href={'/'} color={"foreground"} className={"flex items-start justify-center"}>
                        <IconTableFilled />
                        <p className={"font-bold text-inherit ml-1"}>Component Lab</p>
                    </Link>
                </NavbarBrand>
                <NavbarBrand>
                    <div className={"w-full h-full flex items-center"}>
                        <Menu setActive={setActive}>
                            {
                                Object.keys(content).map((item, index) => {
                                    return (
                                          <MenuItem setActive={setActive} active={active} item={item} key={index}>
                                              <div className={"flex flex-col space-y-4 text-sm"}>
                                                  {
                                                      content[item].map((subItem, subIndex) => {
                                                          return (
                                                            <HoveredLink
                                                              href={`/${optimalPath(item)}/${subItem.name.toLowerCase()}`}
                                                              title={item as "Getting Started" | "Components" | "Special Effects"}
                                                              key={subIndex}>
                                                                {subItem.name}
                                                            </HoveredLink>
                                                          );
                                                      })
                                                  }
                                              </div>
                                          </MenuItem>
                                    );
                                })
                            }
                        </Menu>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify={"end"} className={"hidden lg:flex"}>
                {
                    links.map((link, index) => (
                      <NavbarItem key={index}>
                          <Link
                            href={link.url}
                            target={"_blank"}
                            className={"text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-300 ease-in-out transition-all hover:scale-125"}
                          >
                              <link.icon />
                          </Link>
                      </NavbarItem>
                    ))
                }
                <NavbarItem> <ThemeToggleButton /> </NavbarItem>
                <NavbarItem>
                    <Button
                      startContent={<SearchIcon />}
                      endContent={<Kbd keys={["ctrl"]}>K</Kbd>}
                      variant={"flat"}
                      color={"default"}
                    >
                        Quick Search...
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip

                      content={<TolContent name={"BapparajSk"} />}
                    >
                        <User
                          name={"Bapparaj sk"}
                          description={(
                            <Link className={"text-blue-500"} href={"https://github.com/Bapparajsk"} target={"_blank"}>
                                    @bapparajsk
                                </Link>
                            )}

                            avatarProps={{
                                src: "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg",
                                className: "cursor-pointer"
                            }}
                        />
                    </Tooltip>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={"w-full"}
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={"#"}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
