"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavbarItem } from "@/contents/navbar";
import { Logo } from "@/components/ui/logo";
import { Merienda } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Searchbar } from "../ui/searchbar";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-merienda",
});

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between p-4 border border-b-gray-800">
      <div className="flex w-1/2 items-center justify-left gap-8">
        <Logo width={34} height={34} textSize="text-2xl" />
        <ul className="flex items-center justify-between gap-8">
          {NavbarItem.map((nav, i) => {
            const isActive = pathname === nav.link;
            return (
              <li key={nav.title + i}>
                <Link
                  href={nav.link}
                  className={`flex items-center justify-between gap-2 font-extrabold transition-colors ease-in hover:text-gray-700 ${
                    isActive ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {/* <Icon icon={nav.icon} width={24} height={24} color="#4a5565" /> */}
                  <span>{nav.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-1/2">
        <Searchbar />
      </div>
    </nav>
  );
};
