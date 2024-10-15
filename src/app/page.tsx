"use client";

import { HeroBar } from "@/components/home/HeroBar";
import { WorkSession } from "@/components/home/WorkSession";
import { MoonSun } from "@/components/home/MoonSun";


function Home() {

    return (
        <main className={"mx-auto overflow-hidden"}>
            <MoonSun />
            <HeroBar />
            <WorkSession />
        </main>
    );
}

export default Home;
