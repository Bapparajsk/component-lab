import { ReactNode } from "react";

import { SideBar } from "@/components/mainPage/SideBar";

const ComponentLayout = ({ children } : Readonly<{ children: ReactNode}>) => {
    return (
      <main className={"w-full mx-auto flex flex-col items-center"}>
        <div className={"w-full h-auto flex"}>
          <div className={"sticky top-0 left-0 w-72 h-screen border-r-[1px] border-gray-600"}>
            <SideBar />
          </div>
          <div className={"flex-1 ml-72 h-auto overflow-y-auto"}>
            {children}
          </div>
        </div>
      </main>
    );
};

export default ComponentLayout;
