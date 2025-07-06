import React from "react";
import { Input } from "@/components/ui/input";

const Forgot = () => {
  return (
    <form action="">
      <Input type="email" placeholder="Email" />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Send Reset Link
      </button>
    </form>
  );
};

export default Forgot;
