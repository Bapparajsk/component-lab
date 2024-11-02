"use client";

import { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { IconTableFilled } from "@tabler/icons-react";
import { Key } from "@react-types/shared";

import {
  AnimateIcon,
  DashboardIcon,
  FavoriteIcon,
  NewIcon,
  PopularIcon,
  ProfileIcon,
  SettingIcon,
  UploadIcon
} from "@/icons/animation-icon";
import { SideBarItem } from "@/components/mainPage/SideBarItem";
import { useUser } from "@/context/UserContext";

interface LinkProps {
  link: string;
  icon: any;
  title: string;
}

const userLinks: LinkProps[] = [
  {
    link: "/upload",
    icon: UploadIcon,
    title: "Upload"
  },
  {
    link: "/profile",
    icon: ProfileIcon,
    title: "Profile"
  },
  {
    link: "/dashboard",
    icon: DashboardIcon,
    title: "Dashboard"
  }
];

const postLinked = [
  {
    key: "animated",
    title: "Animated",
    icon: AnimateIcon,
    color: "#006BFF"
  },
  {
    key: "new",
    title: "New",
    icon: NewIcon,
    color: "#73EC8B"
  },
  {
    key: "popular",
    title: "Popular",
    icon: PopularIcon,
    color: "#FFF100"
  },
  {
    key: "favorite",
    title: "Favorite",
    icon: FavoriteIcon,
    color: "#EF5A6F"
  }
];

export const SideBar = () => {

  const [selectedKeys, setSelectedKeys] = useState<Set<Key> | string>(new Set(["animated"]));
  const { isUserLoggedIn } = useUser();
  // const selectedValue = useMemo(
  //   () => Array.from(selectedKeys).join(";"),
  //   [selectedKeys]
  // );

  // const findSelected = (key: string) => {
  //   return selectedValue.includes(key);
  // };

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
        <div className={"w-full h-full"}>
          <div className={"w-full h-auto pl-3 py-4 font-Work-Sans"}>
            {userLinks.map((item) => (
              <SideBarItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                link={isUserLoggedIn() ? item.link : "/login"}
                color={"auto"}
                textAnimation={true}
              />
            ))}
          </div>
          <div className={"w-full h-[1px] bg-gray-600"} />
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
                  <SideBarItem
                    className={"h-8"}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    color={item.key === "popular" ? "auto" : ""}
                  />
                </ListboxItem>
              ))}
            </Listbox>
          </div>
          <div className={"w-full h-[1px] bg-gray-600"} />
          <div
            className={"w-full h-auto font-Work-Sans py-4 text-black dark:text-white pl-2"}>
            <SideBarItem
              title={"Setting"}
              icon={SettingIcon}
              link={"/setting"}
              textAnimation={true}
              color={"auto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


