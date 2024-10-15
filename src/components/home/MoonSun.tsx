"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "@/context/ThemeContext";

export const MoonSun = () => {

  const { theme } = useTheme();

  return (
    <motion.div
      drag={true}
      dragSnapToOrigin={true}
      whileTap={{scale: 1.2}}
      className={"hidden fixed md:block top-20 left-4 lg:left-8 lg:top-24 xl:top-32 xl:left-20 z-50"}
    >
      <AnimatePresence mode={"wait"}>
        {theme === "dark" ? (
          <motion.div
            key={"moon"}
            initial={{ y: 100, opacity: 0, scale: 0.3 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.3 }}
            transition={{ type: "spring", duration: .5 }}
            className={"relative"}
          >
            <div className={"w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-[#F4D9A9] rounded-full moon-glow"}></div>
            <div className={"absolute inset-0 w-28 h-28 bg-white rounded-full opacity-20 filter blur-3xl"}></div>
          </motion.div>
        ) : (
          <motion.div
            key={"sun"}
            initial={{ y: 100, opacity: 0, scale: 0.3 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.3 }}
            transition={{ type: "spring", duration: .5 }}
            className={"relative w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#FAC668] glow"}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
