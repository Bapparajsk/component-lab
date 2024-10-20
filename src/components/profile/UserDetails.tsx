"use client";

import { ReactNode } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconLink } from "@tabler/icons-react";


import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";

export default function UserDetails() {

    const imageUrl =
        "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg";

    return (
        <div className={"w-full h-80 border-b border-gray-600 flex items-center"}>
            <div className={"h-full w-auto flex items-center justify-center border-r-[1px] border-gray-600"}>
                <div className={"w-auto h-60 flex items-center justify-center px-10 gap-5"}>
                    <div>
                        <DirectionAwareHover imageUrl={imageUrl}>
                            <p className={"font-bold text-xl"}>Bapparaj sk</p>
                            <p className={"font-normal text-sm"}>CEO</p>
                        </DirectionAwareHover>
                    </div>
                    <div className={"w-80 h-full flex flex-col items-start gap"}>
                        <div className={"h-full font-rubik  flex flex-col items-start justify-between"}>
                            <p className={"text-4xl "}>Bapparajsk</p>
                            <p className={"text-2xl text-gray-500"}>@Bapparaj007 · he/him</p>
                            <p className={"text-medium text-gray-800 dark:text-gray-400"}>
                                I am Full Stack Web Developer | Passionate about DSA | 2 Years of
                                Experience in Web Development and DSA Enthusiast
                                | HTML, CSS, JS, React, Next.js
                            </p>
                            <Button fullWidth={true} className={"tracking-wider border-2 border-gray-600"} color={"default"} variant={"faded"}>
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full h-full flex "}>
                <div className={"w-3/5 h-full flex items-center"}>
                    <div className={"w-full h-72 flex flex-col"}>
                        <div className={"w-full h-36 flex items-center justify-evenly border-b border-gray-600 font-rubik"}>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center "}>
                                <p className={"text-2xl font-bold"}>Tweets</p>
                                <p>10</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Following</p>
                                <p>100</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Followers</p>
                                <p>168K</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Likes</p>
                                <p>67M</p>
                            </div>
                        </div>
                        <div className={"w-full h-full flex flex-col items-start justify-start gap-2 px-5 py-4 font-rubik"}>
                            <UserLinker
                                link={"https://github.com/Bapparaj007"} // maxlen -> 70
                                icon={<IconBrandGithub />}
                            />
                            <UserLinker
                                link={"https://twiter.com/Bapparaj007"}
                                icon={<IconBrandTwitter />}
                            />
                            <UserLinker
                                link={"https://github.j007"}
                                icon={<IconBrandLinkedin />}
                            />
                            <UserLinker
                                link={"https://gitparaj007"}
                                icon={<IconLink />}
                            />
                            <UserLinker
                                link={"https://github.com/Badfufdfpparsdfisdfgjddfiguhrgheriojdfsdkfsodfjquiweddfsdfsdfsdfsdffuigdfgaj007"}
                                icon={<IconLink />}
                            />
                        </div>
                    </div>
                </div>
                <div className={"h-full w-[1px] bg-gray-600"} />
                <div className={"w-2/5 h-full"}>
                    <div className={"w-full h-full px-3 overflow-y-scroll scrollbar-hide"}>
                        <h2 className={"text-4xl font-fredoka py-4"}>Language.</h2>
                        <div className={"w-full h-auto flex flex-wrap gap-1 justify-start"}>
                            <Image src={"https://img.icons8.com/color/48/javascript--v1.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/officel/80/react.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/color/48/typescript.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/fluency/48/node-js.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/color/48/python--v1.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/officel/80/express-js.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/fluency/48/css3.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://img.icons8.com/color/48/sass.png"} alt={"image"} width={40} height={40} className={"object-contain"} />
                            <Image src={"https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"} alt={"image"} width={30} height={30} className={"object-contain"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function UserLinker({
    link,
    icon,
    className,
    linkClassName,
}: {
    link: string;
    icon?: ReactNode;
    className?: string;
    linkClassName?: string;
}) {

    return (
        <div className={cn("w-full h-auto flex items-center justify-start gap-2 group", className)}>
            {icon}
            <p
                onClick={() => { window.open(link, "_blank"); }}
                className={cn("cursor-pointer group-hover:underline group-hover:text-blue-500 text-sm text-gray-800 dark:text-gray-500", linkClassName)}>
                {link.length > 65 ? `${link.slice(0, 65)}...` : link}
            </p>
        </div>
    );
}
