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

export interface E { error: boolean, message: string, data?: any }

export interface ErrorTypes {
  fullName: E,
  "u-name": E,
  email: E,
  password: E,
  otp: E,
  main: E,
}
