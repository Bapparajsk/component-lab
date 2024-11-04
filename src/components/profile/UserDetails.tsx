"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconLink } from "@tabler/icons-react";

import { useUser } from "@/context/UserContext";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";

export default function UserDetails() {

    const { user } = useUser();

    const imageUrl =
        "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg";

    return (
        <div className={"w-full h-80 border-b border-gray-600 flex items-center"}>
            <div className={"h-full w-auto flex items-center justify-center border-r-[1px] border-gray-600"}>
                <div className={"w-auto h-60 flex items-center justify-center px-10 gap-5"}>
                    <div>
                        <DirectionAwareHover imageUrl={imageUrl}>
                            <p className={"font-bold text-xl"}>{user?.name}</p>
                            <p className={"font-normal text-sm"}>{user?.displayName}</p>
                        </DirectionAwareHover>
                    </div>
                    <div className={"w-80 h-full flex flex-col items-start gap"}>
                        <div className={"h-full font-rubik  flex flex-col items-start justify-between"}>
                            <p className={"text-4xl "}>{user?.name}</p>
                            <p className={"text-2xl text-gray-500"}>{user?.displayName} · {user?.gender}</p>
                            <p className={"text-medium text-gray-800 dark:text-gray-400"}>
                                {user?.description}
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
                                <p>{user?.posts || 0}</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Following</p>
                                <p>{user?.following || 0}</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Followers</p>
                                <p>{user?.followers || 0}</p>
                            </div>
                            <div className={"w-1/6 h-full flex flex-col items-center justify-center"}>
                                <p className={"text-2xl font-bold"}>Likes</p>
                                <p>{user?.liked || 0}</p>
                            </div>
                        </div>
                        <div className={"w-full h-full flex flex-col items-start justify-start gap-2 px-5 py-4 font-rubik"}>
                            {user?.links.map((link, index) => (
                                <UserLinker
                                    key={index}
                                    link={link.url}
                                    title={link.title}
                                />
                            ))}
                            {Array.from({ length: 5 - ( user?.links.length || 0) }).map((_, index) => (
                                <UserLinker
                                    key={index}
                                    link={"add new link"}
                                    title={"google"}
                                    onClick={() => console.log("add new link")}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"h-full w-[1px] bg-gray-600"} />
                <div className={"w-2/5 h-full"}>
                    <div className={"w-full h-full px-3 overflow-y-scroll scrollbar-hide"}>
                        <h2 className={"text-4xl font-fredoka py-4"}>Language.</h2>
                        <div className={"w-full h-auto flex flex-wrap gap-1 justify-start"}>
                            {
                                user?.language.map((lang, index) => (
                                    <Image key={index} src={lang.url} alt={lang.title} width={40} height={40} className={"object-contain"} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function UserLinker({
    link,
    title,
    className,
    linkClassName,
    onClick,
}: {
    link: string;
    title: string;
    className?: string;
    linkClassName?: string;
    onClick?: () => void;
}) {
    return (
        <div className={cn("w-full h-auto flex items-center justify-start gap-2 group", className)}>
            {findIcon(title)}
            <p
                onClick={() => { 
                    if(onClick) {
                        onClick();
                        return;
                    }
                    window.open(link, "_blank");
                }}
                className={cn("cursor-pointer group-hover:underline group-hover:text-blue-500 text-sm text-gray-800 dark:text-gray-500", linkClassName)}>
                {link.length > 65 ? `${link.slice(0, 65)}...` : link}
            </p>
        </div>
    );
}

function findIcon(name: string) {
    switch (name) {
        case "github":
            return <IconBrandGithub size={24} />;
        case "twitter":
            return <IconBrandTwitter size={24} />;
        case "linkedin":
            return <IconBrandLinkedin size={24} />;
        default:
            return <IconLink size={24} />;
    }
}
