"use client";

import React, { useEffect } from "react";
import { ComponentPokedexAdmin } from "@/components/admin/home/components/componentPokedexAdmin";
import { ComponentsAllPokemonProfile } from "@/components/admin/home/components/componentsAllPokemonProfile";

export default function Pokedex() {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
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
      setLoading(false);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="w-screen pb-10">
      <div className="border-b w-full max-lg:p-5 px-10 py-3">
        <h1 className="text-2xl font-bold w-full">Pokedex :</h1>
      </div>
      <div className="max-lg:p-5 px-10 mt-5 space-y-10">
        <div>
          <ComponentPokedexAdmin data={data} pokedex={true} />
        </div>
      </div>
      <div className="max-lg:p-5 px-10 mt-5 space-y-10">
        <div>
          <ComponentsAllPokemonProfile data={data} pokedex={true} />
        </div>
      </div>
    </div>
  );
}
