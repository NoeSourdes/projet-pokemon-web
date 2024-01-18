import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Step1Props {
  setPokemonName: React.Dispatch<React.SetStateAction<string | null>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const pokemons = [
  {
    name: "Bulbizarre",
    name_en: "Bulbasaur",
    type: "Plante",
    img: "/img/bulbizarre.png",
    hp: 45,
    defense: 49,
    speed: 45,
    attack: 49,
    special_attack: 65,
    special_defense: 65,
  },
  {
    name: "Salamèche",
    name_en: "Charmander",
    type: "Feu",
    img: "/img/salamèche.png",
    hp: 39,
    defense: 43,
    speed: 65,
    attack: 52,
    special_attack: 60,
    special_defense: 50,
  },
  {
    name: "Carapuce",
    name_en: "Squirtle",
    type: "Eau",
    img: "/img/carapuce.png",
    hp: 44,
    defense: 65,
    speed: 43,
    attack: 48,
    special_attack: 50,
    special_defense: 64,
  },
];

interface StatBlockProps {
  label: string;
  value: number;
}

const StatBlock: React.FC<StatBlockProps> = ({ label, value }) => (
  <div className="py-2 w-full h-14 rounded-[7px] bg-[#141414] flex justify-center items-center">
    {label} :&nbsp;
    <span className="font-bold text-primary">{value}</span>
  </div>
);
const flexContainerStyles = "flex justify-between items-center gap-2";

type CardProps = React.ComponentProps<typeof Card>;

export const Step1: React.FC<Step1Props & CardProps> = ({
  setPokemonName,
  setStep,
  ...rest
}) => {
  const handleClick = (pokemonName: string) => {
    setPokemonName(pokemonName);
    setStep(1);
  };

  return (
    <div className="realtive lg:h-screen flex flex-col justify-center items-center gap-10 py-10 px-5">
      <div className="flex justify-center items-center space-x-5">
        <Image
          src="/img/pokedex-logo.png"
          alt="Pokedex"
          width={70}
          height={70}
        />
        <h1 className="font-bold text-2xl text-center">
          {" "}
          Choisissez entre ces 3 Pokémons
        </h1>
        <Image
          src="/img/pokedex-logo.png"
          alt="Pokedex"
          width={70}
          height={70}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {pokemons.map((pokemon, index) => (
          <Card key={index} className="w-[380px]" {...rest}>
            <CardHeader>
              <CardTitle>{pokemon.name}</CardTitle>
              <CardDescription>{pokemon.type}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-center items-center">
                <Image
                  className={`rounded-[15px] ${
                    pokemon.name === "Bulbizarre"
                      ? "bg-[#78C850] neumorphism-bulbizarre"
                      : pokemon.name === "Salamèche"
                      ? "bg-[#F08030] neumorphism-salameche"
                      : "bg-[#6890F0] neumorphism-carapuce"
                  }`}
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="text-gray-500">
                  <div className={flexContainerStyles}>
                    <StatBlock label="HP" value={pokemon.hp} />
                    <StatBlock label="DEF" value={pokemon.defense} />
                    <StatBlock label="VIT" value={pokemon.speed} />
                  </div>
                  <div className={`${flexContainerStyles} mt-2`}>
                    <StatBlock label="ATT" value={pokemon.attack} />
                    <StatBlock label="ATQ" value={pokemon.special_attack} />
                    <StatBlock label="DEF" value={pokemon.special_defense} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full">Choisir ce Pokémon</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Choix du Pokémon</AlertDialogTitle>
                    <AlertDialogDescription>
                      Êtes-vous sûr de vouloir choisir ce pokemon ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Non</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleClick(pokemon.name_en)}
                    >
                      Oui
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
