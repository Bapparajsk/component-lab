"use client";

import { useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { IconBookUpload } from "@tabler/icons-react";
import { useRouter  } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { PostCard, QueryButton } from "@/components/dashboard";
import axios from "@/lib/axios";


type PostCard = {
  id: string;
  title: string;
  description: string;
  uploadDate?: Date;
  verifyDate?: Date;
  progress?: string;
  likes?: Map<string, string>;
  codePreview?: Map<string, string>;
  tags?: string[];
  createdAt?: Date;
  timeProgress?: {
    step1: string,
    date: Date | string,
  }[];
};

const TempPostCard: PostCard[] = [
  {
    id: "1",
    title: "Button",
    description: "A simple button component",
    uploadDate: new Date(),
    verifyDate: new Date(),
    progress: "approved",
    timeProgress: [
      {
        step1: "Uploading",
        date: new Date(),
      },
      {
        step1: "approved",
        date: new Date(),
      },
      {
        step1: "creating-files",
        date: "progress",
      },
      {
        step1: "completed",
        date: "-",
      }
    ]
  },
  {
    id: "2",
    title: "Input",
    description: "A simple input component",
    uploadDate: new Date(),
    verifyDate: new Date(),
    progress: "creating-files",
    timeProgress: [
      {
        step1: "Uploading",
        date: new Date(),
      },
      {
        step1: "approved",
        date: new Date(),
      },
      {
        step1: "creating-files",
        date: new Date(),
      },
      {
        step1: "completed",
        date: "progress",
      }
    ]
  },
  {
    id: "3",
    title: "Card",
    description: "A simple card component",
    uploadDate: new Date(),
    verifyDate: new Date(),
    progress: "pending",
    timeProgress: [
      {
        step1: "Uploading",
        date: new Date(),
      },
      {
        step1: "approved",
        date: "progress",
      },
      {
        step1: "creating-files",
        date: "-",
      },
      {
        step1: "completed",
        date: "-",
      }
    ]
  },
  {
    id: "4",
    title: "Modal",
    description: "A simple modal component",
    uploadDate: new Date(),
    verifyDate: new Date(),
    progress: "rejected",
  },
  {
    id: "5",
    title: "Alert",
    description: "A simple alert component",
    likes: new Map<string, string>(),
    codePreview: new Map<string, string>(),
    tags: ["alert", "component"],
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "Select",
    description: "A simple select component",
    likes: new Map<string, string>(),
    codePreview: new Map<string, string>(),
    tags: ["select", "component"],
    createdAt: new Date(),
  },
  {
    id: "7",
    title: "Checkbox",
    description: "A simple checkbox component",
    uploadDate: new Date(),
    verifyDate: new Date(),
    progress: "approved",
    timeProgress: [
      {
        step1: "Uploading",
        date: new Date(),
      },
      {
        step1: "approved",
        date: new Date(),
      },
      {
        step1: "creating-files",
        date: "progress",
      },
      {
        step1: "completed",
        date: "-",
      }
    ]
  }
];

export const ComponentList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["components", pageNumber],
    queryFn: ({  }) => {
      // const [, page] = queryKey as [string, number];
      // const response = await axios.get(`/post/list?env=all&page=${page-1}`);
      // return response.data.data;
      TempPostCard.map((post) => {
        if (!post.progress) {
          post.likes = new Map<string, string>();
          post.codePreview = new Map<string, string>();

          post.likes.set("1", "1");
          post.likes.set("2", "2");
          post.likes.set("3", "3");
          post.likes.set("4", "4");
          post.codePreview.set("5", "5");
          post.codePreview.set("6", "6");
        }
      });
      return {posts: TempPostCard};
    },
  });

  return (
    <div className={"w-full h-auto py-4 px-3 flex gap-x-2 flex-col items-center"}>
      <div className={"w-full h-auto flex flex-col gap-5 max-w-6xl"}>
        <div className={"w-full h-auto flex gap-2"}>
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
            <QueryButton title={"Tag"} onClick={(key) => (console.log(key))}/>
            <QueryButton title={"Sort"} onClick={(key) => (console.log(key))}/>
            <Button onPress={() => router.push("/upload")} startContent={<IconBookUpload size={20} />} className={"text-white font-bold bg-[#4F913D]"}>
              New
            </Button>
          </div>
        </div>
        {isLoading && (
          <div className={"w-full h-auto flex items-center justify-center"}>
            <p>Loading...</p>
          </div>
        )}
        {data?.posts.map((post: any) => (
            <PostCard
              key={post.id}
              {...post}
            />
        ))}
        <div className={"w-full h-auto flex justify-end"}>
          <Pagination
            showShadow={true}
            isCompact={true}
            showControls={true}
            // total={data?.totalPages || 1}
            total={1}
            initialPage={1}
            onChange={(page: number) => { setPageNumber(page); }}
          />
        </div>
      </div>
    </div>
  );
};




