"use client";

import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import Link from "next/link";

import {LinkPreview} from "@/components/ui/link-preview";

export const Footer = () => {

  const links =[
    {
      icon: <IconBrandGithub />,
      name: "Github",
      url: "https://github.com/Bapparajsk"
    },
    {
      icon: <IconBrandLinkedin />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/bappa-raj-sk-6a0153233/"
    }
  ];

  return (
    <div className={"w-full h-auto min:h-24 py-5 font-Work-Sans mt-10 border-t border-gray-600 flex flex-col sm:flex-row items-center justify-center gap-10"}>
      <div>
        <p className={""}>© 2024 Component Lab</p>
      </div>
      <div className={"flex gap-3"}>
        <LinkPreview url={"/"} imgurl={"/images/hero-bar-dark.png"} className={"font-bold"}>
          Product
        </LinkPreview>
        <LinkPreview url={"https://bapparaj.tech"} imgurl={"/images/hero-bar-dark.png"} className={"font-bold"}>
          portfolio
        </LinkPreview>
        <LinkPreview url={"https://quiz-app-amber-chi.vercel.app/"} imgurl={"/images/hero-bar-dark.png"} className={"font-bold"}>
          Quiz Game
        </LinkPreview>
      </div>
      <div className={"flex gap-3 text-blue-500"}>
        {
          links.map((link, idx) => (
            <Link
              href={link.url}
              key={idx}
              aria-label={link.name}
              target={"_blank"}
              className={"text-gray-500 transition-colors duration-300 hover:text-blue-500 dark:hover:text-gray-400"}
            >
              {link.icon}
            </Link>
          ))
        }
      </div>
    </div>
  );
};
