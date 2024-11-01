"use client";

import React from "react";
import {Image, Skeleton} from "@nextui-org/react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

import {cn} from "@/lib/utils";

export const TolContent = ({ name }:{name: string}) => {

    const { data, isPending } = useQuery({
        queryKey: ["user", name],
        queryFn: async () => {
            const res = await axios.get(`https://api.github.com/users/${name}`);
            console.log(res.data);
            return res.data;
        },
        retry: 2,
    });

    return (
        <div className={"max-w-xs w-full group/card"}>
            <div
                className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(/images/github.webp)] bg-cover"
                )}
            >
                <div
                    className={"absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"}></div>
                <div className={"w-full flex flex-row items-center space-x-4 z-10"}>
                    {isPending ?<Skeleton className={"flex rounded-full w-10 h-10"}/> :
                        <Image
                        height={"100"}
                        width={"100"}
                        alt={"Avatar"}
                        src={data && data.avatar_url}
                        className={"h-10 w-10 rounded-full border-2 object-cover"}
                    />}
                    {isPending ?
                        <div className={"w-full flex flex-col gap-2"}>
                            <Skeleton className={"h-3 w-3/5 rounded-lg"}/>
                            <Skeleton className={"h-3 w-4/5 rounded-lg"}/>
                        </div> :
                        <div className={"flex flex-col font-bold"}>
                            <p className={"text-base text-gray-50 relative z-10"}>
                                {data?.name}
                            </p>
                            <p className={"text-sm text-blue-500"}>@{data?.login}</p>
                        </div>
                    }
                </div>
                <div className={"text content"}>
                    {isPending ?
                        <div className={"space-y-3"}>
                            <Skeleton className={"h-8 w-32 rounded-lg"}/>
                            <Skeleton className={"h-3 w-72 rounded-lg"}/>
                            <Skeleton className={"h-3 w-36 rounded-lg"}/>
                            <Skeleton className={"h-3 w-64 rounded-lg"}/>
                        </div> :
                        <>
                            <p className={"font-bold text-lg text-gray-50 relative z-10"}>
                                {data?.login}
                            </p>
                            <p className={"font-normal text-sm text-gray-50 relative z-10 my-4"}>
                                {data?.bio}
                            </p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
