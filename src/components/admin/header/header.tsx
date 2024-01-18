import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CgPokemon } from "react-icons/cg";
import { MdCatchingPokemon } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { ComponentSheet } from "@/components/admin/header/components/sheet";

interface data {
  user: {
    level: number;
    personnageName: boolean;
    money: boolean;
    pokedex: boolean;
    progress: number;
  };
}

export const Header = () => {
  const [data, setData] = useState<data | null>(null);
  const { data: session } = useSession();
  console.log(data);
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    const response = await fetch("/api/user/get-profile-admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="px-10 max-lg:px-5 py-5 flex justify-between items-center border-b">
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <MdCatchingPokemon className="text-primary h-10 w-10" />
          <h1 className="text-3xl font-bold">PokéLand</h1>
        </div>
        <Link href="#">
          <Button className="hidden lg:block" variant="outline">
            Améliorer le pokemon
          </Button>
        </Link>
        <Link href="#">
          <Button className="hidden lg:flex">
            <CgPokemon className="mr-2 h-6 w-6" /> Pokedex
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 max-lg:gap-2">
        <Link href="#" className="hidden lg:block">
          <Button variant="outline">Magasin</Button>
        </Link>
        {loading ? (
          <>
            <Skeleton className="w-[78px] h-[40px] rounded-[7px] hidden lg:block" />
            <Skeleton className="w-[132px] h-[35px] rounded-full hidden lg:block" />
          </>
        ) : (
          <>
            {data && (
              <>
                <Button className="hidden lg:block">
                  Level {data.user.level}
                </Button>
                <div className="items-center py-2 px-3 bg-secondary rounded-full gap-2 hidden lg:flex">
                  <Progress
                    value={data.user.progress}
                    className="w-[70px] h-2 bg-black"
                  />
                  <p className="text-sm">{data.user.progress} %</p>
                </div>
              </>
            )}
          </>
        )}
        {loading ? (
          <Skeleton className="w-[83px] h-[35px] rounded-full" />
        ) : (
          <>
            {data && (
              <>
                <div className="h-[35px] px-3 flex justify-between items-center gap-2 bg-secondary rounded-full">
                  <RiMoneyEuroCircleLine className="w-6 h-6 text-primary" />
                  <span>{data?.user.money}</span>
                </div>
              </>
            )}
          </>
        )}
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={session?.user.image || undefined} />
              <AvatarFallback>
                <Skeleton className="w-[35px] h-[35px] rounded-full" />
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-[160px] mt-2 mr-10">
            <Button
              className="w-full"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Déconnexion
            </Button>
          </PopoverContent>
        </Popover>
        <div className="lg:hidden block">
          <ComponentSheet loading={loading} data={data} />
        </div>
      </div>
    </div>
  );
};
