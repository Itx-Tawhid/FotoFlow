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
      className={` w-full px-4 placeholder:text-sm py-3 text-lg focus:outline-none rounded-md bg-zinc-700 ${className}`}
      required
    />
  );
};
