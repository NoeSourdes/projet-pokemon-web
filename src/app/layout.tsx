import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Toaster } from "sonner";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokéland",
  description: "Pokéland, un site pour les fans de Pokémon !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
        <Toaster richColors />
      </body>
    </html>
  );
}
