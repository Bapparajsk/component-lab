"use client";

import React, { useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem, Chip } from "@nextui-org/react";
import { IconCodeDots } from "@tabler/icons-react";


import { HoveredLink, Menu, MenuItem } from "@/components/mainPage/dropdown";
import { content } from "@/data/componentPage/content";
import { useLocation } from "@/context/LocationContext";

export const Navigation = () => {
    const [active, setActive] = useState<string | null>(null);
    const { getPath, getTitle } = useLocation();

    return (
      <>
          <div className={"sticky top-0 w-full h-auto mb-10 bg-white dark:bg-black z-10"}>
              <div
                className={"w-full h-20 relative border-b-1 border-gray-300 dark:border-gray-600"}>
                  <div className={"w-auto h-auto absolute bottom-0 left-0 flex items-center z-10 ml-2 pb-1"}>
                      <Breadcrumbs>
                          {
                              getPath().map((item, index) => {
                                  return (
                                    <BreadcrumbItem key={index} classNames={{
                                        item: "text-[12px]",
                                        // separator: "text-black dark:text-white",
                                    }}>
                                        {item}
                                    </BreadcrumbItem>
                                  );
                              })
                          }
                      </Breadcrumbs>
                  </div>
                  <div className={"w-full h-10 bg-white dark:bg-black absolute -bottom-[52%] flex items-center justify-start"}>
                      <div className={"w-auto h-auto flex items-center gap-2"}>
                          {/*<Chip color={"primary"} variant={"dot"} className={"cursor-pointer hover:border-pink-50 hover:text-green-500"}>React</Chip>*/}
                          {
                              content[getTitle()]?.map((item, idx) => (
                                <Chip color={"danger"} variant={"dot"} key={idx} className={"cursor-pointer hover:border-pink-50 hover:text-green-500"}>{item.name}</Chip>
                              ))
                          }
                      </div>
                  </div>
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
