interface TextProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    className?: string;
  }
  
  export const Text: React.FC<TextProps> = ({ children, variant = 'p', className }) => {
    const Component = variant;
    return <Component className={className}>{children}</Component>;
  };
  