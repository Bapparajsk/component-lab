"use client";

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import {
  IconEaseInOutControlPoints,
  IconTableFilled,
  IconTerminal2,
  IconTextPlus,
  IconTimeline,
  IconUpload,
  IconUserBolt,
  IconHeart,
  IconSettings
} from "@tabler/icons-react";
import Link from "next/link";
import { Key } from "@react-types/shared";

interface LinkProps {
  link: string;
  icon: any;
  title: string;
}

const userLinks: LinkProps[] = [
  {
    link: "/upload",
    icon: IconUpload,
    title: "Upload"
  },
  {
    link: "/profile",
    icon: IconUserBolt,
    title: "Profile"
  },
  {
    link: "/dashboard",
    icon: IconTerminal2,
    title: "Dashboard"
  }
];

const postLinked = [
  {
    key: "animated",
    title: "Animated",
    icon: IconEaseInOutControlPoints,
    color: "#006BFF"
  },
  {
    key: "new",
    title: "New",
    icon: IconTextPlus,
    color: "#73EC8B"
  },
  {
    key: "popular",
    title: "Popular",
    icon: IconTimeline,
    color: "#FFF100"
  },
  {
    key: "favorite",
    title: "Favorite",
    icon: IconHeart,
    color: "#EF5A6F"
  }
];

export const SideBar = () => {

  const [selectedKeys, setSelectedKeys] = React.useState<Set<Key> | string>(new Set(["animated"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(";"),
    [selectedKeys]
  );

  const findSelected = (key: string) => {
    return selectedValue.includes(key);
  };

  return (
    <div className={"sticky top-20 left-0"}>
      <div
        className={`h-full text-white transition-transform transform w-72 z-[10000]`}
      >
        <div className={"w-full h-auto pb-4 flex items-center justify-start border-b border-gray-600"}>
          <div className={"flex items-center justify-center gap-x-1 pl-3 font-fredoka text-black dark:text-white"}>
            <IconTableFilled />
            <span>Component Lab</span>
          </div>
        </div>
        <div className={"w-full h-full "}>
          <div className={"w-full h-auto pl-3 py-4 font-Work-Sans"}>
            {userLinks.map((item, idx) => {
              return (
                <div key={idx} className={"w-full h-12 flex items-center justify-start group text-black dark:text-white"}>
                  <Link href={item.link} className={"w-full h-auto flex items-center justify-start gap-x-1"}>
                    <item.icon className={"transition-all duration-300 group-hover:scale-125"} />
                    <span
                      className={"transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-500 group-hover:font-bold"}>{item.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <hr />
          <div
            className={"w-full h-auto font-Work-Sans py-4 text-black dark:text-white"}>
            <Listbox
              aria-label={"Single selection example"}
              variant={"flat"}
              disallowEmptySelection={true}
              selectionMode={"multiple"}
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              itemClasses={{ title: "text-medium" }}
            >
              {postLinked.map((item) => (
                <ListboxItem key={item.key} value={item.key} textValue={item.title}>
                  <div className={"w-full h-8 flex items-center justify-start group"}>
                    <item.icon
                      size={20} color={findSelected(item.key) ? item.color : undefined}
                      className={"duration-400 group-hover:scale-125"} />
                    <span
                      className={"pl-2 transition-transform duration-300 group-hover:translate-x-2"}>{item.title}</span>
                  </div>
                </ListboxItem>
              ))}
            </Listbox>
          </div>
          <hr />
          <div
            className={"w-full h-auto font-Work-Sans py-4 text-black dark:text-white"}>
            <div className={"w-full h-12 flex items-center justify-start group text-black dark:text-white pl-2"}>
              <Link href={'/setting'} className={"w-full h-auto flex items-center justify-start gap-x-1"}>
                <IconSettings className={"transition-all duration-300 group-hover:scale-125 group-hover:rotate-45"} />
                <span
                  className={"transition-transform duration-300 group-hover:translate-x-2 "}>Setting</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
