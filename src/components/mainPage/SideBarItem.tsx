"use client";

import { useRef } from "react";
import { Player } from "@lordicon/react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const  SideBarItem = ({
                        title,
                        icon,
                        link,
                        className,
                        color = "",
                        titleClassName,
                        textAnimation,
                      } : {
  title: string;
  icon: object;
  link?: string;
  className?: string;
  color?: "auto" | "";
  titleClassName?: string;
  textAnimation?: boolean;
}) => {
  const playerRef = useRef<Player>(null);
  return (
    <div
      className={cn("w-full h-12 flex items-center justify-start group text-black dark:text-white group", className)}
      onMouseEnter={() => {
        playerRef.current?.playFromBeginning();
      }}
    >
      <Link href={link || ""} className={"w-full h-auto flex items-center justify-start gap-x-2"}>
        <div className={"transition-transform duration-300 group-hover:scale-125"}>
          <Player
            icon={icon}
            ref={playerRef}
            size={26}
            colorize={color}
          />
        </div>
        <span
          className={cn(
            "transition-all duration-300 group-hover:translate-x-2",
            textAnimation && "group-hover:font-bold group-hover:text-blue-500",
            titleClassName
          )}>{title}</span>
      </Link>
    </div>
  );
};
