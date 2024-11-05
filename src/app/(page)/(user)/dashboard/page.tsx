"use client";

import { useRouter } from "next/navigation";

import { ComponentList } from "@/components/dashboard";
import { useUser } from "@/context/UserContext";

const Page = () => {

  // const { user } = useUser();
  // const router = useRouter();
  //
  // if (!user) {
  //   router.replace("/login");
  //   return null;
  // }

  return (
    <div className={"w-full h-auto"}>
      <ComponentList />
    </div>
  );
};

export default Page;
