"use client";

import TopNav from "@/components/mainPage/dashboard/TopNav";


const Page = () => {

  return (
    <div className={"h-auto w-full flex flex-col items-center justify-center"}>
      <TopNav />
      <div className={"w-full h-[1px] bg-gray-600"}/>
    </div>
  );
};

export default Page;
