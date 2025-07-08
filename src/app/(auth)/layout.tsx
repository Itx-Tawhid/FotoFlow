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
import { Outfit, Merienda } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-merienda",
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [BgImage, setBgImage] = useState<ImageProps | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const isLoainPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";
  const isForgotPage = pathname === "/forgot";
  const isVerifyPage = pathname === "/verify-email";

  useEffect(() => {
    setBgImage(getRandomeImage(ImageItem));
  }, []);
  return (
    <main className="w-full min-h-screen fx-center block bg-zinc-800 text-white">
      <div className="flex items-center h-full justify-between w-full max-w-[1400px] mx-auto">
        {/* Left side image and logo */}
        <div className="lg:w-1/2 w-[40%] md:block hidden h-full">
          <div className="w-[90%] min-h-screen relative overflow-hidden">
            {!isLoading && (
              <h1
                className={`px-8 absolute z-10 lg:text-4xl text-2xl text-center text-wrap inset-0 flex items-center justify-center leading-normal tracking-wider text-white font-bold ${merienda.className} animate__animated animate__fadeInUp`}
              >
                {BgImage?.tagline}
              </h1>
            )}

            <div className="absolute top-4 left-4 z-10">
              <Logo width={35} height={35} textSize="text-2xl" />
            </div>

            {isLoading && (
              <Skeleton className="w-full min-h-screen rounded-none" />
            )}
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
                } brightness-50`}
              />
            ) : (
              <Skeleton className="w-full h-full rounded-none" />
            )}
            <p className="absolute bottom-4 left-4 z-10 lg:text-sm text-[0.66rem] text-white">
              Uploaded by{" "}
              <Link
                href={BgImage?.authorLink || "/"}
                className="underline text-blue-300"
              >
                {BgImage?.author}
              </Link>
            </p>
          </div>
        </div>

        {/* Right side form and links */}
        <div className="lg:w-1/2 md:w-[60%] w-full h-full flex items-center justify-center">
          <div className="lg:w-[70%] w-full lg:px-0 md:px-12 sm:px-16 px-8 h-full flex items-center justify-center flex-col">
            <h1
              className={`lg:text-4xl md:text-2xl text-3xl font-bold mt-8 mb-10 text-center ${outfit.className}`}
            >
              {isLoainPage && "Welcome Back"}
              {isRegisterPage && "Join With Us"}
              {isForgotPage && "Forgot Password"}
              {isVerifyPage && "Input Verification Code"}
            </h1>
            {/* Login forms */}
            {children}
            {(isLoainPage || isRegisterPage) && (
              <>
                <span className="text-sm w-1/2 text-nowrap text-zinc-400 my-8 flex items-center justify-center gap-2">
                  <hr className="w-1/2 border-zinc-400" /> or{" "}
                  {isLoainPage ? "login" : "register"} with
                  <hr className="w-1/2 border-zinc-400" />
                </span>
                <div className="flex items-center justify-between gap-4 w-full">
                  <ButtonIcon
                    icon={"flat-color-icons:google"}
                    width={34}
                    height={34}
                    className="border border-zinc-700 w-13 flex items-center justify-center h-13 rounded-full"
                    onClick={() => alert("Google")}
                  />
                  <ButtonIcon
                    icon={"logos:facebook"}
                    width={34}
                    height={34}
                    className="border border-zinc-700 w-13 flex items-center justify-center h-13 rounded-full"
                    onClick={() => alert("Facebook")}
                  />
                  <ButtonIcon
                    icon={"logos:x"}
                    width={28}
                    height={28}
                    className="border border-zinc-700 w-12 flex items-center justify-center h-12 rounded-full"
                    onClick={() => alert("Twitter")}
                  />
                  <ButtonIcon
                    icon={"logos:apple"}
                    width={34}
                    height={34}
                    className="border border-zinc-700 w-12 flex items-center justify-center h-12 rounded-full"
                    onClick={() => alert("Apple")}
                  />
                </div>
              </>
            )}

            {!isVerifyPage && (
              <p className="text-sm text-zinc-400 my-8 self-start">
                {isLoainPage
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <Link
                  href={isLoainPage ? "/register" : "/login"}
                  className="text-blue-400 underline"
                >
                  {isLoainPage ? "Join now" : "Login"}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
