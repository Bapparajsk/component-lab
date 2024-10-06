"use client";

import React from "react";

import { MainContent } from "@/components/mainPage/Introduction/MainContent";
import { sections } from "@/components/mainPage/Introduction/data";

function Page() {
  return (
    <div>
      <MainContent sections={sections}/>
    </div>
  );
}

export default Page;
