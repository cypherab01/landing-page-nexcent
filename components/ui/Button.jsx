"use client";

import React, { useState } from "react";

const Button = ({
  label,
  size = "normal",
  variant = "primary",
  iconLeft,
  iconRight,
  isLoading,
  disabled,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const baseStyles =
    "rounded-[4px] flex items-center justify-center transition-all duration-200";
  const sizeStyles = {
    normal: "px-4 py-2 text-base",
    medium: "px-4 py-2 text-base",
    small: "px-3 py-2 text-sm",
  };
  const variantStyles = {
    primary: {
      default: "bg-primary text-background font-lg",
      hover: "bg-primary-dark text-background",
      focus: "bg-primary border-2 border-d-gray text-background",
      click: "bg-primary-shade-200 text-background",
      disabled: "bg-silver text-gray-blue",
    },
    secondary: {
      default: "bg-secondary text-primary",
      hover: "bg-secondary-dark text-primary",
      focus: "bg-secondary ring-2 ring-secondary-light text-primary",
      click: "bg-secondary-darker text-primary",
    },
    tertiary: {
      default: "bg-transparent text-primary border border-primary",
      hover: "bg-primary-light text-primary border border-primary",
      focus:
        "bg-transparent ring-2 ring-primary-light text-primary border border-primary",
      click: "bg-primary-light text-primary-dark border border-primary",
    },
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const getVariantStyle = () => {
    if (disabled) return variantStyles.disabled;
    if (isClicked) return variantStyles[variant].click;
    if (isFocused) return variantStyles[variant].focus;
    if (isHovered) return variantStyles[variant].hover;
    return variantStyles[variant].default;
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${getVariantStyle()}`}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {isLoading && <span className="mr-2 loader" />}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {label}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
