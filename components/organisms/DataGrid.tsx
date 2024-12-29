"use client";
import React, { useState } from "react";
import Row from "../molecules/Row";
import Button from "../atoms/Button";

interface DataGridProps {
  columns: string[];
  data: string[][];
  onEdit: (selectedRow: number) => void;
  onDelete: (selectedRow: number) => void;
}

const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
}) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleCheckboxChange = (index: number | null) => {
    setSelectedRow(index);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex w-full justify-end space-x-2 mb-4 py-4 px-2">
        <Button
          onClick={() => selectedRow !== null && onEdit(selectedRow)}
          className={`flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-off-white text-gray-800 transition-all${
            selectedRow
            ? "opacity-100 "
              : "text-black opacity-50 cursor-not-allowed"
          }`}
        >
          Edit
        </Button>
        <Button
          onClick={() => selectedRow !== null && onDelete(selectedRow)}
          className={`flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-gray-800  text-off-white transition-all${
            selectedRow
            ? "opacity-100 "
            : "text-off-white opacity-50 cursor-not-allowed"
        }`}
        >
          Delete
        </Button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left border-b border-gray-800"></th>
            {columns.map((col, index) => (
              <th
                key={index}
                className="p-2 font-bold text-off-white border-b border-gray-800 text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <Row
              key={index + 1}
              data={rowData}
              isChecked={selectedRow === index + 1}
              onCheckboxChange={(isChecked) =>
                handleCheckboxChange(isChecked ? index + 1: null)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
