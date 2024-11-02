import axios from "@/lib/axios";
import { UserTypes } from "@/types/user";

export const login = async ({email, password}:{ email: string, password: string }) => {
  const res = await axios.post("/auth/login", { email, password });
  return res.data as {token: string, user: UserTypes };
};
