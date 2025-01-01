import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode; 
  isActive: boolean; 
  className?: string; 
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, className }) => {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        isActive ? 'text-white pointer-events-none underline underline-offset-8' : 'text-off-white hover:text-white'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;