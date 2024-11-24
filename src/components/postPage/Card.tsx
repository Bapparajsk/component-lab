"use client";

import { ReactNode, useState } from "react";
import { IconHeart, IconHeartFilled, IconUserSquareRounded, IconPrompt, IconMessageReport } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { cn } from "@/lib/utils";


const MotionIconHeart = motion.create(IconHeart);
const MotionIconHeartFilled = motion.create(IconHeartFilled);

export const Card = ({
  component,
  developerName,
  userId,
  id,
  flags,
  useGiler
}: {
  component?: ReactNode;
  developerName?: string;
  userId?: string;
  id?: string;
  flags?: Set<string>;
  useGiler?: any;
}) => {

  const [liked, setLiked] = useState<boolean>(false);
  const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  console.log("Card -> id", id);
  
  return (
    <div className={"w-auto border border-gray-600 p-5 rounded-md flex flex-col gap-y-3"} >
      <div className={"w-full h-auto flex items-center justify-between"}>
        <div className={"w-auto h-auto flex gap-2"}>
          {[{Icon: IconUserSquareRounded, title: "user"}, {Icon: IconPrompt, title: "code"}, {Icon: IconMessageReport, title: "report"}].map((item, idx) => (
            <div onClick={() => {
              if (item.title === "user" && userId) {
                router.push(`/profile/${userId}`);
              }

              if (item.title === "code") {
                onOpen();
              }
            }} key={idx} className={cn("cursor-pointer flex items-center gap-1 transition-all duration-300", item.title === "user" && "hover:text-blue-500",
              item.title === "code" && "hover:text-green-500",
              item.title === "report" && "hover:text-red-500", )}> 
                <item.Icon size={24} stroke={1.5} />
                {item.title === "user" && <span className={"text-sm"}>@{developerName?.slice(0, 8).toLowerCase() || "bapparaj"}</span>}
              </div>
          ))}
        </div>
        <div
            className={"relative w-auto h-auto overflow-visible transition-colors duration-700 flex flex-col items-center justify-center cursor-pointer"}
            onClick={() => {
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
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal 
        backdrop={"blur" }
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement={"center"}
        size={"5xl"}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={"flex flex-col gap-1"}>
                <h2 className={"text-2xl font-bold"}>Button</h2>
                <h2 className={"text-xl font-bold"}>
                  Scroll through the page and see the image come out of the screen.
                </h2>
                {flags && (
                  <div className={"flex gap-1"}>
                    {Array.from(flags).map((flag, idx) => (
                      <Chip key={idx} variant={"faded"} >{flag}</Chip>
                    ))}
                  </div>
                )}
                <p className={"text-sm text-gray-500"}>
                  Component by: <span className={"text-gray-700"}>@{developerName?.slice(0, 8).toLowerCase() || "bapparaj"}</span>
                </p>
              </ModalHeader>
              <ModalBody>
                {useGiler && (
                  <div className={"w-full h-auto"}>
                    <SyntaxHighlighter language={"jsx"} style={dracula}>
                      {useGiler.exampleCode}
                    </SyntaxHighlighter>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color={"danger"} variant={"light"} onPress={onClose}>
                  Close
                </Button>
                <Button color={"primary"} onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
