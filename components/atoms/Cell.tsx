import React from 'react';

interface CellProps {
  children: React.ReactNode;
  className?: string;
}

const Cell: React.FC<CellProps> = ({ children, className = '' }) => {
  return <td className={`px-2 py-4 ${className} border-b border-gray-600`}>{children}</td>;
};

export default Cell;