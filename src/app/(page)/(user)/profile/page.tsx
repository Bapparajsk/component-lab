"use client";

import UserDetails from "@/components/mainPage/profile/UserDeteils";
import { Card } from "@/components/mainPage/postPage/Card";

const Page = () => {

  return (
    <div className={"h-auto w-full"}>
      <div className={"w-auto h-auto"}>
        <UserDetails />
      </div>
      <div className={"w-full h-16 border-b border-gray-600  mb-5 flex items-center justify-between px-10"}>
        <div className={"w-auto h-auto"}>
          Pots
        </div>
        <div className={"w-auto h-auto"}>
          
        </div>
        <div className={"w-auto h-auto"}>
          Sort
        </div>
      </div>
      <div className={"w-full h-auto px-5"}>
        <div className={"w-full h-full"}>
          <div className={"hidden md:inline-block w-1/2  align-top pr-2"}>
            <div className={"flex flex-col items-start justify-start gap-5"}>
              <Card containerHeight={500} setAnimation={false} editButton={true}/>
              <Card containerHeight={400} setAnimation={false}/>
              <Card containerHeight={500} setAnimation={false}/>
              <Card containerHeight={250} setAnimation={false}/>
              <Card containerHeight={300} setAnimation={false}/>
            </div>
          </div>
          <div className={"hidden md:inline-block  w-1/2  align-top pl-2"}>
            <div className={"flex flex-col items-start justify-center gap-5"}>
              <Card containerHeight={400} setAnimation={false}/>
              <Card containerHeight={600} setAnimation={false}/>
              <Card containerHeight={300} setAnimation={false}/>
              <Card containerHeight={300} setAnimation={false}/>
              <Card containerHeight={300} setAnimation={false}/>
            </div>
          </div>

          <div className={"inline-block md:hidden w-full align-top pr-2"}>
            <div className={"flex flex-col items-start justify-start gap-5"}>
              <Card containerHeight={200} />
              <Card containerHeight={400} />
              <Card containerHeight={50} />
              <Card containerHeight={200} />
              <Card containerHeight={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
