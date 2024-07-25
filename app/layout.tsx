import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

import {
  ClerkProvider,
} from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Orb",
  description: "A simple Next.js starting point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen dark:bg-slate-800 font-sans antialiased",
            fontSans.variable
          )}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
