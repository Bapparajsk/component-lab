"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card } from "@/components/postPage/Card";
import { Type } from "@/data/component/types";

import { Buttons } from "../data/button";
import{ Cards } from "../data/card";


function Posts() {
  const [components, setComponents] = useState<Type[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname().split("/")[2]?.toLowerCase();
  const map = {
    button: Buttons,
    card: Cards,
  };

  useEffect(() => {
    console.log(map);
    if (pathname) {
      if (pathname === "all") return setComponents([...Buttons, ...Cards]);
      // @ts-ignore
      setComponents(map[pathname]);
    }

  }, [pathname]);


  if (!["all", "button", "card"].includes(pathname)) {
    console.log(pathname);
    return <div className={"w-full h-full flex items-center justify-center"}>
        <h3>invalid component</h3>
    </div>;
  }

  return (
    <div className={"w-full h-full p-5"}>
      <ScrollProgress
        className={"fixed top-16 left-72 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"}
        containerRef={containerRef}
        springOptions={{
          stiffness: 280,
          damping: 18,
          mass: 0.3,
        }}
      />
      <div className={"w-full h-full flex flex-wrap items-center gap-2 justify-center"}>
        {components.map((item, idx) => (
          <Card key={idx} flag={item.flag} useGiler={item.useGiler} component={item.mainCode()} flags={item.flags}
                developerName={item.developerName} />))}
      </div>
    </div>
  );
}

export default Posts;
