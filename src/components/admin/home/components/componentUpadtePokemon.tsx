import { CardPokemonSpecification } from "@/components/admin/home/components/cardPokemonSpecification";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaLock } from "react-icons/fa";

interface Props {
  data: any;
  evolution: any;
  rangPokemon: any;
}

export const ComponentUpadtePokemon = ({
  data,
  evolution,
  rangPokemon,
}: Props) => {
  const [dataPokemon, setDataPokemon] = React.useState<any>();
  useEffect(() => {
    if (evolution) {
      const getPokemon = async () => {
        const response = await fetch(`api/pokemons/${evolution}`);
        if (response.ok) {
          const dataPokemon = await response.json();
          setDataPokemon(dataPokemon);
        }
      };
      getPokemon();
    }
  }, [evolution]);
  let rang: number;
  switch (rangPokemon) {
    case "first":
      rang = 5;
      break;
    case "second":
      rang = 10;
      break;
    default:
      rang = 0;
  }
  return evolution === "Le pokemon est au maximum de son évolution" ? (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl text-primary font-bold mt-3">
        Le pokemon est au maximum de son évolution
      </h1>
      <Link href="#">
        <Button className="mt-5">Acheter d&apos;autres Pokemon</Button>
      </Link>
    </div>
  ) : (
    <div className="relative w-[300px] h-[300px] border rounded-[20px] flex justify-center mt-5 flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-primary text-2xl font-bold">
          {dataPokemon?.name || ""}
        </h1>
        <Image
          className="object-scale-down mb-2"
          src={dataPokemon?.image || ""}
          alt={dataPokemon?.name || ""}
          width={160}
          height={160}
        />
        <Dialog>
          <DialogTrigger>
            <Button className="bg-primary">Acheter</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Spécifications</DialogTitle>
              <DialogDescription>
                <CardPokemonSpecification
                  data={data}
                  pokemon={dataPokemon?.nameFrench}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {data?.user?.level < rang && (
        <div className="absolute inset-0 bg-black rounded-[20px] opacity-75 flex justify-center items-center">
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <FaLock className="w-10 h-10" />
            <p className="text-primary text-center text-lg font-bold z-10">
              Niveau {rang} requis
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
