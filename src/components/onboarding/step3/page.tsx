import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

interface Props {
  pokemonName: string | null;
  personnageName: string | null;
}

export default function Step3({ pokemonName, personnageName }: Props) {
  const { width, height } = useWindowSize();

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const url = `api/pokemons/${pokemonName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="lg:h-screen max-lg:mt-40 flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold text-center">
        Votre inscription est terminé
      </h1>
      <div className="flex justify-around items-center gap-5">
        <div>
          {data && (
            <Image
              className={`${
                pokemonName === "Bulbasaur"
                  ? "bg-[#78C850] neumorphism-bulbizarre"
                  : pokemonName === "Charmander"
                  ? "bg-[#F08030] neumorphism-salameche"
                  : "bg-[#6890F0] neumorphism-carapuce"
              } rounded-[15px]`}
              src={data.image}
              alt={data.name}
              width={200}
              height={200}
            />
          )}
        </div>
        <div>
          {personnageName === "Sacha" ? (
            <Image
              className="rounded-[15px]"
              src="/img/sacha.png"
              alt="Sacha"
              width={200}
              height={200}
            />
          ) : (
            <Image
              className="rounded-[15px]"
              src="/img/ondine.png"
              alt="Ondine"
              width={200}
              height={200}
            />
          )}
        </div>
      </div>
      <Button>
        <Link href="/admin">Aller au tableau de bord</Link>
      </Button>
      <Confetti width={width} height={height} />
    </div>
  );
}
