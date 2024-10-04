import { ReactNode } from "react";

import { Navigation } from "@/components/mainPage/Navigation";
import { SideBar } from "@/components/mainPage/SideBar";

const ComponentLayout = ({ children } : Readonly<{ children: ReactNode}>) => {
    return (
        <main className={"max-w-[1700px] mx-auto flex flex-col items-center"}>
            <Navigation />
            <SideBar />
            {children}
        </main>
    );
};

export default ComponentLayout;
