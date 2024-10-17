"use client";

import { PostCard } from "@/components/dashboard/PostCard";

export const UploadOption = () => {
  return (
    <div className={"w-full h-auto py-4 px-3 flex gap-x-2"}>
      <div className={"w-1/2 space-y-2"}>
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
          likes={10}
          codePreview={897}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
      </div>
      <div className={"w-1/2 space-y-2"}>
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
          description={"This is a de his is a description his is a description his is a description his is a description his is a descriptionscription"}
        />
        <PostCard
          title={"Upload Option"}
          id={"upload-option"}
        />
      </div>
    </div>
  );
};

