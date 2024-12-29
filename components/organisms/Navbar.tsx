"use client"
import React from 'react';
import Logo from '@/components/atoms/Logo'; 
import { usePathname } from 'next/navigation'; 
import NavLink from '../atoms/NavLink';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="text-white p-4 shadow-md fixed top-0 w-full py-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <div className='flex items-center justify-center gap-6'>
          <NavLink href="/users" isActive={pathname === '/users'}>Users</NavLink> 
          <NavLink href="/users/new" isActive={pathname === '/users/new'}>New User</NavLink>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;