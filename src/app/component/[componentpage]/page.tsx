"use client";


import { sections } from "@/components/mainPage/Introduction/data";
import { MainContent } from "@/components/mainPage/Introduction/MainContent";

function page() {
    return (
        <div className={"w-full h-auto relative"}>
          <MainContent sections={sections} />
        </div>
    );
}

export default page;
