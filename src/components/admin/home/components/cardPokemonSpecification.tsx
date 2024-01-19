import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  pokemon: any;
  data: any;
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

export const CardPokemonSpecification = ({ pokemon }: Props) => {
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
  const flexContainerStyles = "flex w-full justify-between items-center gap-3";
  const [pokemonData, setPokemonData] = React.useState<any>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`/api/pokemons/${pokemon}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      }
    };
    fetchPokemon();
  }, [pokemon]);

  return (
    <div className="flex flex-col justify-between items-center space-y-5 w-full">
      <div className="space-y-2 flex flex-col justify-center items-center">
        <h1 className="text-center text-xl font-bold text-white">
          {pokemonData.nameFrench}
        </h1>
        <Badge className={`text-sm ${getTypeColor(pokemonData.typeFrench)}`}>
          {pokemonData.typeFrench}
        </Badge>{" "}
      </div>
      <div className="flex justify-center items-center bg-secondary rounded-full p-5">
        <img
          src={pokemonData.image}
          alt={pokemonData.name}
          className="w-[200px] h-[200px]"
        />
      </div>

      <div className="space-y-5 w-full">
        <h1 className="text-xl font-bold text-center">Statistiques</h1>
        <div className="text-gray-500">
          <div className={flexContainerStyles}>
            <StatBlock label="HP" value={pokemonData?.hp} />
            <StatBlock label="DEF" value={pokemonData?.defense} />
            <StatBlock label="VIT" value={pokemonData?.speed} />
          </div>
          <div className={`${flexContainerStyles} mt-3`}>
            <StatBlock label="ATT" value={pokemonData?.attack} />
            <StatBlock label="ATQ" value={pokemonData?.special_attack} />
            <StatBlock label="DEF" value={pokemonData?.special_defense} />
          </div>
        </div>
      </div>
    </div>
  );
};
