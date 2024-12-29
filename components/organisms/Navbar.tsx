"use client"
import React from 'react';
import Logo from '@/components/atoms/Logo'; 
import { usePathname } from 'next/navigation'; 
import LinkWithIcon from '../molecules/LinkWithIcon';
import AddIcon from '@/public/add.svg';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="text-white p-4 shadow-md fixed top-0 w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <div className="flex items-center justify-center">
          <LinkWithIcon href="/users/new" label="Add User" icon={AddIcon} isActive={pathname === '/users/new'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;