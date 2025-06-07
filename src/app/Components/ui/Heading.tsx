import { cn } from "@/utils/utils";
import React, { JSX } from "react";

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

const baseLargeHeading =
  "leading-[1.1] font-medium tracking-[-1px] text-center align-middle text-white";
const levelStyles = {
  h1: cn(
    baseLargeHeading,
    "text-4xl sm:text-5xl md:text-6xl lg:text-[65px] lg:leading-[78px]"
  ),
  h2: cn(
    baseLargeHeading,
    "text-3xl sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[78px]"
  ),
  h3: "text-3xl font-semibold text-white",
  h4: "text-2xl font-medium text-white",
  h5: "text-xl font-medium text-white",
  h6: "text-lg font-medium text-white",
};

export default function Heading({
  level = "h2",
  className = "",
  children,
}: HeadingProps) {
  const Tag = level as keyof JSX.IntrinsicElements;
  const style = levelStyles[level] || "";

  return <Tag className={cn(style, className)}>{children}</Tag>;
}
