"use client";
import React, {useState, useCallback} from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { IconTableFilled } from '@tabler/icons-react';
import {IconMoon, IconSun, IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import {usePathname} from "next/navigation";

import { useTheme } from "@/context/ThemeContext";


export default function AppNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    const isValidPath = useCallback((name: string, fullMach = false) => {
        if (fullMach) return pathname === name;
        return pathname.startsWith(name);
    },[]);

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

    return (
        <Navbar
            isBordered={true}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className={"sm:hidden"} justify={"start"}>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className={"sm:hidden pr-3"} justify={"center"}>
                <NavbarBrand>
                    <IconTableFilled />
                    <p className={"font-bold text-inherit ml-1"}>Component Lab</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className={"hidden sm:flex gap-4"} justify={"center"}>
                <NavbarBrand>
                    <IconTableFilled />
                    <p className={"font-bold text-inherit ml-1"}>Component Lab</p>
                </NavbarBrand>
                <NavbarItem isActive={isValidPath("/", true)}>
                    <Link color={isValidPath("/", true) ? undefined : "foreground"} href={"/"}>
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={isValidPath("/component")}>
                    <Link color={isValidPath("/component") ? undefined : "foreground"} href={"/component"}>
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={"foreground"} href={"#"}>
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify={"end"}>
                <NavbarItem>
                    <Link
                        href={"https://www.linkedin.com/in/bappa-raj-sk-6a0153233/"}
                        target={"_blank"}
                        className={"text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-300 ease-in-out transition-all hover:scale-125"}
                    >
                        <IconBrandLinkedin/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        href={"https://github.com/Bapparajsk"}
                        target={"_blank"}
                        className={"text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-300 ease-in-out transition-all hover:scale-125"}
                    >
                        <IconBrandGithub/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    {(theme === "light" ?
                        <IconMoon className={"cursor-pointer"} onClick={toggleTheme} color={"#000000"}/> :
                        <IconSun className={"cursor-pointer"} onClick={toggleTheme} color={"#FFFFFF"}/>)}
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
                            size={"lg"}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
