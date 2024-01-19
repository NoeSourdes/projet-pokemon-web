import React, { useEffect } from "react";
import { CardPokemon } from "@/components/admin/home/components/cardPokemon";

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
    <div className="w-screen h-full lg:flex lg:justify-between">
      <div className="lg:w-[40%] max-lg:p-5 p-10 max-lg:flex max-lg:justify-center max-sm:p-3">
        <CardPokemon data={data} loading={loading} />
      </div>
      <div className="lg:w-[60%]"></div>
    </div>
  );
};
