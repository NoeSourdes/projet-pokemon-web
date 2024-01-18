"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Header } from "@/components/admin/header/header";

export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user?.createNow === false) {
    router.push("/onboarding");
  }
  return (
    <main>
      <Header />
    </main>
  );
}
