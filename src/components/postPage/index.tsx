"use client";

import { useRef } from "react";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card } from "@/components/postPage/Card";
import { Buttons } from "@/data/component/button";
import{ Cards } from "@/data/component/card/index";


function Posts() {
  const containerRef = useRef<HTMLDivElement>(null);

  console.log("Cards:- ", Cards);
  

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

      <div className={"w-full h-full flex flex-wrap items-center gap-2"}>
        {Cards?.map((item, idx) => (<Card key={idx} flag={item.flag} useGiler={item.useGiler} component={item.mainCode()} flags={item.flags} developerName={item.developerName}/>))}
      </div>
    </div>
  );
}

export default Posts;
