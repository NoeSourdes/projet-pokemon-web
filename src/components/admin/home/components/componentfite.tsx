import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  objectPokemon: any;
  urlDresseur: any;
  urlDresseurRandom: any;
  randomPokemon: any;
}

export const Componentfite = ({
  objectPokemon,
  urlDresseur,
  urlDresseurRandom,
  randomPokemon,
}: Props) => {
  return (
    <div className="h-full w-full p-10 flex gap-10">
      <div className="w-full h-full  rounded-[20px] border">
        <div className="relative h-[50%] flex justify-center items-center">
          <Image
            className="object-scale-down"
            fill
            src={objectPokemon[0].image}
            alt="pokemon"
          />
        </div>
        <div className="h-[50%] p-5 w-full flex gap-5">
          <div className="w-[50%] flex justify-center items-center">
            <Image
              src={urlDresseur}
              alt="dresseur"
              width={300}
              height={300}
              className="rounded-[10px]"
            />
          </div>
          <div className="h-full border-l"></div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-5">
            <Button className="grow w-full text-xl">Attaque</Button>
            <Button className="grow w-full text-xl">Attaque Spécial</Button>
          </div>
        </div>
      </div>
      <div className="h-full border-l"></div>
      <div className="w-full h-fulls rounded-[20px] border">
        <div className="h-[50%] p-5 w-full flex gap-5">
          <div className="w-[50%] flex justify-center items-center">
            <Image
              src={urlDresseurRandom}
              alt="dresseur"
              width={300}
              height={300}
              className="rounded-[10px]"
            />
          </div>
          <div className="h-full border-l"></div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-5">
            <Button className="grow w-full text-xl">Attaque</Button>
            <Button className="grow w-full text-xl">Attaque Spécial</Button>
          </div>
        </div>{" "}
        <div className="relative h-[50%] flex justify-center items-center">
          <Image
            className="object-scale-down"
            fill
            src={randomPokemon?.image}
            alt="pokemon"
          />
        </div>
      </div>
    </div>
  );
};
