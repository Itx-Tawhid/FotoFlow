import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VarifyEmail = () => {
  return (
    <>
      <form action="">
        <p className="text-sm font-semibold">One time password</p>
        <InputOTP maxLength={6} className="rounded-none w-full">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground mt-2">
          Please enter the one-time password sent to your phone.
        </p>
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
