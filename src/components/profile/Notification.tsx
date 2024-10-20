"use client";

import { User } from "@nextui-org/react";
import Link from "next/link";

import { cn } from "@/lib/utils";


export const Notification = ({
  img,
  name,
  username,
  body,
  isfullContent,
  profileLink,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  isfullContent?: boolean;
  profileLink: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 group transition-all duration-300",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className={cn(
        "w-full h-auto flex items-center justify-start p-1 rounded-md transition-all duration-300",
        // light styles
        "group-hover:bg-gray-950/[.1]",
        // dark styles
        "group-hover:dark:bg-gray-50/[.10]",
      )}>
        <User
          name={name || "John Doe"}
          description={(
            username && <Link href={profileLink} className={"text-blue-500"}>
              {username}
            </Link>
          )}
          avatarProps={{
            src: img || "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
      <blockquote className={"mt-2 text-sm"}>
        {isfullContent ? (
          <p className={"text-gray-500 dark:text-gray-400"}>{body}</p>
        ) : (
          <p className={"text-gray-500 dark:text-gray-400"}>
            {body.length > 100 ? `${body.slice(0, 100)}...` : body}
          </p>
        )}
      </blockquote>
    </figure>
  );
};
