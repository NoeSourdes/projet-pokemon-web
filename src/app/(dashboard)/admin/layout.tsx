"use client";

import Footer from "@/components/admin/footer/page";
import { Header } from "@/components/admin/header/header";
import React from "react";

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
