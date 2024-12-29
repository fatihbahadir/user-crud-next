import Link from 'next/link';
import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode; 
  isActive: boolean; 
  className?: string; 
}

const NavLink: FC<NavLinkProps> = ({ href, children, isActive, className }) => {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        isActive ? 'text-white pointer-events-none' : 'text-gray-400 hover:text-white'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;