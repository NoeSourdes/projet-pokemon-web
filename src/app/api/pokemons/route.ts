import {NextResponse} from "next/server";
import pokemons from "@/app/assets/dictionnaire/pokemonDict";

export async function GET() {
    const json = {
        pokemons
    };
    return NextResponse.json(json);
}