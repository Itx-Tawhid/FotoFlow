"use client";
import React from "react";
import { Navbar } from "@/components/layout";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default LayoutMain;
