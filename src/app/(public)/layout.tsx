import React from "react";
import { Navbar } from "@/components/layout";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default LayoutMain;
