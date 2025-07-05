"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation.js";
import { useState, useEffect } from "react";
import { ImageItem, ImageProps } from "@/contents/image";
import { getRandomeImage } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/ui/logo";
import { ButtonIcon } from "@/components/ui/button";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [BgImage, setBgImage] = useState<ImageProps | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const isLoainpage = pathname === "/login";
  const isRegisterPage = pathname === "/register";
  useEffect(() => {
    setBgImage(getRandomeImage(ImageItem));
  }, []);
  return (
    <main className="flex items-center justify-between w-full h-screen bg-zinc-800 text-white">
      {/* Left side image and logo */}
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

      {/* Right side form and links */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className=" w-[70%] h-full flex items-center justify-center flex-col">
          <h1
            className={`text-4xl font-bold mt-8 mb-10 text-center ${outfit.className}`}
          >
            {isLoading ? "Welcome Back" : "Join With Us"}
          </h1>
          {children}
          {(isLoainpage || isRegisterPage) && (
            <>
              <span className="text-sm w-1/2 text-nowrap text-zinc-400 my-8 flex items-center justify-center gap-2">
                <hr className="w-1/2 border-zinc-400" /> or login with
                <hr className="w-1/2 border-zinc-400" />
              </span>
              <div className="flex items-center justify-between w-full">
                <ButtonIcon
                  icon={"flat-color-icons:google"}
                  width={28}
                  height={28}
                  content="Google"
                  onClick={() => alert("Google")}
                />
                <ButtonIcon
                  icon={"logos:facebook"}
                  width={28}
                  height={28}
                  content="Facebook"
                  onClick={() => alert("Facebook")}
                />
                <ButtonIcon
                  icon={"logos:twitter"}
                  width={28}
                  height={28}
                  content="Twitter"
                  onClick={() => alert("Twitter")}
                />
                <ButtonIcon
                  icon={"logos:apple"}
                  width={28}
                  height={28}
                  content="Apple"
                  onClick={() => alert("Apple")}
                />
              </div>
            </>
          )}

          <p className="text-sm text-zinc-400 my-8 self-start">
            {isLoainpage
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Link
              href={isLoainpage ? "/register" : "/login"}
              className="text-blue-400 underline"
            >
              {isLoainpage ? "Join now" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
