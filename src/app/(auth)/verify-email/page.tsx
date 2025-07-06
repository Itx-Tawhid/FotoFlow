import React from "react";
import { Input } from "@/components/ui/input";

const VarifyEmail = () => {
  return (
    <>
      <form action="">
        <Input type="text" placeholder="Enter OTP" />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-3 py-2 rounded"
        >
          Verify Email
        </button>
      </form>
    </>
  );
};

export default VarifyEmail;
