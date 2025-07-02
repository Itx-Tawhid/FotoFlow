"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageItem, ImageProps } from "@/contents/image";
import { getRandomeImage } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [BgImage, setBgImage] = useState<ImageProps | undefined>(undefined);
  useEffect(() => {
    setBgImage(getRandomeImage(ImageItem));
  }, []);
  return (
    <main className="flex items-center justify-between w-full h-screen p-4 bg-zinc-800 text-white">
      <div className="w-1/2 h-full">
        <div className="w-[70%] h-full relative overflow-hidden rounded-md">
          {BgImage ? (
            <Image
              src={BgImage.src}
              alt={BgImage.alt || "Login Image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={true}
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
      </div>

      <div className="w-1/2">{children}</div>
    </main>
  );
};

export default AuthLayout;
