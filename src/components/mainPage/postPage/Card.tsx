"use client";

import { useRef, useState } from "react";
import { User, Tooltip, Button } from "@nextui-org/react";
import { IconHeart, IconHeartFilled, IconCode, IconCreditCard, IconCodeDots } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

import { ToolTipCard } from "@/components/mainPage/postPage/ToolTipCard";

const MotionIconHeart = motion.create(IconHeart);
const MotionIconHeartFilled = motion.create(IconHeartFilled);

export const Card = ({
  containerHeight,
  isLeft = true,
  setAnimation = true,
  editButton = false
}: {
  containerHeight: number;
  isLeft?: boolean;
  setAnimation?: boolean;
  editButton?: boolean;
}) => {
  const [mood, setMood] = useState<"preview" | "code">("preview");
  const [likeCount, setLikeCount] = useState<number>(100);
  const [liked, setLiked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, }).valueOf();
  const router = useRouter();


  return (
    <div
      className={"w-full border border-gray-600 p-5 rounded-md flex flex-col gap-y-3"}
      ref={ref}
      style={setAnimation ? {
        transform: isInView ? "translateX(0) translateY(0)" : `translateX(${isLeft ? "-" : ""}100px) translateY(100px)`,
        opacity: isInView ? 1 : 0,
        transition: "all .5s cubic-bezier(0.000,-0.600,1.000,1.650)",
      } : {}}
    >
      <div className={"w-full h-auto flex items-center justify-between"}>
        <Tooltip
          className={"cursor-pointer"}
          content={<ToolTipCard />}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                scale: 0.8,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
              enter: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
            },
          }}
        >
          <User
            name={"Junior Garcia"}
            description={(
              <p className={"text-blue-400 text-[12px]"}>
                @jrgarciadev
              </p>
            )}
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
        </Tooltip>
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
        {editButton && <Button
          startContent={<IconCodeDots />}
          variant={"ghost"}
          color={"success"}
          onPress={() => router.push("/dashboard/edit/id")}
        >
          Edit
        </Button>}
      </div>
      <div
        className={`w-full border border-gray-500 rounded-md bg-default-200/50 dark:bg-gray-900/50`}
        style={{ minHeight: containerHeight }}
      >

      </div>
    </div>
  );
};
