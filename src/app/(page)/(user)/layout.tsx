"use client";

import { ReactNode } from "react";

import TopNav from "@/components/profile/TopNav";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Footer } from "@/components/ui/Footer";


const ComponentLayout = ({ children } : Readonly<{ children: ReactNode}>) => {

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

  return (
    <div className={"w-full h-auto"}>
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
      {children}
      <Footer />
    </div>
  );
};

export default ComponentLayout;
