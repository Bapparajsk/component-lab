"use client";


import { ComponentList, UserGraph } from "@/components/dashboard";

const Page = () => {
  return (
    <div className={"w-full h-auto"}>
      <UserGraph />
      <ComponentList />
    </div>
  );
};


export default Page;

