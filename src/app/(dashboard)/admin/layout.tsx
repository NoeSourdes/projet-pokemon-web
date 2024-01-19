"use client";

import React from "react";
import { Header } from "@/components/admin/header/header";
import Footer from "@/components/admin/footer/page";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="lg:h-screen">
      <Header />
      <div className="lg:absolute lg:top-[75px] lg:bottom-[50px] lg:left-0 ring-0">
        {children}
      </div>
      <div>
        <div className="lg:absolute lg:bottom-0 lg:left-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
