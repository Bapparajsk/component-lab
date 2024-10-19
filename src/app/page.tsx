"use client";

import { HeroBar, WorkSession, MoonSun } from "@/components/home";

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
