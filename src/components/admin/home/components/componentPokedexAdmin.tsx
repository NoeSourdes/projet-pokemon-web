import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface Props {
  data: any;
  pokedex?: boolean;
}
function getTypeColor(type: string) {
  switch (type) {
    case "normal":
      return "bg-gray-500";
    case "feu":
      return "bg-red-500";
    case "eau":
      return "bg-blue-500";
    case "électrik":
      return "bg-yellow-500";
    case "plante":
      return "bg-green-500";
    case "glace":
      return "bg-lightblue-500";
    case "combat":
      return "bg-brown-500";
    case "poison":
      return "bg-purple-500";
    case "sol":
      return "bg-orange-500";
    case "vol":
      return "bg-indigo-500";
    case "psy":
      return "bg-pink-500";
    case "insecte":
      return "bg-lime-500";
    case "roche":
      return "bg-darkgray-500";
    case "spectre":
      return "bg-deepPurple-500";
    case "dragon":
      return "bg-teal-500";
    case "ténèbres":
      return "bg-black-500";
    case "acier":
      return "bg-silver-500";
    case "fée":
      return "bg-rose-500";
    default:
      return "bg-gray-500";
  }
}

export const ComponentPokedexAdmin = ({ data, pokedex }: Props) => {
  const [pokemonData, setPokemonData] = React.useState<any[]>([]);
  const pokemons = data?.user.pokedex || [];

  useEffect(() => {
    const fetchPokemon = async (pokemon: string) => {
      const response = await fetch(`/api/pokemons/${pokemon}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData((prevData) => [...prevData, data]);
      }
    };
    pokemons && pokemons.forEach((pokemon: string) => fetchPokemon(pokemon));
  }, [pokemons]);

  const displayPokemons = [
    ...pokemons,
    ...Array(Math.max(0, 5 - pokemons.length)).fill(null),
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Votre Pokedex</h1>
      <div className="border w-full rounded-[20px] flex flex-wrap gap-4 p-4">
        {displayPokemons.map((pokemon: string, index: number) =>
          pokemon ? (
            <div
              className={`border rounded-[10px] grow p-2 ${
                pokedex ? "max-w-[250px] min-w-[120px] grow" : "w-[120px]"
              } h-[160px] bg-secondary flex flex-col justify-center items-center`}
              key={index}
            >
              <h1 className="text-primary text-lg font-medium">
                {pokemonData[index]?.nameFrench || ""}
              </h1>
              <Image
                src={
                  pokemonData[index]?.image
                    ? pokemonData[index].image
                    : "/img/pokeball.png"
                }
                alt={pokemonData[index]?.name ? pokemonData[index].name : ""}
                width={80}
                height={80}
              />
              <Badge
                className={`text-sm ${getTypeColor(
                  pokemonData[index]?.typeFrench
                )}`}
              >
                {pokemonData[index]?.typeFrench}
              </Badge>
            </div>
          ) : (
            <div
              key={index}
              className={`border rounded-[10px] grow p-2 ${
                pokedex ? "min-w-[120px] grow" : "w-[120px]"
              } h-[160px] bg-secondary flex flex-col justify-around items-center`}
            >
              {!pokedex ? (
                <Link href="/admin/pokedex">
                  <Button
                    variant="outline"
                    className="bg-secondary border-primary hover:bg-primary hover:text-black"
                  >
                    Ajouter
                  </Button>
                </Link>
              ) : (
                <div>Vide</div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
