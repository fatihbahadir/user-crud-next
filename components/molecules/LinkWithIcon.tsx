import { FC, ReactNode } from 'react';
import NavLink from '../atoms/NavLink';
import { Text } from '../atoms/Text';

interface LinkWithIconProps {
  href: string;
  label: string;
  icon: ReactNode; 
  isActive: boolean;
}

const LinkWithIcon: FC<LinkWithIconProps> = ({ href, label, icon, isActive }) => {
  return (
    <NavLink href={href} isActive={isActive} className="flex items-center space-x-2">
      {icon}
      <Text variant="span">{label}</Text>
    </NavLink>
  );
};

export default LinkWithIcon;