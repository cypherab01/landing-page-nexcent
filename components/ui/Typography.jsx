import React from "react";
import { cn } from "@/lib/utils";

const Typography = {
  h1: ({ children, className }) => (
    <h1
      className={cn(
        "text-[40px] md:text-[68px] font-semibold leading-[50px] md:leading-[78px]",
        className
      )}
    >
      {children}
    </h1>
  ),
  h2: ({ children, className }) => (
    <h2 className={cn("font-semibold text-[35px] leading-[44px]", className)}>
      {children}
    </h2>
  ),
  h3: ({ children, className }) => (
    <h3 className={cn("font-semibold text-[28px] leading-[38px]", className)}>
      {children}
    </h3>
  ),
  h4: ({ children, className }) => (
    <h4 className={cn("font-semibold text-[20px] leading-[28px]", className)}>
      {children}
    </h4>
  ),
  body1: ({ children, weight = "default", className }) => (
    <p
      className={cn(
        "text-[18px] leading-[28px]",
        weight === "md" && "font-medium",
        className
      )}
    >
      {children}
    </p>
  ),
  body2: ({ children, weight = "default", className }) => (
    <p
      className={cn(
        "text-[16px] leading-[24px] text-gray",
        weight === "md" && "font-medium",
        className
      )}
    >
      {children}
    </p>
  ),
  body3: ({ children, weight = "default", className }) => (
    <p
      className={cn(
        "text-[14px] leading-[20px]",
        weight === "md" && "font-medium",
        className
      )}
    >
      {children}
    </p>
  ),
  body4: ({ children, weight = "default", className }) => (
    <p
      className={cn(
        "text-[12px] leading-[16px]",
        weight === "md" && "font-medium",
        className
      )}
    >
      {children}
    </p>
  ),
};

export default Typography;
