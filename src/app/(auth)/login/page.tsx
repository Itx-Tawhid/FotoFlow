"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Login = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <form
      action=""
      className="flex items-center justify-center flex-col gap-4 w-full"
    >
      <Input type="email" placeholder="Email" />
      <div className="w-full relative">
        <Input type={toggle ? "text" : "password"} placeholder="Password" />
        <Icon
          icon={toggle ? "solar:eye-bold" : "solar:eye-closed-bold"}
          width="24"
          height="24"
          color="#9f9da0"
          className="absolute top-4 right-3 cursor-pointer"
          onClick={handleToggle}
        />
      </div>
      <Link href="/forgot" className="text-sm self-end text-blue-400 underline">
        Forgot Password?
      </Link>
      <button className="bg-blue-400 text-lg hover:bg-blue-500 ease-in transition-all text-white w-full py-2 px-4 rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;
