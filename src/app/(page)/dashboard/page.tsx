"use client";

import { IconSignature, IconBrandPushbullet, IconMist } from '@tabler/icons-react'

import TopNav from "@/components/mainPage/dashboard/TopNav";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";


const Page = () => {

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: string) => {
    // console.log(e.target.value);
    console.log(e);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const imageUrl =
    "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg";

  return (
    <div className={"h-auto w-full"}>
      <div className={"w-full h-20 flex items-center justify-end border-b border-gray-600"}>
        <TopNav />
        <div className={"w-[450px] px-3"}>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <div className={"w-full h-80 border-b border-gray-600 flex items-center"}>
        <div className={"w-auto h-60 flex items-center justify-center px-10 gap-5"}>
          <div className={""}>
            <DirectionAwareHover imageUrl={imageUrl}>
              <p className={"font-bold text-xl"}>Bapparaj sk</p>
              <p className={"font-normal text-sm"}>CEO</p>
            </DirectionAwareHover>
          </div>
          <div className={"w-96 h-full flex flex-col items-start gap-1"}>
            <div className={"space-y-2"}>
              <p className={"font-rubik text-4xl "}>Bapparajsk</p>
              <p className={"font-rubik text-2xl text-gray-500"}>@Bapparaj007 · he/him</p>
              <p className={"font-rubik text-medium pt-4"}>
                I am Full Stack Web Developer | Passionate about DSA | 2 Years of Experience in Web Development and DSA Enthusiast | HTML, CSS, JS, React, Next.js
              </p>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
