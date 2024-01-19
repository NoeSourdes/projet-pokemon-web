import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const id = session?.user.id;
    const getUser = await db.profil.findUnique({
      where: { idUser: id },
      select: {
        personnageName: true,
        money: true,
        level: true,
        pokedex: true,
        progress: true,
        allPokemon: true,
      },
    });
    return NextResponse.json({ user: getUser }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Quelque chose a mal tourné !", e },
      { status: 500 },
    );
  }
}
