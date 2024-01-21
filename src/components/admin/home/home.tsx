import { CardPokemon } from "@/components/admin/home/components/cardPokemon";
import { ComponentCombat } from "@/components/admin/home/components/componentCombat";
import { ComponentPokedexAdmin } from "@/components/admin/home/components/componentPokedexAdmin";
import React, { useEffect } from "react";

export const Home = () => {
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
    <div className="w-screen lg:flex lg:justify-between">
      <div className="lg:w-[40%] max-lg:p-5 p-10 max-lg:flex max-lg:justify-center">
        <CardPokemon data={data} loading={loading} />
      </div>
      <div className="lg:w-[60%] h-full flex flex-col w-full space-y-5 items-center max-lg:p-5 py-10 pr-10">
        <ComponentPokedexAdmin data={data} />
        <div className="w-[50%] border-b"></div>
        <ComponentCombat />
      </div>
    </div>
  );
};
