/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect } from "react";
import { VoirPokedex } from "./voirPokedex";

interface Props {
  objectPokemon: any;
  urlDresseur: any;
  urlDresseurRandom: any;
  setUrlDresseurRandom: any;
  randomPokemon: any;
  setRandomPokemon: any;
  setCombat: any;
}

export const Combat = ({
  urlDresseur,
  objectPokemon,
  urlDresseurRandom,
  setUrlDresseurRandom,
  randomPokemon,
  setRandomPokemon,
  setCombat,
}: Props) => {
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

  useEffect(() => {
    setTimeout(() => {
      const dresseur = () => {
        const randomNumber = Math.floor(Math.random() * 2);
        let randomDresseur: string;

        switch (randomNumber) {
          case 0:
            randomDresseur = "/img/ondine.png";
            break;
          case 1:
            randomDresseur = "/img/pierre.png";
            break;
          default:
            randomDresseur = "/img/pierre.png";
        }
        setUrlDresseurRandom(randomDresseur);
      };
      dresseur();
    }, 3000);
  }, []);
  const fetchPokemons = async () => {
    try {
      const response = await fetch("/api/pokemons");
      if (response.ok) {
        const data = await response.json();
        const pokemons = data.pokemons;
        const filteredPokemons = pokemons.filter(
          (pokemon: Pokemon) => pokemon.evolution_stage === "first"
        );
        const randomNumber = Math.floor(
          Math.random() * filteredPokemons.length
        );
        setRandomPokemon(filteredPokemons[randomNumber]);
      } else {
        console.error("Failed to fetch pokemons");
      }
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleCombat = () => {
    setCombat(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="border rounded-[20px] p-5">
            <Image
              className="rounded-[10px]"
              src={urlDresseur ? urlDresseur : ""}
              alt="dresseur"
              width={250}
              height={250}
            />
          </div>
          <div>
            {urlDresseurRandom && (
              <VoirPokedex
                pokedex={[objectPokemon[0].name]}
                value="Voir le Pokemon"
              />
            )}
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold italic">VS</h1>
        </div>
        {urlDresseurRandom ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="border rounded-[20px] p-5">
              <Image
                className="rounded-[10px]"
                src={urlDresseurRandom ? urlDresseurRandom : ""}
                alt="dresseur"
                width={250}
                height={250}
              />
            </div>
            <div>
              {urlDresseurRandom && (
                <VoirPokedex
                  pokedex={[randomPokemon?.name]}
                  value="Voir le Pokemon"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="border rounded-[20px] p-5">
            <Skeleton className="rounded-[10px] w-[250px] h-[250px]" />
          </div>
        )}
      </div>
      {urlDresseurRandom && <Button onClick={handleCombat}>COMBATTRE !</Button>}
    </div>
  );
};
