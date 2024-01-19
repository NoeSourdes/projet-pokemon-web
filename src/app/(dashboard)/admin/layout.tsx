"use client";

import React from "react";
import { Header } from "@/components/admin/header/header";
import Footer from "@/components/admin/footer/page";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="lg:h-screen flex flex-col min-h-screen">
      <Header />
      <div className="ring-0 flex-grow">{children}</div>
      <div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
