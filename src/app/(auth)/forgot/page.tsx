import React from "react";
import { Input } from "@/components/ui/input";

const Forgot = () => {
  return (
    <form action="">
      <Input type="email" placeholder="Email" />
      <button className="btn-forms mt-4 w-1/2">Send Reset Link</button>
    </form>
  );
};

export default Forgot;
