import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled? : boolean;
  typeAttr?: "submit" | "reset"| "button" | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled, typeAttr = "button" }) => (
  <button type={typeAttr} className={`${className}`} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);