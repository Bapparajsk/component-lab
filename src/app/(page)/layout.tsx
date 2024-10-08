import { ReactNode } from "react";

import { SideBar } from "@/components/mainPage/SideBar";


const ComponentLayout = ({ children } : Readonly<{ children: ReactNode}>) => {
    return (
      <div className={"w-full mx-auto flex flex-col items-center"}>
        <div className={"w-full h-auto flex"}>
          <div className={"sticky top-0 left-0 w-72 h-screen border-r border-gray-600 hidden lg:block"}>
            <SideBar />
          </div>
          <main className={"flex-1 h-auto overflow-y-auto"}>
            {children}
          </main>
        </div>
      </div>
    );
};

export default ComponentLayout;
