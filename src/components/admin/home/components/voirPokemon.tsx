import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
  pokedex: any;
  value: string;
  changePokemon?: boolean;
}

export const VoirPokedex = ({ pokedex, value, changePokemon }: Props) => {
  const [pokemonData, setPokemonData] = React.useState<any[]>([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      if (Array.isArray(pokedex)) {
        const promises = pokedex.map((pokemon: string) =>
          fetch(`api/pokemons/${pokemon}`).then((response) => response.json())
        );
        const results = await Promise.all(promises);
        setPokemonData(results);
      }
    };

    fetchPokemons();
  }, [pokedex]);

  return (
    <Drawer>
      <DrawerTrigger
        className={`bg-primary rounded-[7px] text-black py-2 px-3 text-sm font-medium ${
          changePokemon ? "use-button" : ""
        }`}
      >
        {value}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{value}</DrawerTitle>
          <DrawerDescription className="text-center">
            Vous pouvez changer de Pokemon à tout moment
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex justify-center">
            {pokemonData.map((pokemon, index) => (
              <DrawerClose key={index} className="flex mb-3">
                <div className="border flex mx-3 rounded-[20px] cursor-pointer">
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                  />
                </div>
              </DrawerClose>
            ))}
          </div>
          <DrawerClose>
            <Link href="/admin/magasin">
              <Button className="mt-5">Acheter d&apos;autres Pokemon</Button>
            </Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
