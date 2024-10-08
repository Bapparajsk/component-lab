"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Index } from "@/components/mainPage";
import { Footer } from "@/components/ui/Footer";

function Page() {
  const pathname = usePathname();

  return (
    <div className={"w-full h-auto"}>
      <Index path={pathname.split("/").pop()}/>
      <Footer />
    </div>
  );
}

export default Page;
