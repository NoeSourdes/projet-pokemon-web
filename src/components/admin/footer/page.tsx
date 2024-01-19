import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="flex justify-between items-center h-[50px] border-t px-10 max-lg:px-5 max-sm:flex-col max-sm:pt-2">
      <p className="text-gray-500"></p>
      <p className="text-gray-500">© {date} - Noé Sourdès - PokéLand</p>
      <Link href="" target="_blank">
        <p className="text-gray-500 max-sm:pb-2 hover:underline flex items-center gap-2">
          <FaGithub /> Github
        </p>
      </Link>
    </div>
  );
}
