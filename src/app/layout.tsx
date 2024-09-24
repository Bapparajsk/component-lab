import {ReactNode} from "react";
import type { Metadata } from "next";

import AppNavbar from "@/components/navbar/indev";
import {ThemeProvider} from "@/context/ThemeContext";

import "./globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Next.js + TypeScript Starter",
  description: "Next.js + TypeScript Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body>
        <Providers>
          <ThemeProvider>
            <AppNavbar/>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
