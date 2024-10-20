"use client";

import React from "react";

import { Footer } from "@/components/ui/Footer";
import Posts from "@/components/postPage";

function Page() {

  return (
    <div className={"w-full h-auto"}>
      <Posts  />
      <Footer />
    </div>
  );
}

export default Page;
