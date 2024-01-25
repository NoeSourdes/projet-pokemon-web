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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ComponentChoosePokemon } from "./choosePokemon";

export const CombatSolo = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [namePokemon, setNamePokemon] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<any[]>([]);

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

  const handleSearchPokemon = async (name: string) => {
    const response = await fetch(`api/pokemons/${name}`);
    const data = await response.json();
    if (response.ok) {
      setPokemonData([data]);
    }
  };

  useEffect(() => {
    if (namePokemon) {
      handleSearchPokemon(namePokemon);
    }
  }, [namePokemon]);

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

  const handleCombat = (Pokemon: any, urlDresseur: string) => {
    if (!Pokemon[0] || !urlDresseur) {
      toast.error("Vous devez choisir un Pokemon");
    } else {
      const pokemonString = JSON.stringify(Pokemon);
      const queryString = `Pokemon=${pokemonString}&urlDresseur=${urlDresseur}`;
      router.push(`/admin/combat?${queryString}`);
    }
  };

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
      <div className=" rounded-[10px] bg-secondary grow flex flex-col space-y-2 justify-center items-center p-3">
        <p className="font-medium text-center">Combattre avec un Pokemon</p>
        {namePokemon && (
          <div className="cursor-pointer pokemon-card rounded-lg w-[200px] flex justify-center items-center">
            <Image
              className="rounded-[10px] bg-secondary min-w-[100px] min-h-[100px]"
              src={
                pokemonData?.[0]?.image
                  ? pokemonData[0].image
                  : "/img/pokeball.png"
              }
              alt="profile picture"
              width={100}
              height={100}
            />
            <ComponentChoosePokemon
              value="Changer de Pokemon"
              setPokemonName={setNamePokemon}
              pokedex={data?.user?.pokedex}
              changePokemon={true}
            />
          </div>
        )}
        {!namePokemon && (
          <ComponentChoosePokemon
            value="Choisir son Pokemon"
            setPokemonName={setNamePokemon}
            pokedex={data?.user?.pokedex}
          />
        )}
      </div>
      <div className=" rounded-[10px] bg-secondary grow flex justify-center items-center p-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>COMBATTRE !</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {" "}
                êtes-vous sûre de vouloir commencer un combat ?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Vous allez combattre avec votre Pokemon
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleCombat(pokemonData, dresser)}
              >
                COMBATTRE !
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
