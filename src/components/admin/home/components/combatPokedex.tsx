import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { VoirPokedex } from "./voirPokedex";

export const CombatPokedex = () => {
  const [data, setData] = useState<any>();

  const getProfile = async () => {
    const response = await fetch("/api/user/get-profile-admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  let dresser: string;

  switch (data?.personnageName) {
    case "Sacha":
      dresser = "/img/sacha.png";
      break;
    case "Ondine":
      dresser = "/img/ondine.png";
      break;
    case "Pierre":
      dresser = "/img/pierre.png";
      break;
    default:
      dresser = "/img/sacha.png";
  }

  return (
    <div className="h-full w-full border rounded-[20px] flex justify-center flex-wrap p-4 gap-4">
      <div className="">
        <Image
          className="rounded-[10px] bg-secondary min-w-[100px] min-h-[100px]"
          src={dresser}
          alt="profile picture"
          width={157}
          height={157}
        />
      </div>
      <div className=" rounded-[10px] bg-secondary grow flex flex-col space-y-5 justify-center items-center p-3 ">
        <p className="font-medium text-center">Combattre avec son Pokedex</p>
        <VoirPokedex pokedex={data?.user.pokedex} value="Voir mon Pokedex" />
      </div>
      <div className=" rounded-[10px] bg-secondary grow flex justify-center items-center p-3">
        <Button>COMBAT !!</Button>
      </div>
    </div>
  );
};
