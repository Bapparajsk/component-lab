"use client";

import { HeroBar, MoonSun } from "@/components/home";

function Home() {
    return (
        <main className={"mx-auto overflow-hidden"}>
            <MoonSun />
            <HeroBar />
        </main>
    );
}

export default Home;
