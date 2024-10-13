"use client";



import TopNav from "@/components/mainPage/dashboard/TopNav";
import UserDeteils from "@/components/mainPage/dashboard/UserDeteils";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Card } from "@/components/mainPage/postPage/Card";
import { Footer } from "@/components/ui/Footer";


const Page = () => {

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
    <div className={"h-auto w-full"}>
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
      <div className={"w-auto h-auto"}>
        <UserDeteils />
      </div>
      <div className={"w-full h-auto p-5"}>
        <div className={"w-full h-full"}>
          <div className={"hidden md:inline-block w-1/2  align-top pr-2"}>
            <div className={"flex flex-col items-start justify-start gap-5"}>
              <Card containerHeight={500} setAnimation={false}/>
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
      <Footer />
    </div>
  );
};

export default Page;
