"use client";

import React, { useState } from "react";
import {IconChevronRight, IconPointFilled} from "@tabler/icons-react";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import {cn} from "@/lib/utils";
import { content } from "@/data/componentPage/content";
import { useLocation } from "@/context/LocationContext";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTitle, getLastPath } = useLocation();
  const router = useRouter();

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"relative"}>
      {/* Toggle Button */}
      <div
        className={cn(`w-auto h-auto fixed top-1/2 -translate-y-1/2 z-50 transition-left duration-1000 ease-[cubic-bezier(0.000,-0.355,0.950,1.505)] ${isOpen ? `left-[15.5rem]` : "left-3"}`,
          isOpen && "hover:left-64",
          !isOpen && "hover:left-1"
        )}
      >
        <Button
          isIconOnly={true}
          onPress={toggleSlider}
          variant={"ghost"}
          color={isOpen ? "primary" : "secondary"}
        >
          <IconChevronRight className={`transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${isOpen? "rotate-180": "rotate-0"}`} />
        </Button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-black text-white transition-transform transform border-r border-gray-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 z-40`}
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
          className={"mt-5"}
        >
          {Object.keys(content).map((item, idx) => (
            <AccordionItem key={item} aria-label={`content ${idx+1}`} title={item}>
              {content[item].map((subItem) => (
                <div
                  key={subItem.id + subItem.name}
                  className={cn("text-sm text-gray-400 pl-4 py-2 cursor-pointer rounded-2xl mb-1 flex items-center justify-start gap-x-1.5 ")}
                  onClick={() => router.push(`/component/${subItem.name}`)}
                >
                  <IconPointFilled size={12}/>
                  <span className={cn("transition-colors duration-200 hover:text-white", getLastPath() === subItem.name && "text-white")}>{subItem.name}</span>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {isOpen && (
        <div
          onClick={toggleSlider}
          className={"fixed inset-0 bg-black opacity-50 z-30"}
        />
      )}
    </div>
  );
};
