// molecules/Row.tsx
import React from "react";
import { Input } from "../atoms/Input";

interface RowProps {
  data: string[];
  isChecked: boolean;
  onCheckboxChange: (isChecked: boolean) => void;
}


const Row: React.FC<RowProps> = ({ data, isChecked, onCheckboxChange }) => {
  return (
    <tr className="hover:bg-gray-800 cursor-pointer" onClick={() => onCheckboxChange(!isChecked)}>
      <td className="p-2 border-b border-gray-800">
        <Input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheckboxChange(e.target.checked)}
          className="h-4 w-4 accent-gray-700  rounded cursor-pointer"
        />
      </td>
      {data.map((cell, index) => (
        <td
          key={index}
          className="p-2 border-b border-gray-800 text-white"
        >
          {cell}
        </td>
      ))}
    </tr>
  );
};

export default Row;