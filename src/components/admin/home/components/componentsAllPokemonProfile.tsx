import React, { useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

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

export const ComponentsAllPokemonProfile = ({ data, pokedex }: Props) => {
  const [pokemonData, setPokemonData] = React.useState<any[]>([]);
  const pokemons = data?.user?.allPokemon || [];
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPokemon = async (pokemon: string) => {
      const response = await fetch(`/api/pokemons/${pokemon}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData((prevData) => {
          if (!prevData.find((p) => p.name === data.name)) {
            return [...prevData, data];
          } else {
            return prevData;
          }
        });
      }
    };
    pokemons.forEach((pokemon: string) => fetchPokemon(pokemon));
  }, [pokemons]);

  const addToPokedex = async (pokemon: string, userId: string) => {
    const response = await fetch("/api/user/add-pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemon, userId }),
    });
    if (response.ok) {
      window.location.reload();
      setPokemonData((prevData) => prevData.filter((p) => p.name !== pokemon));
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Tous mes Pokemon</h1>
      <div className="relative border w-full rounded-[20px] flex flex-wrap gap-4 p-4">
        {pokemonData.map((pokemon: string, index: number) => (
          <div
            className={`pokemon-card border rounded-[10px] cursor-pointer ${
              pokedex ? "max-w-[250px] min-w-[120px] grow" : "w-[120px]"
            } h-[160px] bg-secondary flex flex-col justify-center items-center`}
            key={index}
          >
            <h1 className="text-primary text-lg font-medium">
              {pokemonData[index]?.nameFrench || ""}
            </h1>
            <Image
              src={pokemonData[index]?.image}
              alt={pokemonData[index]?.name}
              width={75}
              height={75}
            />
            <Badge
              className={`text-sm ${getTypeColor(
                pokemonData[index]?.typeFrench
              )}`}
            >
              {pokemonData[index]?.typeFrench}
            </Badge>
            <button
              onClick={() => {
                const userId = session?.user?.id;
                if (userId) {
                  addToPokedex(pokemonData[index].name, userId);
                } else {
                  console.error("User ID is undefined");
                }
              }}
              className="use-button bg-primary py-2 px-3 rounded text-black font-medium"
            >
              Utiliser
            </button>
          </div>
        ))}
        {!pokemonData.length && (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-2xl font-bold">Aucun Pokemon</h1>
          </div>
        )}
        <Link href="/admin/magasin">
          <Button className="mt-5 absolute top-0 right-5">Magasin</Button>
        </Link>
      </div>
    </div>
  );
};
