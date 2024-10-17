"use client";


import { UploadOption, UserGraph } from "@/components/dashboard";

const Page = () => {
  return (
    <div className={"w-full h-auto"}>
      <UserGraph />
      <UploadOption />
    </div>
  );
};


export default Page;

