import axios from "@/lib/axios";
import { UserTypes } from "@/types/user";

export const login = async ({email, password}:{ email: string, password: string }) => {
  const res = await axios.post("/auth/login", { email, password });
  return res.data.data as {token: string, user: UserTypes };
};

export const register = async ({
  fullName,
  UName,
  email,
  password
}:{
  fullName: string,
  UName: string,
  email: string,
  password: string
}) => {
  console.log("registering");
  const res = await axios.post("/auth/register", {
    name: fullName,
    displayName: UName,
    email, password
  });

  console.log("registered", res.data.data.token);
  return res.data.data.token;
};

export const verifyOtp = async ({token, otp}: {token: string, otp: string}) => {
  console.log("verifying otp", token, otp);
  const res = await axios.post("/auth/verify", { token, otp });
  return res.data.data as { token: string, user: UserTypes };
};

export const resendOtp = async ({token}: {token: string}) => {
  const res = await axios.post("/auth/resend", { token });
  return res.data.data.token as string;
};
