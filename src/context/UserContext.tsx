"use client";

import { createContext, FC, ReactNode, useContext, useState, useEffect } from "react";

import { UserTypes, UserContextType } from "@/types/user";
import { fetchUser } from "@/lib/user";

const UserContext = createContext<UserContextType>({
  user: null,
  isUserLoggedIn: () => false
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<UserTypes | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if(token) {
      fetchUser(token).then((user) => setUser(user));
    }
  }, []);

  const isUserLoggedIn = (): boolean => {
    return !!user; // This for production
    // return true; // This for development
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
