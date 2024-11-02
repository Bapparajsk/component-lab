"use client";

import { useRouter } from "next/navigation";

import { LoginComponent } from "@/components/login/LoginComponent";
import { useUser } from "@/context/UserContext";


const Login = () => {

  const { user } = useUser();
  const router = useRouter();

  if (user !== null) {
    router.replace("/profile", { scroll: false });
    return null;
  }

  return (
    <div className={"w-full h-screen flex items-center justify-center"}>
      <LoginComponent />
    </div>
  );
};

export default Login;
