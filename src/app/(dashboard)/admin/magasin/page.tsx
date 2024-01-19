"use client";

import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CardPokemonSpecification } from "@/components/admin/home/components/cardPokemonSpecification";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [search, setSearch] = React.useState<string>("");
  const [pokemonData, setPokemonData] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/api/pokemons`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      }
      setIsLoading(false);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        "http://localhost:3000/api/user/get-profile-admin",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    };

    getProfile();
  }, []);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function getTypeColor(type: string) {
    switch (type.toLowerCase()) {
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
  const { data: session } = useSession();

  const handleRefresh = async () => {
    window.location.reload();
  };

  const handleAchat = async (pokemon: string, price: number) => {
    if (data?.user.money < price) {
      toast.error("Vous n'avez pas assez d'argent");
    } else {
      const response = await fetch("/api/user/buy-pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pokemon, price, id: session?.user?.id }),
      });
      if (response.ok) {
        const data = await response.json();
        await handleRefresh();
        toast.success(data.message);
      }
    }
  };

  return (
    <div className="w-screen pb-10">
      <div className="border-b w-full max-lg:p-5 px-10 py-3">
        <h1 className="text-2xl font-bold w-full">Magasin :</h1>
      </div>
      <div className="max-lg:p-5 px-10 mt-5 space-y-10">
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input
            type="text"
            placeholder="Trouve ton Pokemon"
            onChange={handleSearchChange}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[50%] border-b"></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {isLoading
            ? Array(30)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="w-[320px] h-[320px]" />
                ))
            : pokemonData?.pokemons
                .filter(
                  (pokemon: any) =>
                    pokemon.nameFrench
                      .toLowerCase()
                      .includes(search.toLowerCase()) &&
                    !data?.user.allPokemon?.includes(pokemon.name) &&
                    !data?.user.pokedex?.includes(pokemon.name),
                )
                .map((pokemon: any) => (
                  <div
                    key={pokemon.id}
                    className="relative text-center border rounded-[10px] h-[320px] min-w-[320px] max-lg:
               flex justify-center items-center flex-col space-y-2"
                  >
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="mx-auto rounded-md"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <p className="absolute top-2 left-2 border text-white text-sm font-medium py-1 px-2 rounded">
                      {pokemon.price} €
                    </p>
                    <p className="font-bold">{pokemon.nameFrench}</p>
                    <Badge
                      className={`text-sm ${getTypeColor(pokemon.typeFrench)}`}
                    >
                      {pokemon.typeFrench}
                    </Badge>{" "}
                    <Dialog>
                      <DialogTrigger>
                        <Button className="bg-primary">
                          Voir les spécifications
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Spécifications</DialogTitle>
                          <DialogDescription>
                            <CardPokemonSpecification
                              data={data}
                              pokemon={pokemon.nameFrench}
                            />
                            <div className="flex justify-center items-center mt-7">
                              {(data?.user.level < 5 &&
                                pokemon.evolution_stage === "second") ||
                              (data?.user.level < 10 &&
                                pokemon.evolution_stage === "third") ? (
                                <div className="border py-2 px-3 rounded-[7px]">
                                  {pokemon.evolution_stage === "second"
                                    ? "Niveau 5 requis pour l'acheter"
                                    : "Niveau 10 requis pour l'acheter"}
                                </div>
                              ) : (
                                <DialogClose>
                                  <Button
                                    onClick={() =>
                                      handleAchat(pokemon.name, pokemon.price)
                                    }
                                    className="bg-primary"
                                  >
                                    Acheter
                                  </Button>
                                </DialogClose>
                              )}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
}
