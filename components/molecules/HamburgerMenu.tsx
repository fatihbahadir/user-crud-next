"use client";

import React from "react";
import NavLink from "../atoms/NavLink";
import { usePathname } from "next/navigation";
import Button from "../atoms/Button";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
      <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-5xl"
        >
          &times;
        </Button>
        <NavLink
          href="/users"
          isActive={pathname === "/users"}
          onClick={onClose}
        >
          Users
        </NavLink>
        <NavLink
          href="/users/new"
          isActive={pathname === "/users/new"}
          onClick={onClose}
        >
          New User
        </NavLink>
      </div>
    </div>
  );
};

export default HamburgerMenu;