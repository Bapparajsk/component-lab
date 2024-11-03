import { UserTypes } from "@/types/user";

export interface TypesMutation {
  data: {
    fullName?: string;
    UName?: string;
    email: string;
    password: string;
  },
  fn: (data: any) => Promise<{token: string, user: UserTypes}>,
}

export interface ErrorTypes {
  fullName: { error: boolean, message: string },
  "u-name": { error: boolean, message: string },
  email: { error: boolean, message: string },
  password: { error: boolean, message: string },
  main: { error: boolean, message: string },
}
