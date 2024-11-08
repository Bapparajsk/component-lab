"use client";

import { useState } from "react";
import { Button, Chip, Input, Pagination } from "@nextui-org/react";
import { IconBookUpload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";
import { PostCard, QueryButton } from "@/components/dashboard";
import { Each } from "@/hook/useEach";


type PostCard = {
  id: string;
  title: string;
  description: string;
  uploadDate?: Date;
  verifyDate?: Date;
  progress?: "pending" | "approved" | "creating-files" | "completed" | "rejected";
  likes?: Map<string, string>;
  codePreview?: Map<string, string>;
  tags?: string[];
  createdAt?: Date;
  timeProgress?: {
    step1: string,
    date: Date | string,
  }[];
};


const sortList = ["All", "Uploading", "Approved", "Creating files", "Completed"];
const tagList = ["All", "Button", "Input", "Card", "Modal", "Alert", "Select", "Checkbox"];

export const ComponentList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [components, setComponents] = useState<PostCard[]>([]);
  const [tags, setTags] = useState<string[]>(["All"]);
  const [sortTag, setSortTag] = useState("Completed");
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["components", pageNumber],
    queryFn: async ({ queryKey }) => {
      const [, page] = queryKey as [string, number];

      const token = localStorage.getItem("user-token");
      const response = await axios.get(`/post/list?env=all&page=${page-1}`, {
        headers: { "authorization": token }
      });
      setComponents(response.data.data.posts);
      return response.data.data;
    },
  });

  return (
    <div className={"w-full h-auto py-4 px-3 flex gap-x-2 flex-col items-center"}>
      <div className={"w-full h-auto flex flex-col gap-5 max-w-6xl"}>
        <div className={"w-full h-auto flex flex-col gap-2 sm:flex-row"}>
          <div className={"w-full h-auto "}>
            <Input
              variant={"bordered"}
              placeholder={"Find a Component..."}
              color={"primary"}
              classNames={{
                "input": "tracking-wider"
              }}
            />
          </div>
          <div className={"w-auto h-auto flex gap-2"}>
            <QueryButton isDisabled={ sortTag !== "Completed" } values={tags} title={"Tag"} items={tagList} onClick={(key) => {
              const newTag = tagList[key as number];
              if (newTag === "All") {
                setTags(["All"]);
                return;
              }
              let filter = [...tags];
              if (filter[0] === "All") {
                filter = filter.splice(1);
                console.log(filter, newTag);
              }

              if (filter.includes(newTag)) {
                setTags(filter.filter((tag) => tag !== newTag));
              } else {
                setTags([...filter, newTag]);
              }

            }} />
            <QueryButton value={sortTag} title={"Sort"} items={sortList} onClick={(idx) => {
              const key = sortList[idx as number];
              setSortTag(key);

              if(key !== "Completed") {
                setTags(["All"]);
              }
            }} />
            <Button onPress={() => router.push("/upload")} startContent={<IconBookUpload size={20} />}
                    className={"text-white font-bold bg-[#4F913D] grow"}>
              New
            </Button>
          </div>
        </div>
        <div className={"w-full h-auto flex flex-wrap gap-2"}>
          <Chip color={"success"} variant={"faded"}> Sort: {sortTag}</Chip>
          <Each of={tags} render={(item, index) => (
            <Chip color={"success"} variant={"dot"} key={index}>{item}</Chip>
          )}/>
        </div>
        {isLoading && (
          <div className={"w-full h-auto flex items-center justify-center"}>
            <p>Loading...</p>
          </div>
        )}
        <Each of={components} render={(post) => <PostCard key={post.id} {...post}/>}/>
        <div className={"w-full h-auto flex justify-end"}>
          <Pagination
            showShadow={true}
            isCompact={true}
            showControls={true}
            total={data?.totalPages || 1}
            initialPage={1}
            onChange={(page: number) => {
              setPageNumber(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};




