import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const updatedUser = await db.user.update({
      where: { id: id },
      data: {
        createNow: true,
      },
    });

    return NextResponse.json(
      { user: updatedUser, message: "Utilisateur mis à jour avec succès" },
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
