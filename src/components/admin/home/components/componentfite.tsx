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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Confetti from "react-dom-confetti";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const dataSentences = [
  "C'est à toi de jouer, choisi une attaque",
  "C'est à ton tour, choisi une attaque",
  "C'est au tour de l'adversaire",
  "tu a choisi l'attaque",
  "tu a choisi l'attaque spécial",
  "tu a choisi de te soigner",
  "l'adversaire a choisi l'attaque",
  "l'adversaire a choisi l'attaque spécial",
  "l'adversaire a choisi de se soigner",
  "Tu as gagné",
  "Tu as perdu",
  "Ton pokemon est KO",
  "Le pokemon adverse est KO",
];

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

  const router = useRouter();
  const finishFight = () => {
    router.push("/admin");
  };

  // getion des attaques
  const [pvYourPokemon, setPvYourPokemon] = useState<number>(100);
  const [pvRandomPokemon, setPvRandomPokemon] = useState<number>(100);
  const [soinYourPokemon, setSoinYourPokemon] = useState<number>(2);
  const [attackSpecialYourPokemon, setAttackSpecialYourPokemon] =
    useState<number>(2);
  const [attackSpecialRandomPokemon, setAttackSpecialRandomPokemon] =
    useState<number>(2);
  const [soinRandomPokemon, setSoinRandomPokemon] = useState<number>(2);
  const [turn, setTurn] = useState<"player1" | "player2">("player1");
  const [sentance, setSentance] = useState<string>(dataSentences[0]);
  const [botton, setBotton] = useState<boolean>(false);
  const [disableSpecialAttackButton, setDisableSpecialAttackButton] =
    useState<boolean>(false);
  const [disableHealButton, setDisableHealButton] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
  const [isExploding, setIsExploding] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExploding(true);
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (turn === "player2") {
      setTimeout(aiTurn, 1000);
    }
  }, [turn]);

  const aiTurn = () => {
    if (pvYourPokemon <= 0) {
      setPopup(true);
      return;
    } else if (pvRandomPokemon <= 0) {
      setPopup(true);
      return;
    }
    let typeAttaque = "normal";
    if (attackSpecialRandomPokemon > 0 && soinRandomPokemon > 0) {
      const randomAttack = Math.floor(Math.random() * 3);
      typeAttaque = ["normal", "special", "soin"][randomAttack];
    }
    const attack = [10, 20, -20][
      ["normal", "special", "soin"].indexOf(typeAttaque)
    ];

    combat(attack, typeAttaque);
    if (pvYourPokemon <= 0) {
      setPopup(true);
      return;
    } else if (pvRandomPokemon <= 0) {
      setPopup(true);
      return;
    }
    setBotton(false);
  };

  const combat = (attack: number, typeAttaque: string) => {
    setBotton(true);
    const isPlayer1Turn = turn === "player1";
    const nextPlayer = isPlayer1Turn ? "player2" : "player1";
    const attackSpecial = isPlayer1Turn
      ? attackSpecialYourPokemon
      : attackSpecialRandomPokemon;
    const soin = isPlayer1Turn ? soinYourPokemon : soinRandomPokemon;
    const setPv = isPlayer1Turn ? setPvRandomPokemon : setPvYourPokemon;
    const setPvHeal = isPlayer1Turn ? setPvYourPokemon : setPvRandomPokemon;
    const setAttackSpecial = isPlayer1Turn
      ? setAttackSpecialYourPokemon
      : setAttackSpecialRandomPokemon;
    const setSoin = isPlayer1Turn ? setSoinYourPokemon : setSoinRandomPokemon;

    if (typeAttaque === "normal") {
      setPv((prevPv) => prevPv - attack);
      setSentance(dataSentences[isPlayer1Turn ? 3 : 6]);
      if (pvYourPokemon <= 0) {
        setPopup(true);
        return;
      } else if (pvRandomPokemon <= 0) {
        setPopup(true);
        return;
      }
    } else if (typeAttaque === "special" && attackSpecial > 0) {
      setPv((prevPv) => prevPv - attack);
      setAttackSpecial(attackSpecial - 1);
      setSentance(dataSentences[isPlayer1Turn ? 4 : 7]);
      if (pvYourPokemon <= 0) {
        setPopup(true);
        return;
      } else if (pvRandomPokemon <= 0) {
        setPopup(true);
        return;
      }
    } else if (typeAttaque === "soin" && soin > 0) {
      setPvHeal((prevPv) => prevPv - attack);
      setSoin(soin - 1);
      setSentance(dataSentences[isPlayer1Turn ? 5 : 8]);
      if (pvYourPokemon <= 0) {
        setPopup(true);
        return;
      } else if (pvRandomPokemon <= 0) {
        setPopup(true);
        return;
      }
    }

    setTurn(nextPlayer);
    setTimeout(() => {
      setSentance(dataSentences[isPlayer1Turn ? 2 : 1]);
    }, 1000);
    setDisableSpecialAttackButton(attackSpecialYourPokemon === 0);
    setDisableHealButton(soinYourPokemon === 0);
  };

  return (
    <div className="h-full w-full">
      {test ? (
        <div className="h-full w-full">
          <div className="relative h-[400px] flex items-center justify-between">
            <h1 className="absolute top-10 left-[50%] transform -translate-x-[50%] text-4xl ita font-medium text-black bg-primary p-3 rounded-lg">
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
                <Progress value={pvYourPokemon} className="max-w-[150px]" />
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
                <Progress value={pvRandomPokemon} className="max-w-[150px]" />
              </div>
            </div>
          </div>
          <div className="h-[5%] flex justify-center items-center">
            <div className="w-full border-2"></div>
          </div>
          <div className="flex flex-col justify-end items-center gap-2 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-36 h-24">
                <Button
                  disabled={botton}
                  onClick={() => combat(10, "normal")}
                  className="w-full h-full rounded-[15px]"
                  variant="outline"
                >
                  Attaque
                </Button>
              </div>
              <div className="w-36 h-24">
                <Button
                  disabled={botton || disableSpecialAttackButton}
                  onClick={() => combat(20, "special")}
                  className="w-full h-full rounded-[15px] flex flex-col items-center justify-center gap-2"
                  variant="outline"
                >
                  Attaque Spécial
                  <span className="text-gray-500">
                    {attackSpecialYourPokemon}/2
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-36 h-24">
                <Button
                  disabled={botton || disableHealButton}
                  onClick={() => combat(-20, "soin")}
                  className="w-full h-full rounded-[15px] flex flex-col items-center justify-center gap-2"
                  variant="outline"
                >
                  Soin
                  <span className="text-gray-500">{soinYourPokemon}/2</span>
                </Button>
              </div>
              <div className="w-36 h-24">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-full rounded-[15px]"
                    >
                      Finir le combat
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {" "}
                        êtes-vous sûre de vouloir finir le combat ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Vous allez perdre le combat
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>NON</AlertDialogCancel>
                      <AlertDialogAction onClick={finishFight}>
                        Finir le combat
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="sm:w-[500px] w-[350px] h-20 border rounded-[20px] mt-2 flex justify-center items-center">
              <p className="text-gray-500">{sentance}</p>
            </div>
          </div>
          {popup && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="w-[500px] h-[300px] bg-secondary rounded-[20px] flex flex-col justify-center items-center">
                {showConfetti && (
                  <Confetti active={isExploding} config={config} />
                )}
                <h1 className="text-3xl font-bold text-center">
                  {pvYourPokemon <= 0
                    ? "😡 Tu as perdu 😡"
                    : "😀 Tu as gagné 😀"}
                </h1>
                <Button onClick={finishFight} className="mt-5">
                  Finir le combat
                </Button>
              </div>
            </div>
          )}
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
