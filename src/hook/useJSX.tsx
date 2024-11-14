"use client";

import JsxParser from "react-jsx-parser";

import { MotionDiv } from "@/hook/useMotion";

export const useJSX = (component: string | undefined | null) => {

  if (!component) return null;

  return <JsxParser components={{MotionDiv}} jsx={component} />;
};
