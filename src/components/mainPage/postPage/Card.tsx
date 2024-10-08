"use client";

import { useRef, useState } from "react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {User, Link, Tooltip, Button} from "@nextui-org/react";
import { IconHeart, IconHeartFilled, IconCode, IconCreditCard } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { ToolTipCard } from "@/components/mainPage/postPage/ToolTipCard";

const MotionIconHeart = motion.create(IconHeart);
const MotionIconHeartFilled = motion.create(IconHeartFilled);

export const Card = () => {
  const [mood, setMood] = useState<"preview" | "code">("preview");
  const [likeCount, setLikeCount] = useState<number>(100);
  const [liked, setLiked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={"w-full xl:w-[49%] h-auto border p-5 rounded-md flex flex-col gap-y-3"}>
      <div className={"w-full h-auto flex items-center justify-between"}>
        <Tooltip
          className={"cursor-pointer"}
          content={<ToolTipCard />}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                }
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                }
              },
            },
          }}
        >
          <User
            name={"Junior Garcia"}
            description={(
              <Link href={"https://twitter.com/jrgarciadev"} size={"sm"} isExternal={true}>
                @jrgarciadev
              </Link>
            )}
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </Tooltip>
        <div
          ref={ref}
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
            {liked ?
              <MotionIconHeartFilled
                initial={{ scale: .3, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, type: "spring", }}
                exit={{ scale: .3, opacity: 0.5 }}
                size={24}
                color={"red"}
              /> :
              <MotionIconHeart
                initial={{ scale: .3, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, type: "spring", }}
                exit={{ scale: .3, opacity: 0.5 }}
                size={24}
            />}
          </AnimatePresence>
          <span className={"text-[12px]"}>{likeCount}</span>
        </div>
      </div>
      <div className={"w-full h-auto flex items-center justify-end gap-x-2"}>
        <Button
          startContent={<IconCreditCard />}
          variant={mood === "preview" ? "shadow" : "flat"}
          color={mood === "preview" ? "primary" : "secondary"}
          onPress={() => setMood("preview")}
        >
          Preview
        </Button>
        <Button
          startContent={<IconCode />}
          variant={mood === "code" ? "shadow" : "flat"}
          color={mood === "code" ? "primary" : "secondary"}
          onPress={() => setMood("code")}
        >
          Code
        </Button>
      </div>
      <div className={"w-full h-96 border border-gray-500 rounded-md bg-gray-900/50"}>
        {mood}
      </div>
    </div>
  );
};
