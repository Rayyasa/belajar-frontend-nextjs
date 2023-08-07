"use client";
import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";
interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
}

function Button({ title, variant = "solid", colorSchema, isDisabled,...props }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={isDisabled}
      className={clsx("py-[3px] px-[18px] rounded m-1", {
        "bg-blue-500 text-white font-medium": variant === "solid" && colorSchema === "blue",
        "text-blue-500 border border-blue-500": variant === "outline" && colorSchema === "blue",
        "text-white border bg-blue-500 bg-opacity-50": isDisabled === true && variant === "solid" && colorSchema === "blue",
        "text-blue-500 border border-blue-500 opacity-50": isDisabled === true && variant === "outline" && colorSchema === "blue",

        "bg-red-500 text-white font-medium": variant === "solid" && colorSchema === "red",
        "bg-red-500 text-white font-medium opacity-50": variant === "solid" && colorSchema === "red" && isDisabled === true,
        "text-red-500 border border-red-500": variant === "outline" && colorSchema === "red",
        "text-red-500 border border-red-500 opacity-50": variant === "outline" && colorSchema === "red" && isDisabled === true,

        "bg-green-500 text-white font-medium opacity-50": variant === "solid" && colorSchema === "green" && isDisabled === true,
        "bg-green-500 text-white font-medium": variant === "solid" && colorSchema === "green",
        "text-green-500 border border-green-500": variant === "outline" && colorSchema === "green",
        "text-green-500 border border-green-500 opacity-50": variant === "outline" && colorSchema === "green" && isDisabled === true,
      })}
    >
      {title}
    </button>
  );
}
export default Button;