"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "@nextui-org/react";
import { IconCopy } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export const ExampleCode = ({ code }: { code: any }) => {

  const [isShowExampleCode, setIsShowExampleCode] = useState(false);
  const [isShowSourceCode, setIsShowSourceCode] = useState(false);

  return (
    <div className={"w-full h-auto mt-10"}>
      <div className={"h-auto w-full relative"}>
        <div className={"w-full h-auto"}>
          <div className={cn("w-full h-52 overflow-y-hidden", isShowExampleCode && "h-auto overflow-y-auto")}>
            <SyntaxHighlighter language={"jsx"} style={dracula} line={true}>
              {code.exampleCode}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className={cn("absolute h-52 w-full bg-[rgba(0,0,0,0.49)] bottom-0 flex items-center justify-center shadow-[0px_0px_100px_20px_rgba(0,0,0,0.75)_inset]",
          isShowExampleCode && "h-14"
        )}>
          <Button variant={"faded"} color={"default"} onPress={() => {
            setIsShowExampleCode(!isShowExampleCode);
          }}>{isShowExampleCode ? "Collapse" : "Expand"}</Button>
        </div>
      </div>
      <div className={"w-full h-auto relative mt-10"}>
        <div className={"w-full py-4"}>
          <h3 className={"text-white font-bold text-2xl"}>Installation</h3>
        </div>
        <div
          className={"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"}>
          <div
            className={"[&>h3]:step steps mb-12 ml-4 border-l border-neutral-200 dark:border-neutral-700 pl-8 [counter-reset:step]"}>
            {code?.dependencies && <>x<h3
              className={"font-heading relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-neutral-200"}>
              <span
                className={"absolute block -left-8 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200 dark:bg-neutral-700 w-[6px]"}></span>
              Install dependencies</h3>
              <div className={"mt-6"}>
                <div
                  className={"w-full py-5 px-5 shadow-[0_0_400px_30px_rgba(24,24,27,0.75)_inset] rounded-md border-[1px] border-neutral-700"}>
                  <div className={"w-full h-auto flex items-center justify-between"}>
                    <div className={"w-auto h-auto flex gap-2"}>
                      <div className={cn("cursor-pointer flex items-center gap-1 transition-all duration-300")}>
                        <span className={"text-sm text-white"}>npm i @nextui-org/react</span>
                      </div>
                    </div>
                    <div className={"cursor-pointer"}>
                      <IconCopy size={18} stroke={1.5} color={"white"} />
                    </div>
                  </div>
                </div>
              </div></>}
            {code?.utils && <>
              <h3
                className={"font-heading relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-neutral-200"}>
                <span
                  className={"absolute block -left-8 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200 dark:bg-neutral-700 w-[6px]"}></span>
                Add util file</h3>
              <div className={"w-full h-auto mt-8"}>
                <p className={"font-rubik ml-5"}>lib/utils.ts</p>
                <SyntaxHighlighter language={"jsx"} style={dracula} line={true}>
                  {
                    "import { ClassValue, clsx } from \"clsx\";\n" +
                    "import { twMerge } from \"tailwind-merge\";\n" +
                    " \n" +
                    "export function cn(...inputs: ClassValue[]) {\n" +
                    "  return twMerge(clsx(inputs));\n" +
                    "}"
                  }
                </SyntaxHighlighter>
              </div>
            </>}
            {code?.tailwind && <>
              <h3
                className={"font-heading relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-neutral-200"}>
                <span
                  className={"absolute block -left-8 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200 dark:bg-neutral-700 w-[6px]"}></span>
                Add the following code in <code
                  className={"relative rounded bg-neutral-400/60 px-[0.3rem] py-[0.2rem] text-sm dark:bg-neutral-700/70 dark:text-neutral-200 __className_faaa9a"}>tailwind.config.js</code> file
              </h3>
              <div className={"w-full h-auto mt-8"}>
                <p className={"font-rubik ml-5"}>lib/utils.ts</p>
                <SyntaxHighlighter
                  language={"jsx"}
                  style={dracula}
                  line={true}
                  showLineNumbers={true}
                  wrapLines={true}
                  lineProps={(lineNumber) => {
                    let style = {};
                    if (code.tailwind.highlightLines.includes(lineNumber)) {
                      style = { backgroundColor: "#3e3e49" };
                    }
                    return { style };
                  }}
                >
                  {code.tailwind.code}
                </SyntaxHighlighter>
              </div>
            </>}
            <h3
              className={"font-heading relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-neutral-200"}>
              <span
                className={"absolute block -left-8 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200 dark:bg-neutral-700 w-[6px]"}></span>
              Copy the source code</h3>
            <div className={"h-auto w-full relative mt-8"}>
              <div className={"w-full h-auto"}>
                <p><code
                  className={"relative rounded bg-neutral-400/60 px-[0.3rem] py-[0.2rem] text-sm dark:bg-neutral-700/70 dark:text-neutral-200 __className_faaa9a"}>components/ui/{code?.source?.path}</code>
                </p>
                <div className={cn("w-full h-52 overflow-y-hidden", isShowSourceCode && "h-auto overflow-y-auto")}>
                  <SyntaxHighlighter
                    language={"jsx"}
                    style={dracula}
                  >
                    {code?.source?.code}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div
                className={cn("absolute h-52 w-full bottom-0 flex items-center justify-center",
                  isShowSourceCode && "h-14",
                  !isShowSourceCode && "bg-[rgba(0,0,0,0.49)] shadow-[0px_0px_100px_20px_rgba(0,0,0,0.75)_inset]"
                )}>
                <Button variant={"faded"} color={"default"} onPress={() => {
                  setIsShowSourceCode(!isShowExampleCode);
                }}>{isShowSourceCode ? "Collapse" : "Expand"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
