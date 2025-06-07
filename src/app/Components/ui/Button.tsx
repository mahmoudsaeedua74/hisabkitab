import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";
export default function Button({
  children,
  variant = "login",
  disabled,
  to,
  onClick,
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "login" | "pricing" | "trial";
  disabled?: boolean;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  const baseStyles =
    "rounded-[30px] text-white font-medium hover:cursor-pointer text-[16px] leading-[17.6px] tracking-[-0.3px] transition-opacity duration-200 flex items-center justify-center"
  const variants = {
    login: {
      styles: cn(
        "w-[181px] h-[46px]",
        "bg-gradient-to-r from-[#331C9C] via-[#9066FB] to-[#331C9C]",
        "hover:opacity-90"
      ),
      defaultText: "Login\\Signup",
    },
    pricing: {
      styles: cn(
        "bg-transparent ",
        "border border-[#282D45]",
        "py-[17px] px-[42px]",
        "hover:opacity-80"
      ),
      defaultText: "View pricing",
    },
    trial: {
      styles: cn(
        "w-[218px] h-[50px]",
        "bg-gradient-to-r from-[#331C9C] via-[#9066FB] to-[#331C9C]",
        "py-[16px] px-[41px]",
        "hover:opacity-90"
      ),
      defaultText: "Start A FREE Trial",
    },
  };

  const currentVariant = variants[variant];
  const buttonClasses = cn(
    baseStyles,
    currentVariant.styles,
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  const buttonContent = children || currentVariant.defaultText;
  if (to) {
    return (
      <Link href={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }
  return (
    <button 
      disabled={disabled} 
      className={buttonClasses} 
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
