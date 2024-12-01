"use client";

import { motion } from "framer-motion";

import { Type } from "@/data/component/types";

function AnimatedButtons() {
  return (
    <div className={"flex items-center justify-center"} style={{width: 200, height: 90}}>
      <motion.button
        whileHover={{ scale: 1.05 }} // Optional hover effect for the button
        className={"w-20 h-10 border text-white rounded-md flex items-center justify-center px-5 group"}
      >
        <span>Button</span>
        <motion.svg
          initial={{ x: 0 }}
          whileHover={{ x: 10 }} // Animates with spring effect
          transition={{
            type: "spring",
            stiffness: 200, // Controls the tightness of the spring
            damping: 10, // Controls the bounce-back effect
          }}
          xmlns={"http://www.w3.org/2000/svg"}
          width={"24"}
          height={"24"}
          viewBox={"0 0 24 24"}
          fill={"none"}
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        >
          <path stroke={"none"} d={"M0 0h24v24H0z"} fill={"none"} />
          <path d={"M5 12h.5m3 0h1.5m3 0h6"} />
          <path d={"M13 18l6 -6"} />
          <path d={"M13 6l6 6"} />
        </motion.svg>
      </motion.button>
    </div>
  );
}

const exampleCode =`
"use client";

import { motion } from "framer-motion";

export default function AnimatedButtons() {
  return (
    <div className={"w-full h-auto min-w-52 min-h-20 flex items-center justify-center"}>
      <motion.button
        whileHover={{ scale: 1.05 }} // Optional hover effect for the button
        className={"w-20 h-10 border text-white rounded-md flex items-center justify-center px-5 group"}
      >
        <span>Button</span>
        <motion.svg
          initial={{ x: 0 }}
          whileHover={{ x: 10 }} // Animates with spring effect
          transition={{
            type: "spring",
            stiffness: 200, // Controls the tightness of the spring
            damping: 10, // Controls the bounce-back effect
          }}
          xmlns={"http://www.w3.org/2000/svg"}
          width={"24"}
          height={"24"}
          viewBox={"0 0 24 24"}
          fill={"none"}
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        >
          <path stroke={"none"} d={"M0 0h24v24H0z"} fill={"none"} />
          <path d={"M5 12h.5m3 0h1.5m3 0h6"} />
          <path d={"M13 18l6 -6"} />
          <path d={"M13 6l6 6"} />
        </motion.svg>
      </motion.button>
    </div>
  );
}
`;

const dependencies = 'framer-motion';
const utils = false;
const tailwind = undefined;
const source = {
  code:exampleCode,
  fileName: "animated-buttons.tsx"
};

const details: Type = {
  id: "button-1",
  userId: "user-1",
  developerName: "Bapparajsk",
  title: "Hober effect",
  description: "This is a hover effect for the button",
  tag: new Set(["button"]),
  flags: new Set(["animated"]),
  flag: "new",
  mainCode: AnimatedButtons,
  useGiler: {
    exampleCode: exampleCode,
    dependencies: "npm i " + dependencies,
    utils: utils,
    tailwind: tailwind,
    source: source
  }
};

export default details;
