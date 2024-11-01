"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

export type UserTypes = {
  id: string;
  name: string;
  displayName: string;
  userImage: string;
  gender: "he/him" | "she/her";
  description: string;
  links: { title: string, url: string }[];
  followers: number;
  following: number;
  likedPosts: number;
  liked: number;
  language: { title: string, url: string }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserContextType {
  user: UserTypes | null;
  isUserLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isUserLoggedIn: () => false
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<UserTypes | null>(null);

  const isUserLoggedIn = (): boolean => {
    return !!user;
  };

  return (
    <UserContext.Provider value={{
      user,
      isUserLoggedIn
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
