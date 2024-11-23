"use client";

import { ReactNode, useRef, useState } from "react";
import { User, Tooltip, Button } from "@nextui-org/react";
import { IconHeart, IconHeartFilled, IconCode, IconCreditCard, IconCodeDots, IconUser, IconPrompt, IconMessageReport, } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


const MotionIconHeart = motion.create(IconHeart);
const MotionIconHeartFilled = motion.create(IconHeartFilled);

export const Card = ({
  isLeft = true,
  setAnimation = true,
  editButton = false,
  component,

}: {
  containerHeight?: number;
  isLeft?: boolean;
  setAnimation?: boolean;
  editButton?: boolean;
  component?: ReactNode;
}) => {
  const [likeCount, setLikeCount] = useState<number>(100);
  const [liked, setLiked] = useState<boolean>(false);


  return (
    <div className={"w-auto border border-gray-600 p-5 rounded-md flex flex-col gap-y-3"} >
      <div className={"w-full h-auto flex items-center justify-between"}>
        <div className={"w-auto h-auto flex gap-2"}>
          {[{Icon: IconUser, title: "user"}, {Icon: IconPrompt, title: "code"}, {Icon: IconMessageReport, title: "report"}].map((item, idx) => (
            <div key={idx} className={"cursor-pointer"}> 
                <item.Icon size={24} stroke={1.5} className={cn("transition-all duration-300",
                  item.title === "user" && "hover:text-blue-500",
                  item.title === "code" && "hover:text-green-500",
                  item.title === "report" && "hover:text-red-500",
                )}/>
              </div>
          ))}
        </div>
        <div
            className={"relative w-auto h-auto overflow-visible transition-colors duration-700 flex flex-col items-center justify-center cursor-pointer"}
            onClick={() => {
              if (liked) {
                setLikeCount(likeCount - 1);
              } else {
                setLikeCount(likeCount + 1);
              }
              setLiked(!liked);
            }}
          >
            <AnimatePresence>
              {liked ? (
                <MotionIconHeartFilled
                  initial={{ scale: 0.3, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, type: "spring" }}
                  exit={{ scale: 0.3, opacity: 0.5 }}
                  size={24}
                  color={"red"}
                />
              ) : (
                <MotionIconHeart
                  initial={{ scale: 0.3, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, type: "spring" }}
                  exit={{ scale: 0.3, opacity: 0.5 }}
                  size={24}
                />
              )}
            </AnimatePresence>
          </div>
      </div>
      <div className={`h-auto w-full border border-gray-500 rounded-md bg-default-200/50 dark:bg-gray-900/50`} >
        {component}
      </div>
    </div>
  );
};
