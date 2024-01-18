"use client";

import React, { useEffect, useState } from "react";
import Step2 from "@/components/onboarding/step2/page";
import { Step1 } from "@/components/onboarding/step1/page";
import Step3 from "@/components/onboarding/step3/page";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const [step, setStep] = useState<number>(0);
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [personnageName, setPersonnageName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    router.push(`?step=${[step + 1]}`);
  }, [step]);

  useEffect(() => {
    window.onpopstate = (e: any) => {
      e.preventDefault();
      if (step > 0) {
        setStep(step - 1);
      }
    };

    return () => {
      window.onpopstate = null;
    };
  }, [step]);

  switch (step) {
    case 0:
      return <Step1 setPokemonName={setPokemon} setStep={setStep} />;
    case 1:
      return (
        <Step2
          setPersonnageName={setPersonnageName}
          setStep={setStep}
          pokemonName={pokemon}
        />
      );
    case 2:
      if (pokemon && personnageName) {
        return <Step3 pokemonName={pokemon} personnageName={personnageName} />;
      }
  }
}
