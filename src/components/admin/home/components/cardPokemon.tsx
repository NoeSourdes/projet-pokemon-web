import Image from "next/image";
import React, { useEffect } from "react";

import { ComponentChangerPokemon } from "@/components/admin/home/components/componentChangerPokemon";
import { ComponentUpadtePokemon } from "@/components/admin/home/components/componentUpadtePokemon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  loading: boolean;
  data: any;
}

export const CardPokemon = ({ data, loading }: Props) => {
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
  const flexContainerStyles =
    "flex justify-between items-center gap-3 max-sm:text-sm";
  const [dataPokemon, setDataPokemon] = React.useState<any>();
  const [pokedex, setPokedex] = React.useState<any>();
  const [pokemonName, setPokemonName] = React.useState(data?.user?.pokedex[0]);

  React.useEffect(() => {
    setPokemonName(data?.user?.pokedex[0]);
  }, [data]);
  useEffect(() => {
    if (pokemonName) {
      const getPokemon = async () => {
        const response = await fetch(`api/pokemons/${pokemonName}`);
        if (response.ok) {
          const dataPokemon = await response.json();
          setDataPokemon(dataPokemon);
          setPokedex(data.user?.pokedex);
        }
      };
      getPokemon();
    }
  }, [pokemonName, data?.user?.pokedex]);
  const rangPokemon = dataPokemon?.evolution_stage;
  let evolution = "";
  switch (rangPokemon) {
    case "first":
      evolution = dataPokemon?.pokemon_couple[1];
      break;
    case "second":
      evolution = dataPokemon?.pokemon_couple[2];
      break;
    case "third":
      evolution = "Le pokemon est au maximum de son évolution";
      break;
  }

  return (
    <div className="h-full w-full border rounded-[20px] p-5 flex flex-col justify-between max-w-[700px] space-y-5">
      <div className="flex justify-end">
        <ComponentChangerPokemon
          pokedex={pokedex}
          setPokemonName={setPokemonName}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center space-y-5">
        <div className="text-center">
          {loading ? (
            <div className="flex flex-col justify-center items-center space-y-3">
              <Skeleton className="w-[200px] h-[35px] rounded-full" />
              <Skeleton className="w-[50px] h-[20px] rounded-full" />
            </div>
          ) : (
            <>
              <h1 className="text-center text-3xl font-bold">
                {dataPokemon?.name}
              </h1>
              <p className="text-lg text-gray-500">{dataPokemon?.typeFrench}</p>
            </>
          )}
        </div>
        {loading ? (
          <Skeleton className="w-[245px] h-[245px] rounded-full" />
        ) : (
          <div className="">
            <Image
              className="bg-secondary rounded-full"
              src={dataPokemon?.image ? dataPokemon.image : "/img/pokeball.png"}
              alt={dataPokemon?.name || "le nom du pokemon"}
              width={245}
              height={245}
            />
          </div>
        )}
      </div>
      <div className="space-y-5">
        <h1 className="text-xl font-bold text-center">Statistiques</h1>
        <div className="text-gray-500">
          {loading ? (
            <>
              <div className={flexContainerStyles}>
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
              </div>
              <div className={`${flexContainerStyles} mt-3`}>
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
                <Skeleton className="w-[150px] h-[55px] rounded-[7px]" />
              </div>
            </>
          ) : (
            <>
              <div className={flexContainerStyles}>
                <StatBlock label="HP" value={dataPokemon?.hp} />
                <StatBlock label="DEF" value={dataPokemon?.defense} />
                <StatBlock label="VIT" value={dataPokemon?.speed} />
              </div>
              <div className={`${flexContainerStyles} mt-3`}>
                <StatBlock label="ATT" value={dataPokemon?.attack} />
                <StatBlock label="ATQ" value={dataPokemon?.special_attack} />
                <StatBlock label="DEF" value={dataPokemon?.special_defense} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Dialog>
          {loading ? (
            <div className="border rounded-[7px] px-3 py-2">
              Acheter l&apos;évolution
            </div>
          ) : (
            <DialogTrigger className="border rounded-[7px] px-3 py-2 text-sm font-medium">
              Acheter l&apos;évolution
            </DialogTrigger>
          )}
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Passer à l&apos;évolution supérieur</DialogTitle>
              <DialogDescription className="flex justify-center items-center">
                <ComponentUpadtePokemon
                  data={data}
                  evolution={evolution}
                  rangPokemon={rangPokemon}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
