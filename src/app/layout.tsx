import {ReactNode} from "react";
import type { Metadata } from "next";

import "./globals.css";
import {QueryProvider} from "@/app/QueryClientProvider";
import {ThemeProvider} from "@/context/ThemeContext";
import AppNavbar from "@/components/navbar/indev";

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
            <QueryProvider>
              <AppNavbar/>
              {children}
            </QueryProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
