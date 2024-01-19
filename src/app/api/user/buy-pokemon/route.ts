import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pokemon, price, id } = body;

    const updatedUser = await db.profil.update({
      where: { idUser: id },
      data: {
        allPokemon: {
          push: pokemon,
        },
        money: {
          decrement: price,
        },
      },
    });

    return NextResponse.json(
      {
        user: updatedUser,
        message:
          "Votre Pokémon a été acheté. Consultez votre Pokédex pour l'utiliser.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Quelque chose a mal tourné !", error },
      { status: 500 },
    );
  }
}
