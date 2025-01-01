// components/organisms/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/components/atoms/Logo";
import { usePathname } from "next/navigation";
import NavLink from "../atoms/NavLink";
import HamburgerMenu from "../molecules/HamburgerMenu";
import MenuButton from "../molecules/MenuButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="text-white p-4 px-4 sm:px-8 md:px-12 lg:px-16 shadow-md fixed top-0 w-full py-8 bg-main-bg z-40">
      <div className="flex justify-between items-center">
        <Logo />
        
        <div className="hidden lg:flex items-center justify-center gap-6">
          <NavLink href="/users" isActive={pathname === "/users"}>
            Users
          </NavLink>
          <NavLink href="/users/new" isActive={pathname === "/users/new"}>
            New User
          </NavLink>
        </div>

        <div className="lg:hidden flex items-center">
          <MenuButton onClick={toggleMenu} />  
        </div>
      </div>

      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;