"use client";

import { Combat } from "@/components/admin/home/components/combat";
import { Componentfite } from "@/components/admin/home/components/componentfite";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  interface Pokemon {
    id: number;
    name: string;
    nameFrench: string;
    image: string;
    hp: number;
    defense: number;
    speed: number;
    attack: number;
    special_attack: number;
    special_defense: number;
    type: string;
    typeFrench: string;
    pokemon_couple: string[];
    evolution_stage: string;
    price: number;
  }

  const searchParams = useSearchParams();
  const Pokemon = searchParams.get("Pokemon");
  const objectPokemon = JSON.parse(Pokemon || "{}");
  const urlDresseur = searchParams.get("urlDresseur");
  const [urlDresseurRandom, setUrlDresseurRandom] = useState<string>("");
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
  const [combat, setCombat] = useState<boolean>(false);
  return (
    <div className="h-full w-full flex justify-center items-center">
      {combat ? (
        <Componentfite
          objectPokemon={objectPokemon}
          urlDresseur={urlDresseur}
          urlDresseurRandom={urlDresseurRandom}
          randomPokemon={randomPokemon}
        />
      ) : (
        <Combat
          objectPokemon={objectPokemon}
          urlDresseur={urlDresseur}
          urlDresseurRandom={urlDresseurRandom}
          setUrlDresseurRandom={setUrlDresseurRandom}
          randomPokemon={randomPokemon}
          setRandomPokemon={setRandomPokemon}
          setCombat={setCombat}
        />
      )}
    </div>
  );
}
