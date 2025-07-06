"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Register = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <form
      action=""
      className="flex items-center justify-center flex-col gap-4 w-full"
    >
      <div className="flex items-center justify-between gap-4">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
      </div>
      <Input type="email" placeholder="Email" />
      <Input
        type="text"
        placeholder="Username ( only letters, numbers and underscores )"
      />
      <div className="w-full relative">
        <Input
          type={toggle ? "text" : "password"}
          placeholder="Password ( min. 8 char )"
        />
        <Icon
          icon={toggle ? "solar:eye-bold" : "solar:eye-closed-bold"}
          width="24"
          height="24"
          color="#9f9da0"
          className="absolute top-4 right-3 cursor-pointer"
          onClick={handleToggle}
        />
      </div>
      <button className="bg-blue-400 text-lg hover:bg-blue-500 ease-in transition-all text-white w-full py-2 px-4 rounded-md">
        Register
      </button>
    </form>
  );
};

export default Register;
