import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface LinkWithIconProps {
  href: string;
  label: string;
  icon: string | StaticImport; 
  isActive: boolean;
}

const LinkWithIcon: FC<LinkWithIconProps> = ({ href, label, icon : Icon, isActive }) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center space-x-2 text-off-white hover:text-white ${isActive ? 'text-white' : ''}`}
    >
     <Image src={Icon} alt={label} width={25} height={25}/>
     <p>{label}</p> 
    </Link>
  );
};

export default LinkWithIcon;