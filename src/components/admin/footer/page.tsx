import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="flex justify-between items-center h-[50px] border-t px-10 max-lg:px-5 max-sm:flex-col max-sm:pt-3 space-y-2">
      <p className="text-gray-500 flex items-center gap-2">
        <MdCatchingPokemon className="w-6 h-6" /> - PokéLand
      </p>
      <p className="text-gray-500">© {date} - Noé Sourdès</p>
      <Link
        href="https://github.com/NoeSourdes/projet-pokemon-web/tree/main"
        target="_blank"
      >
        <p className="text-gray-500 max-sm:pb-3 hover:underline flex items-center gap-2">
          <FaGithub /> Github
        </p>
      </Link>
    </div>
  );
}
