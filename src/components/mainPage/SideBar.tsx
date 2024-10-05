"use client";

import React, { useState } from "react";
import { IconPointFilled } from "@tabler/icons-react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import {cn} from "@/lib/utils";
import { content } from "@/data/componentPage/content";
import { useLocation } from "@/context/LocationContext";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { getTitle, getLastPath } = useLocation();
  const router = useRouter();

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"sticky top-20 left-0"}>
      <div
        className={`h-full text-white transition-transform transform w-72 z-[10000]`}
      >
        <Accordion
          defaultExpandedKeys={[getTitle()]}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {Object.keys(content).map((item, idx) => (
            <AccordionItem key={item} aria-label={`content ${idx+1}`} title={item}>
              {content[item].map((subItem) => (
                <div
                  key={subItem.id + subItem.name}
                  className={cn("text-sm text-gray-400 pl-4 py-2 cursor-pointer rounded-2xl mb-1 flex items-center justify-start gap-x-1.5 ")}
                  onClick={() => {
                    router.push(`/component/${subItem.name}`);
                    toggleSlider();
                  }}
                >
                  <IconPointFilled size={12}/>
                  <span className={cn("transition-colors duration-200 hover:text-white", getLastPath() === subItem.name && "text-white")}>{subItem.name}</span>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
