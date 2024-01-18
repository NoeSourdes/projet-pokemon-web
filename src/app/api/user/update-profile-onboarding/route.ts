import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { personnage, pokemon, id } = body;
    console.log(body);

    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const upadteProfile = await db.profil.create({
      data: {
        idUser: id,
        personnageName: personnage,
        pokedex: [pokemon],
      },
    });
    return NextResponse.json(
      { user: upadteProfile, message: "Utilisateur mis à jour avec succès" },
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
