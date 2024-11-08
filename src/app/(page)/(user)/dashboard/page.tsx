"use client";

import { ComponentList } from "@/components/dashboard";

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
