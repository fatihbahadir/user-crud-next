"use client";
import React, { useState } from "react";
import Row from "../molecules/Row";
import Button from "../atoms/Button";
import { UserType } from "@/types/userTypes";

interface DataGridProps {
  columns: string[];
  data: UserType[];
  onEdit: (selectedRow: string) => void;
  onDelete: (selectedRow: string) => void;
}

const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
}) => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const handleCheckboxChange = (id: string | null) => {
    setSelectedRow(id);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex w-full justify-end space-x-2 mb-4 py-4 px-2">
        <Button
          onClick={() => selectedRow && onEdit(selectedRow)}
          className={`flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-off-white text-gray-800 transition-all${
            selectedRow
            ? "opacity-100 "
              : "text-black opacity-50 cursor-not-allowed"
          }`}
        >
          Edit
        </Button>
        <Button
          onClick={() => selectedRow && onDelete(selectedRow)}
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
          {data.map((user) => (
            <Row
            key={user.id}
            data={[
              user.name,
              user.surname,
              user.email,
              user.phone_number,
            ]}
            isChecked={selectedRow === user.id}
            onCheckboxChange={(isChecked) =>
              handleCheckboxChange(isChecked ? user.id : null)
            }
          />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
