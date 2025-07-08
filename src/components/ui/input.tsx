import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={placeholder}
      className={` w-full lg:px-4 px-3 placeholder:text-sm lg:py-3 py-2 text-lg focus:outline-none rounded-md bg-zinc-700 ${className}`}
      required
    />
  );
};
