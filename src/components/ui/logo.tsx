import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-merienda",
});

interface LogoProps {
  width: number;
  height: number;
  textSize: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width,
  height,
  textSize,
  className,
}) => {
  return (
    <Link
      href="/"
      className={`${merienda.className} flex items-center justify-center gap-2 ${textSize} font-semibold ${className}`}
    >
      <Image src="/images/logo.svg" alt="Logo" width={width} height={height} />
      FotoFlow
    </Link>
  );
};
