"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { NumberTicker } from "@/components/ui/number-ticker";

type CardProps = {
  title: string;
  id: string;
  description?: string;
  tag?: {id: string, value: string}[];
  likes?: number;
  codePreview?: number;
};


export const PostCard = ({
  title,
  id,
  description,
  tag,
  likes,
  codePreview,
}: CardProps) => {

  const router = useRouter();

  return (
    <div className={"w-full h-auto min-h-28 flex items-center justify-center "}>
      <div className={"w-full flex border-b border-gray-600"}>
        <div className={"w-1/2 h-auto flex flex-col items-start justify-between gap-y-3 px-3 py-4 font-rubik"}>
          <div>
            <h1
              onClick={() => router.push(`/components/button/${id}`)} // Path: src/components/button/[id].tsx
              className={"w-fit text-3xl text-blue-500 tracking-wider cursor-pointer transition-all duration-300 hover:underline"}
            >{title}</h1>
          </div>
          {description && (
            <div>
              <p
                className={"text-medium tracking-wide"}
              >
                {description.length > 200 ? description.slice(0, 200) + "..." : description}
              </p>
            </div>
          )}
          <div className={"flex flex-wrap gap-4 items-center justify-start"}>
            {tag && tag.map((t) => (
              <Button key={t.id}>{t.value}</Button>
            ))}
          </div>
        </div>
        <div className={"w-1/2 h-full my-auto"}>
          <div className={"w-full h-full flex flex-col items-center justify-center gap-y-3 text-2xl font-bold"}>
            <div className={"flex items-center gap-5"}>
              <p>Like</p>
              {likes ? (<NumberTicker value={likes} />) : (<p>0</p>)}
            </div>
            <div className={"flex items-center gap-5 "}>
              <p>Code Preview</p>
              {codePreview ? (<NumberTicker value={codePreview} />) : (<p>0</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
