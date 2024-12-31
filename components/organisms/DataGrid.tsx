"use client";
import React, { useState } from "react";
import Row from "@/components/molecules/Row";
import Button from "@/components/atoms/Button";
import PaginationControls from "@/components/molecules/PaginationControls";
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
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleCheckboxChange = (id: string | null) => {
    setSelectedRow(id);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex w-full justify-end space-x-2 mb-4 py-4 px-2">
      <Button
          onClick={() => selectedRow && onEdit(selectedRow)}
          className={`flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-off-white text-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={!selectedRow}
        >
          Edit
        </Button>
        <Button
          onClick={() => selectedRow && onDelete(selectedRow)}
          className={`flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-gray-800  text-off-white transition-all 
           disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={!selectedRow}
        >
          Delete
        </Button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left border-b border-gray-800"></th>
            {columns.map((col, index) => (
              <th key={index} className="p-2 font-bold border-b border-gray-800">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user) => (
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
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
};

export default DataGrid;