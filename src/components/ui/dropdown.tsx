"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useLocation } from "@/context/LocationContext";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
                           setActive,
                           active,
                           item,
                           children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className={"relative "}>
      <motion.p
        transition={{ duration: 0.3 }}
        className={"cursor-pointer hover:opacity-[0.9] "}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className={"absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"}>
              <motion.div
                transition={transition}
                layoutId={"active"}// layoutId ensures smooth animation
                className={"bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"}
              >
                <motion.div
                  layout={true} // layout ensures smooth animation
                  className={"w-max h-full p-4"}
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
                       setActive,
                       children,
                     }: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onMouseLeave={() => setActive(null)} // resets the state
      className={"relative flex justify-center space-x-8 px-8 py-6"}>
      {children}
    </div>
  );
};

export const HoveredLink = ({
  children,
  href,
  title
} : {
  children : React.ReactNode,
  href: string,
  title: "Getting Started" | "Components" | "Special Effects"
}) => {

  const { push } = useRouter();
  const { setTitle } = useLocation();

  return (
    <div
      onClick={() => {
        push(href);
        setTitle(title);
      }}
      className={"text-neutral-700 dark:text-neutral-200 cursor-pointer hover:text-black"}
    >
      {children}
    </div>
  );
};
