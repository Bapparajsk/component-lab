"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

type CardProps = {
  id: string | null,
  title: string,
  description?: string,
  progress?: "pending" | "approved" | "creating-files" | "completed" | "rejected";
  likes: Map<string, string>,
  codePreview: Map<string, string>,
  tags: string[],
  timeProgress: {
    step1: string,
    date: Date | "progress" | "-",
  }[],
};

const getColorByProgress = (progress: string | undefined) => {


  switch (progress) {
    case "pending":
      return "#7CF5FF";
    case "approved":
      return "#9BEC00";
    case "creating-files":
      return "#006BFF";
    case "rejected":
      return "#D91656";
    default:
      return "";
  }
};

export const PostCard = ({
  id,
  title,
  description,
  timeProgress,
  progress,
  likes,
  codePreview,
  tags
}: CardProps) => {
  const router = useRouter();

  const d = new Date();
  d.toDateString();

  return (
    <div className={cn("w-full h-auto min-h-28 flex items-center justify-center  rounded-md ")}>
      <div
        className={cn("w-full flex border-b", `border-[${getColorByProgress(progress)}] shadow-[inset_0px_-50px_50px_-50px_${getColorByProgress(progress)}]`)}
        style={{ borderColor: getColorByProgress(progress), backgroundColor: getColorByProgress(progress) + "12" }}
      >
        <div className={`h-auto flex flex-col items-start justify-between gap-y-3 px-3 py-4 font-rubik`}
             style={{ width: progress ? "100%" : "50%" }}>
          <div className={"w-full flex items-center justify-between"}>
            <h1
              onClick={() => router.push(`/components/button/${id}`)} // Path: src/components/button/[id].tsx
              className={cn("w-fit text-3xl text-blue-500 tracking-wider cursor-pointer transition-all duration-300 hover:underline", progress === "rejected" && "text-red-500 hover:no-underline")}
            >{title} <span className={"text-sm"}> {progress === "rejected" && "Your component hash ben rejected"}</span>
            </h1>
            {progress && <Button onClick={() => router.push(`/components/button/${id}`)} size={"sm"} variant={"flat"}
                                 color={"danger"}>{progress === "rejected" ? "Delete" : "Edit"}</Button>}
          </div>
          {description && (
            <div>
              <p className={"text-medium tracking-wide"}>
                {description.length > 200 ? description.slice(0, 200) + "..." : description}
              </p>
            </div>
          )}
          <div className={"flex flex-wrap gap-4 items-center justify-start"}>
            {tags && tags.map((t, idx) => (
              <Button key={idx}>{t}</Button>
            ))}
          </div>
          {progress && progress !== "rejected" && <div className={"w-full py-3"}>
            <div className={"w-full h-auto flex flex-col justify-between items-start text-sm relative gap-5"}>
              {timeProgress && timeProgress.map((item, index) => (
                <div key={index} className={"flex items-start justify-start gap-2 relative px-5"}>
                  <p>{item.step1}</p>
                  <p>{
                    item.date === "progress" ? "progress..." : item.date == "-" ?  " -" : new Date(item.date).toDateString()
                  }</p>
                </div>
              ))}
              <div className={"absolute top-0 left-0 h-full w-[2px] -z-10 rounded-md"} style={{ backgroundColor: getColorByProgress(progress) }}/>
            </div>
          </div>}
        </div>
        {codePreview && <div className={"w-1/2 h-full my-auto"}>
          <div className={"w-full h-full flex flex-col items-center justify-center gap-y-3 text-2xl font-bold"}>
            <div className={"flex items-center gap-5"}>
              <p>Like</p>
              {likes ? (<NumberTicker value={likes.size} />) : (<p className={"text-red-500"}>-</p>)}
            </div>
            <div className={"flex items-center gap-5 "}>
              <p>Code Preview</p>
              {codePreview ? (<NumberTicker value={codePreview.size} />) : (<p>0</p>)}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};
