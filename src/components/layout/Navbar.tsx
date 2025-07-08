"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavbarItem } from "@/contents/navbar";

export const Navbar = () => {
  return (
    <header>
      <nav>
        {NavbarItem.map((nav) => (
          <Link
            key={nav.title}
            href={nav.link}
            className="flex items-center justify-center gap-2"
          >
            <Icon icon={nav?.icon} />
            {nav.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
