"use client";

import { Button } from "@/components/ui/button";
import { GrGoogle } from "react-icons/gr";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/admin" });
  };
  const { data: session } = useSession();
  console.log(session);
  return (
    <main className="relative sm:h-screen w-screen flex flex-col justify-center items-center">
      <div className="lg:flex justify-center items-center gap-28 hidden">
        <div>
          <Image
            src="/img/charizard.png"
            alt="Charizard"
            width={650}
            height={650}
          />
        </div>
        <div className="ml-20">
          <Image
            src="/img/blastoise.png"
            alt="Blastoise"
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="sm:absolute max-sm:mt-36">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={400}
            height={200}
            className="mb-8"
          />
          {session ? (
            <Link href="/admin">
              <Button>Accéder au tableau de bord</Button>
            </Link>
          ) : (
            <Button onClick={handleSignIn}>
              <GrGoogle className="mr-2 h-4 w-4" /> Commencer avec google
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
