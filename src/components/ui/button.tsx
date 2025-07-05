"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface ButtonIconProps {
  content?: string;
  icon: string;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  content,
  icon,
  width = 24,
  height = 24,
  className,
  onClick,
}) => {
  return (
    <button
      className={` text-sm px-3 py-1 ${className} ${
        icon && content && "flex items-center justify-center gap-2"
      }`}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} width={width} height={height} />}
      {content && <span className="pt-1">{content}</span>}
    </button>
  );
};
