import { UserTypes } from "@/types/user";

import axios from "./axios";


export const fetchUser = async (token: string): Promise<UserTypes> => {
  const response = await axios.get("/user", {
    headers: { authorization: token }
  });

  return response.data.user as UserTypes;
};