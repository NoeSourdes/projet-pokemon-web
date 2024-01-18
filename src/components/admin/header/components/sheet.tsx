import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { CgPokemon } from "react-icons/cg";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  loading: boolean;
  data: any;
  session: any;
}

export const ComponentSheet = ({ loading, data, session }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <RiMenu4Fill />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="h-full">
          <SheetTitle className="text-center mb-5">Menu</SheetTitle>
          <SheetDescription className="h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-3">
                  {loading ? (
                    <>
                      <Skeleton className="w-[78px] h-[40px] rounded-[7px]" />
                      <Skeleton className="w-[132px] h-[35px] rounded-full" />
                    </>
                  ) : (
                    <>
                      {data && (
                        <>
                          <Button>Level {data.user.level}</Button>
                          <div className="flex items-center py-2 px-3 bg-secondary rounded-full gap-2">
                            <Progress
                              value={data.user.progress}
                              className="w-[70px] max-sm:w-[50px] h-2 bg-black"
                            />
                            <p className="text-sm">{data.user.progress} %</p>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  <Avatar>
                    <AvatarImage src={session?.user.image || undefined} />
                    <AvatarFallback>
                      <Skeleton className="w-[35px] h-[35px] rounded-full" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-3 mt-5">
                <Link className="w-full" href="#">
                  <Button className="flex w-full">
                    <CgPokemon className="mr-2 h-6 w-6" /> Pokedex
                  </Button>
                </Link>{" "}
                <Link className="w-full" href="#">
                  <Button className="w-full" variant="outline">
                    Améliorer le pokemon
                  </Button>
                </Link>
                <Link href="#" className="w-full">
                  <Button className="w-full" variant="outline">
                    Magasin
                  </Button>
                </Link>
              </div>
            </div>
            <Button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full"
            >
              Déconnexion
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
