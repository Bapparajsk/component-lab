"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { IconCodeDots } from "@tabler/icons-react";


import { HoveredLink, Menu, MenuItem } from "@/components/mainPage/dropdown";
import { content } from "@/data/componentPage/content";

export const Navigation = () => {
    const [active, setActive] = useState<string | null>(null);

    return (
      <>
          <div className={"sticky top-0 w-full h-auto bg-white dark:bg-black z-30"}>
              <div
                className={"w-full h-20 relative border-b-1 border-gray-300 dark:border-gray-600"}>

                  <div className={"w-full h-full flex items-center gap-5 px-10 "}>
                      <Menu setActive={setActive}>
                          {
                              Object.keys(content).map((item, index) => {
                                  return (
                                    <MenuItem setActive={setActive} active={active} item={item} key={index}>
                                        <div className={"flex flex-col space-y-4 text-sm"}>
                                            {
                                                content[item].map((subItem, subIndex) => {
                                                    return (
                                                      <HoveredLink href={`/component/${subItem.name}`} title={item as "Getting Started" | "Components" | "Special Effects"} key={subIndex}>
                                                          {subItem.name}
                                                      </HoveredLink>
                                                    );
                                                })
                                            }
                                        </div>
                                    </MenuItem>
                                  );
                              })
                          }
                      </Menu>
                  </div>
                  <Button
                    className={"absolute top-1/2 -translate-y-1/2 right-10"}
                    variant={"shadow"}
                    color={"secondary"}
                    startContent={<IconCodeDots />}
                  >
                      Create Component
                  </Button>
              </div>
          </div>
      </>
    );
};
