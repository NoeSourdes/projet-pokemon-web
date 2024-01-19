"use client";

import React from "react";
import { Header } from "@/components/admin/header/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="lg:h-screen">
      <Header />
      <div className="absolute top-[75px] bottom-0 left-0 ring-0">
        {children}
      </div>
    </div>
  );
}
