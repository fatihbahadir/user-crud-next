"use client"
import React from 'react';
import Logo from '@/components/atoms/Logo'; 
import { usePathname } from 'next/navigation'; 
import LinkWithIcon from '../molecules/LinkWithIcon';
import AddIcon from '@/public/add.svg';
import Link from 'next/link';
import NavLink from '../atoms/NavLink';
import PlusIcon from '../atoms/PlusIcon';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="text-white p-4 shadow-md fixed top-0 w-full py-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <div className='flex items-center justify-center gap-12'>
          <NavLink href="/users" isActive={pathname === '/users'}>Users</NavLink> 
          <LinkWithIcon href="/users/new" label="Add User" icon={<PlusIcon/>} isActive={pathname === '/users/new'}/>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;