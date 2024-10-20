"use client";

import { useRef } from "react";
import { Player } from "@lordicon/react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const SideBarItem = ({
  title,
  icon,
  iconSize,
  link,
  className,
  color = "",
  titleClassName,
  textAnimation,
  linkClassName,
  onClick,
}: {
  title: string;
  icon: object;
  iconSize?: number;
  link?: string;
  className?: string;
  color?: "auto" | "";
  titleClassName?: string;
  textAnimation?: boolean;
  linkClassName?: string;
  onClick?: () => void;
}) => {
  const playerRef = useRef<Player>(null);
  return (
    <div
      className={cn("w-full h-12 flex items-center justify-start group text-black dark:text-white group", className)}
      onMouseEnter={() => {
        playerRef.current?.playFromBeginning();
      }}
      onClick={onClick}
    >
      <Link href={link || ""} className={cn("w-full h-auto flex items-center justify-start gap-x-2", linkClassName)}>
        <div className={"transition-transform duration-300 group-hover:scale-125"}>
          <Player
            icon={icon}
            ref={playerRef}
            size={iconSize || 26}
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
