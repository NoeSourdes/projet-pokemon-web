"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user?.createNow === false) {
    router.push("/onboarding");
  }
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{session?.user?.email}</h1>
      <h1 className="text-4xl font-bold">{session?.user?.name}</h1>
      <Image
        className="rounded-full"
        src={session?.user?.image || "/img/avatar.jpg"}
        alt="Profile"
        width={200}
        height={200}
      />
      <Button className="mt-5" onClick={() => signOut({ callbackUrl: "/" })}>
        signOut
      </Button>
    </main>
  );
}
