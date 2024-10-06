"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { MainContent } from "@/components/mainPage/Introduction/MainContent";
import { Footer } from "@/components/ui/Footer";

function Page() {
  const pathname = usePathname();

  return (
    <div className={"w-full h-auto"}>
      <MainContent path={pathname.split("/").pop()}/>
      <Footer />
    </div>
  );
}

export default Page;
