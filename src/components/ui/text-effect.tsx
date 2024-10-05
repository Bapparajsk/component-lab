"use client";

import { ReactNode } from "react";

import {cn} from "@/lib/utils";

export const LinkText = ({
  children,
  color,
  href,
  className
}: {
  children: ReactNode;
  color?: string;
  href?: string;
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
      &nbsp;{children}
    </span>
  );
};
