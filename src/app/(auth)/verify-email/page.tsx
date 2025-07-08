import React from "react";
import { Input } from "@/components/ui/input";

const VarifyEmail = () => {
  return (
    <>
      <form action="">
        <Input type="text" placeholder="Enter OTP" />
        <button type="submit" className="btn-forms w-1/2 mt-4">
          Verify Email
        </button>
      </form>
    </>
  );
};

export default VarifyEmail;
