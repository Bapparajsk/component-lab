"use client";

import {HeroBar} from "@/components/home/HeroBar";
import {WorkSession} from "@/components/home/WorkSession";

function Home() {
    return (
        <main className={"mx-auto overflow-hidden"}>
            <HeroBar />
            <WorkSession />
        </main>
    );
}

export default Home;
