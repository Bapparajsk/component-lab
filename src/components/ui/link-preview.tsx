"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: ReactNode;
  imgurl: string;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
};

export const LinkPreview = ({
  children,
  imgurl,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
}: LinkPreviewProps) => {
  const src = imgurl;

  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  const handleClicked = () => {
    if (url?.startsWith("https://")) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  return (
    <>
      {isMounted ? (
        <div className={"hidden"}>
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt={"hidden image"}
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open: boolean) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white cursor-pointer", className)}
        >
          <span
            onClick={handleClicked}
          >
            {children}
          </span>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className={"[transform-origin:var(--radix-hover-card-content-transform-origin)]"}
          side={"top"}
          align={"center"}
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className={"shadow-xl rounded-xl"}
                style={{
                  x: translateX,
                }}
              >
                <Link
                  target={url?.startsWith("https://") ? "_blank" : "_self"}
                  href={url || ""}
                  className={"block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"}
                >
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className={"rounded-lg"}
                    alt={"preview image"}
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
