"use client";

import {useRef} from "react";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card } from "@/components/postPage/Card";

function Posts() {
  const containerRef = useRef<HTMLDivElement>(null);


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
      <div className={"w-full h-full"}>
        <div className={"hidden md:inline-block w-1/2  align-top pr-2"}>
          <div className={"flex flex-col items-start justify-start gap-5"}>
            <Card containerHeight={500} />
            <Card containerHeight={400} />
            <Card containerHeight={500} />
            <Card containerHeight={250} />
            <Card containerHeight={300} />
          </div>
        </div>
        <div className={"hidden md:inline-block  w-1/2  align-top pl-2"}>
          <div className={"flex flex-col items-start justify-center gap-5"}>
            <Card containerHeight={400} isLeft={false}/>
            <Card containerHeight={600} isLeft={false}/>
            <Card containerHeight={300} isLeft={false}/>
            <Card containerHeight={300} isLeft={false}/>
            <Card containerHeight={300} isLeft={false}/>
          </div>
        </div>

        <div className={"inline-block md:hidden w-full align-top pr-2"}>
          <div className={"flex flex-col items-start justify-start gap-5"}>
            <Card containerHeight={200} />
            <Card containerHeight={400} />
            <Card containerHeight={50} />
            <Card containerHeight={200} />
            <Card containerHeight={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
