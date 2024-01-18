"use client";

import React, { useState } from "react";
import Step2 from "@/components/onboarding/step2/page";
import { Step1 } from "@/components/onboarding/step1/page";
import Step3 from "@/components/onboarding/step3/page";

export default function Onboarding() {
  const [step, setStep] = useState<number>(0);
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [personnageName, setPersonnageName] = useState<string | null>(null);
  console.log(pokemon, personnageName);
  switch (step) {
    case 0:
      return <Step1 setPokemonName={setPokemon} setStep={setStep} />;
    case 1:
      return <Step2 setPersonnageName={setPersonnageName} setStep={setStep} />;
    case 2:
      return <Step3 />;
  }
}
