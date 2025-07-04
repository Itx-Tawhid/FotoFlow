"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageItem, ImageProps } from "@/contents/image";
import { getRandomeImage } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/ui/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [BgImage, setBgImage] = useState<ImageProps | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setBgImage(getRandomeImage(ImageItem));
  }, []);
  return (
    <main className="flex items-center justify-between w-full h-screen bg-zinc-800 text-white">
      <div className="w-1/2 h-full">
        <div className="w-[90%] h-full relative overflow-hidden ">
          <div className="absolute top-4 left-4 z-10">
            <Logo width={35} height={35} textSize="text-2xl" />
          </div>

          {isLoading && <Skeleton className="w-full h-full rounded-none" />}
          {BgImage && BgImage.src ? (
            <Image
              src={BgImage.src}
              alt={BgImage.alt || "Login Image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={true}
              onLoadingComplete={() => setLoading(false)}
              className={`transition-opacity duration-500 ease-in-out ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
            />
          ) : (
            <Skeleton className="w-full h-full rounded-none" />
          )}
        </div>
      </div>

      <div className="w-1/2 h-full">{children}</div>
    </main>
  );
};

export default AuthLayout;
