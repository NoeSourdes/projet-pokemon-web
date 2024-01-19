"use client";

import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Header } from "@/components/admin/header/header";
import { Home } from "@/components/admin/home/home";

export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user?.createNow === false) {
    router.push("/onboarding");
  }
  return (
    <main className="h-full">
      <Home />
    </main>
  );
}
