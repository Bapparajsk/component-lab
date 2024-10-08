"use client";

import {useRef} from "react";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card } from "@/components/mainPage/postPage/Card";

function Posts({ post }: { post: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const dummyContent = Array.from({ length: 200 }, (_, i) => (
    <p key={i} className='pb-4 font-mono text-sm text-zinc-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
      lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
      nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
      libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
      porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
      a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  ));

  return (
    <div className={"w-full h-full p-5"}>
      <ScrollProgress
        className={"fixed top-16 left-72 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"}
        containerRef={containerRef}
        springOptions={{
          stiffness: 280,
          damping: 18,
          mass: 0.3,
        }}
      />
      <div className={"w-full h-full flex flex-wrap lg:gap-2 xl:gap-3"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Posts;
