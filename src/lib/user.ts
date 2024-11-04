import { UserTypes } from "@/types/user";

import axios from "./axios";


export const fetchUser = async (token: string): Promise<UserTypes> => {
  
  const response = await axios.get("/user", {
    headers: { authorization: token }
  });
  console.log(response.data.data.user, "response.data.data.user");
  
  return response.data.data.user as UserTypes;
};
