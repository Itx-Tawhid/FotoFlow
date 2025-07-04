"use client";
import React from "react";
import { Outfit } from "next/font/google";
import { Input } from "@/components/ui/input";
import { ButtonIcon } from "@/components/ui/button";
import { useState } from "react";
import { Icon } from "@iconify/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

const Login = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className=" w-full h-full flex items-center justify-evenly flex-col">
      <h1 className={`text-4xl font-bold text-center ${outfit.className}`}>
        Welcome Back
      </h1>
      <form
        action=""
        className="flex items-center justify-center flex-col gap-4 w-[70%]"
      >
        <Input type="email" placeholder="Email" />
        <div className="w-full relative">
          <Input type="password" placeholder="Password" />
          <Icon
            icon="solar:eye-broken"
            width="24"
            height="24"
            color="#9f9da0"
            className="absolute top-3 right-3 cursor-pointer"
          />
        </div>

        <button className="bg-blue-400 text-lg hover:bg-blue-600 ease-in transition-all text-white w-full py-2 px-4 rounded-md">
          Login
        </button>
      </form>
      <div className="flex items-center justify-between w-[70%]">
        <ButtonIcon
          icon={"flat-color-icons:google"}
          width={32}
          height={32}
          content="Google"
          onClick={() => alert("Google")}
        />
        <ButtonIcon
          icon={"logos:facebook"}
          width={32}
          height={32}
          content="Facebook"
          onClick={() => alert("Facebook")}
        />
        <ButtonIcon
          icon={"logos:twitter"}
          width={32}
          height={32}
          content="Twitter"
          onClick={() => alert("Twitter")}
        />
        <ButtonIcon
          icon={"logos:apple"}
          width={32}
          height={32}
          content="Apple"
          onClick={() => alert("Apple")}
        />
      </div>
    </div>
  );
};

export default Login;
