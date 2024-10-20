"use client";

import Link from "next/link";

import FileInput from "@/components/upload/FileInput";

function Page() {
  return (
    <div className={"w-full h-auto px-5"}>
      <div className={"h-auto max-w-4xl mx-auto my-10 font-rubik"}>
        <div className={"space-y-3 border-b border-gray-600 py-2"}>
          <h1 className={"text-4xl text-white"}>Create a new component</h1>
          <p className={"text-gray-600"}>A component contains all project files.</p>
          <p className={"text-warning-500"}>Note. Need a Github <span className={"font-bold underline"}>Public</span> repository. Do you know what GitHub repository is?</p>
          <Link
            target={"_blank"}
            href={"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository"}>
            <span className={"text-blue-500 hover:underline"}>Creating a new repository</span>
          </Link>
        </div>
        <FileInput/>
      </div>
    </div>
  );
}

export default Page;
