import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pokemon, userId } = body;

    const user = await db.profil.findUnique({
      where: { idUser: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedAllPokemon = user.allPokemon.filter((p) => p !== pokemon);

    const addedPokemon = await db.profil.update({
      where: { idUser: userId },
      data: {
        allPokemon: updatedAllPokemon,
        pokedex: {
          push: pokemon,
        },
      },
    });

    return NextResponse.json(
      {
        user: addedPokemon,
        message:
          "Votre Pokémon a été ajouté. Consultez votre Pokédex pour l'utiliser.",
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Quelque chose a mal tourné !", e },
      { status: 500 },
    );
  }
}
