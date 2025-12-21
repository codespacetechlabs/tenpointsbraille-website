import { cn } from "@/app/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-medium select-none transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800 focus:ring-gray-900 disabled:bg-gray-400",
    secondary:
      "bg-[#5a5a5a] text-white hover:bg-gray-300 hover:text-black focus:ring-gray-600",
    outline:
      "border-2 border-gray-300 bg-white text-black hover:bg-black hover:text-white hover:border-white hover:border-[8px]",
  };

  const sizes = {
    sm: "w-32 h-32 text-sm",
    md: "w-40 h-40 text-base lg:w-50 lg:h-50 lg:text-xl",
    lg: "w-50 h-50 text-2xl lg:w-56 lg:h-56",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
