import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface Props {
  objectPokemon: any;
  urlDresseur: any;
  urlDresseurRandom: any;
  randomPokemon: any;
  countdown: boolean;
}

export const Componentfite = ({
  objectPokemon,
  urlDresseur,
  urlDresseurRandom,
  randomPokemon,
  countdown,
}: Props) => {
  const [test, setTest] = useState<boolean>(false);
  if (!countdown) {
    setTimeout(() => {
      setTest(true);
    }, 1000);
  }

  return (
    <div className="h-full w-full">
      {test ? (
        <div className="h-full w-full">
          <div className="relative h-[400px] flex items-center justify-between">
            <h1 className="absolute top-10 left-[50%] transform -translate-x-[50%] text-4xl ita font-medium text-gray-500">
              Battleground
            </h1>
            <div className="relative h-full w-full flex flex-col grow ">
              <div className="absolute w-full h-full flex justify-center items-center ">
                <Image
                  className="object-scale-down transform scale-x-[-1]"
                  fill
                  src={objectPokemon[0].image}
                  alt="pokemon"
                />
              </div>
              <div className="absolute w-full bottom-0 left-0 flex flex-col gap-2 lg:px-20 sm:p-10 p-5 degrade">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={urlDresseur} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-500 font-medium">Toi</p>
                </div>
                <Progress value={100} className="max-w-[150px]" />
              </div>
            </div>
            <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
              <div className="sm:p-5 p-3 sm:rounded-[20px] rounded-[10px] bg-secondary sm:text-xl text-sm lg:text-5xl text-gray-500">
                V/S
              </div>
            </div>
            <div className="relative h-full w-full flex flex-col">
              <div className="absolute w-full h-full flex justify-center items-center">
                <Image
                  className="object-scale-down"
                  fill
                  src={randomPokemon.image}
                  alt="pokemon"
                />
              </div>
              <div className="absolute bottom-0 right-0 flex flex-col items-end w-full gap-2 lg:px-20 sm:p-10 p-5 degrade">
                <div className="flex flex-row-reverse items-center gap-2">
                  <Avatar>
                    <AvatarImage src={urlDresseurRandom} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-400 font-medium">Player 1</p>
                </div>
                <Progress value={100} className="max-w-[150px]" />
              </div>
            </div>
          </div>
          <div className="h-[5%] flex justify-center items-center">
            <div className="w-full border-2"></div>
          </div>
          <div className=""></div>
        </div>
      ) : (
        <div className="h-full w-full justify-center items-center">
          {countdown ? (
            <div className="h-full w-full flex justify-center items-center">
              <CountdownCircleTimer
                isPlaying
                duration={3}
                colors={["#F7B801", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[3, 2, 1, 0]}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <h1 className="text-8xl font-bold italic ">FIGHT !</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
