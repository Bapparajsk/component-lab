import React from "react";

import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
};


const RainbowButton = ({ children, className, ...props }: RainbowButtonProps) => {

    return (
        <button
            className={cn(
                "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

                // before styles
                "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

                // light mode colors
                "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

                // dark mode colors
                "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const cnRainbowButton = ({ children, ...props }: RainbowButtonProps) => {
    return (
        <button
            {...props}
            className={"bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"}>
            <span className={"absolute inset-0 overflow-hidden rounded-full"}>
                <span
                    className={"absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"} />
            </span>
            <div
                className={"relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "}>
                <span>
                    {children}
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
            <span
                className={"absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"} />
        </button>
    );
};


export {
    RainbowButton,
    cnRainbowButton,
};
