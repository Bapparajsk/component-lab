"use client";

import { ReactNode } from "react";

import {cn} from "@/lib/utils";

export const LinkText = ({
  children,
  color,
  href,
  space = true,
  endContent,
  className
}: {
  children: ReactNode;
  color?: string;
  href?: string;
  space?: boolean;
  endContent?: ReactNode;
  className?: string
}) => {

  const onHandledClick = () => {
    if (!href) {
      return;
    }
    window.open(href, href.startsWith("http") ? "_blank" : "_self");
  };

  return (
    <span
      className={cn("font-bold text-blue-500 underline underline-offset-2 cursor-pointer", className)}
      onClick={onHandledClick}
      style={{color: color}}
    >
      {space && "\u00A0"}{children} {endContent}
      {/*{brickLine && <br/>}*/}
    </span>
  );
};
