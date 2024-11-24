export const Buttons = [
    {
        id: 0,
        userId: "a",
        developerName: "Rohit",
        tag: new Set(["button", "component"]),
        flags: new Set(["animaction", "hover", "click"]),
        mainCode: () => {
            return (
                <div className={"w-72 h-40 flex items-center justify-center"}>
                    <button className={"bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"}>
                        <span className={"absolute inset-0 overflow-hidden rounded-full"}>
                            <span className={"absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"} />
                        </span>
                        <div className={"relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "}>
                            <span>
                                Tailwind Connect
                            </span>
                            <svg
                                fill={"none"}
                                height={"16"}
                                viewBox={"0 0 24 24"}
                                width={"16"}
                                xmlns={"http://www.w3.org/2000/svg"}
                            >
                                <path
                                    d={"M10.75 8.75L14.25 12L10.75 15.25"}
                                    stroke={"currentColor"}
                                    strokeLinecap={"round"}
                                    strokeLinejoin={"round"}
                                    strokeWidth={"1.5"}
                                />
                            </svg>
                        </div>
                        <span className={"absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"} />
                    </button>
                </div>
            );
        },

        useGiler: {
            "exampleCode": `
            import React from "react";
            import { MacbookScroll } from "../ui/macbook-scroll";
            import Link from "next/link";
            
            export function MacbookScrollDemo() {
                return (
                    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
                    <MacbookScroll
                        title={
                            <span>
                                This Macbook is built with Tailwindcss. <br /> No kidding.
                            </span>
                        }
                        badge={
                            <Link href="https://peerlist.io/manuarora">
                                <Badge className="h-10 w-10 transform -rotate-12" />
                            </Link>
                        }
                        src={"/linear.webp"}
                        showGradient={false}
                    />
                    </div>
                );
            }
            // Peerlist logo
            const Badge = ({ className }: { className?: string }) => {
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={className}
                    >
                    <path
                        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                        fill="#00AA45"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                        fill="#219653"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
                        fill="#24292E"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
                        fill="white"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
                        fill="#24292E"
                    ></path>
                    </svg>
                );
            };`,
        }
    }
];
