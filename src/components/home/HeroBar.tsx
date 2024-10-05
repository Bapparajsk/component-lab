"use client";

import {useEffect, useMemo, useState} from "react";
import {IconChevronRight, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandFramerMotion} from "@tabler/icons-react";
import {useRouter} from "next/navigation";
import {Image} from "@nextui-org/react";

import { ShootingStars } from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/background";
import {BorderBeam} from "@/components/ui/border-beam";
import {AnimatedGradientText} from "@/components/ui/animated-gradient-text";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import {RainbowButton} from "@/components/ui/button";


export const HeroBar = () => {
    const [starColor, setStarColor] = useState<"#9E00FF" | "#2EB9DF">("#2EB9DF");
    const { theme } = useTheme();
    const { push } = useRouter();

    const icons = useMemo(() => {
        return [
            {icon: IconBrandNextjs, text: "Next.js"},
            {icon: IconBrandReact, text: "React"},
            {icon: IconBrandTailwind, text: "Tailwind CSS"},
            {icon: IconBrandFramerMotion, text: "Framer Motion"},
        ];
    },[]);

    useEffect(() => {
        setStarColor(theme === "dark" ? "#9E00FF" : "#2EB9DF");
    },[theme]);

    return (
        <div
            className={"mx-auto max-w-[80ren] px-6 text-center md:px-8 flex flex-col items-center justify-center relative"}>
            <ShootingStars starWidth={20} starHeight={6}/>
            <StarsBackground
                className={"absolute inset-0 "}
                quantity={100}
                ease={80}
                color={starColor}
                refresh={true}
            />
            <div className={"flex items-center mb-3 mt-10 justify-center z-10"}>
                <AnimatedGradientText>
                    🎉 <hr className={"mx-2 h-4 w-px shrink-0 bg-gray-300"}/>{" "}
                    <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        )}
                    >
                        Introducing Component Lab
                    </span>
                    <IconChevronRight
                        className={"ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"}/>
                </AnimatedGradientText>
            </div>
            <div className={"h-auto space-y-3 mb-8 z-10"}>
                <h1 className={" text-3xl md:text-6xl lg:text-8xl  font-fredoka"}>
                    Mack your website with
                    <br/>
                    10x faster and easier.
                </h1>
                <p className={"font-bold font-playwrite"}>
                    Beautifully designed, animated components and templates built with
                    <br/>
                    Tailwind CSS, React, and Framer Motion.
                </p>
            </div>
            <div className={"w-full h-auto flex items-center justify-center flex-wrap gap-5"}>
                <RainbowButton onClick={() => push("/gettingstarted/introduction")} dark={false}>
                    <div className={"h-auto w-full dark:text-black flex gap-x-5 py-4"}>
                        <span className={"font-normal"}>
                            Browse Components
                        </span>
                    </div>
                    <IconChevronRight size={24} className={"text-white dark:text-black"}/>
                </RainbowButton>
                <RainbowButton onClick={() => push("/gettingstarted/introduction")} color={"black"} dark={true}>
                    <div className={"h-auto w-full text-black dark:text-white flex gap-x-5 py-4"}>
                        <span className={"font-normal"}>
                            Create Components
                        </span>
                    </div>
                    <IconChevronRight size={24} className={"text-black dark:text-white"}/>
                </RainbowButton>
            </div>

            <div className={"w-auto h-fit z-10"}>
                <div className={"flex items-center justify-center space-x-6 mt-10 flex-wrap"}>
                    {
                        icons.map((item, index) => (
                            <div key={index} className={"flex items-center justify-center font-normal gap-x-2"}>
                                <item.icon size={40} stroke={1}/>
                                {item.text}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                className={`relative mt-20 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)] ${'before:animate-image-glow'}`}>
                <div
                    className={"rounded-xl border border-black/10 dark:border-white/10  bg-white hero bg-opacity-[0.01] "}>
                    <BorderBeam size={200} duration={12} delay={9} />
                    <Image
                        src={"/images/hero-bar-dark.png"}
                        alt={"HeroDarkImage"}
                        className={"relative hidden size-full rounded-[inherit] object-contain dark:block"}
                    />
                    <Image src={"/images/hero-bar-light.png"} alt={"HeroLightImage"}
                         className={"relative block size-full rounded-[inherit] object-contain dark:hidden"}/>
                </div>
            </div>
        </div>
    );
};
