"use client";


import { Introduction } from "../Introduction";

export const Index = ({ path }: { path: string | undefined }) => {
  switch (path) {
    case "introduction":
      return <Introduction />;
  }
};



