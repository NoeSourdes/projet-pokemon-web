"use client";

import React from "react";
import { Header } from "@/components/admin/header/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
