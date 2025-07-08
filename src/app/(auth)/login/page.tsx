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
      className="flex items-center justify-center flex-col gap-4 min-w-full w-full"
    >
      <Input type="email" placeholder="Email" />
      <div className="w-full relative">
        <Input type={toggle ? "text" : "password"} placeholder="Password" />
        <Icon
          icon={toggle ? "solar:eye-bold" : "solar:eye-closed-bold"}
          width="24"
          height="24"
          color="#9f9da0"
          className="absolute lg:top-4 top-3 right-3 cursor-pointer"
          onClick={handleToggle}
        />
      </div>
      <Link
        href="/forgot"
        className="lg:text-sm text-[0.66rem] self-end text-blue-400 underline"
      >
        Forgot Password?
      </Link>
      <button className="btn-forms">Login</button>
    </form>
  );
};

export default Login;
