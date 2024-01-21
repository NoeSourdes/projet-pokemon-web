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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const personnages = [
  {
    name: "Sacha",
    type: "Garçon",
    img: "/img/sacha.png",
  },
  {
    name: "Ondine",
    type: "Fille",
    img: "/img/ondine.png",
  },
  {
    name: "Pierre",
    type: "Garçon",
    img: "/img/pierre.png",
  },
];

interface PersonnageProps {
  setPersonnageName: React.Dispatch<React.SetStateAction<string | null>>;
  pokemonName: string | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Step2({
  setStep,
  setPersonnageName,
  pokemonName,
}: PersonnageProps) {
  const { data: session, update } = useSession();
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleUpadteProfile = async (personage: string) => {
    const url = `api/user/update-profile-onboarding`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personnage: personage,
        pokemon: pokemonName,
        id: session?.user?.id,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  const handleStatus = async () => {
    const url = `api/user/update-status`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: session?.user?.id,
      }),
    });
    if (response.ok) {
      await update({
        createNow: true,
      });
    } else {
      toast.error("Une erreur est survenue");
    }
  };

  const handlePersonnage = async (personnage: string) => {
    setLoading(true);
    setPersonnageName(personnage);
    await handleUpadteProfile(personnage);
    await handleStatus();
    setLoading(false);
    setStep(2);
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
          Choisissez entre ces 2 Personnages
        </h1>
        <Image
          src="/img/pokedex-logo.png"
          alt="Pokedex"
          width={70}
          height={70}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {personnages.map((personnage, index) => (
          <Card key={index} className="w-[380px]">
            <CardHeader>
              <CardTitle className="text-center">{personnage.name}</CardTitle>
              <CardDescription className="text-center">
                {personnage.type}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-center items-center">
                <Image
                  className={`rounded-[20px]`}
                  src={personnage.img}
                  alt={personnage.name}
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <AlertDialog>
                  <AlertDialogTrigger className="w-full">
                    <Button disabled={loading} className="w-full">
                      {loading && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Choisir ce personnages
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {personnage.name} est votre personnage
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                      Êtes-vous sûr de vouloir choisir {personnage.name} comme
                      personnage ?
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Non</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handlePersonnage(personnage.name)}
                      >
                        Terminer
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
