import { NextRequest, NextResponse } from "next/server";
import pokemons from "@/app/assets/dictionnaire/pokemonDict";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug;
    let pokemon;

    if (!isNaN(parseInt(slug))) {
      const pokemonId = parseInt(slug);
      pokemon = pokemons.find((p) => p.id === pokemonId);
      if (!pokemon) {
        throw new Error(`Pokemon with ID ${pokemonId} not found`);
      }
    } else {
      pokemon = pokemons.find(
        (p) =>
          p.name.toLowerCase() === slug.toLowerCase() ||
          p.nameFrench.toLowerCase() === slug.toLowerCase(),
      );
      if (!pokemon) {
        throw new Error(`Pokemon with name or nameFrench ${slug} not found`);
      }
    }
    return NextResponse.json(pokemon);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: {
            message: error.message,
          },
        },
        { status: 404 },
      );
    }
  }
}
