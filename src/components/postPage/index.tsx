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
            <Card containerHeight={500} component={`
                <div className={"h-52 w-full  flex items-center justify-center"}>
                  
                  <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span>
                        Tailwind Connect
                      </span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                </div>
             `}/>
            <Card containerHeight={500} component={`
                <div className={"h-32 w-full  flex items-center justify-center"}>
                    <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                      Figma
                    </button>
                </div>
             `}/>
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

export const FF = () => {
  return (
    <div className={"font-fredoka"}>
      inner component example
    </div>
  );
};

export default Posts;
