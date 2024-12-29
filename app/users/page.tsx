"use client"
import React from "react";
import DataGrid from "@/components/organisms/DataGrid";
import { useRouter } from 'next/navigation'

const columns = ["Name", "Surname", "Email", "Phone Number"];
const data = [
  ["Alice", "BlaBla", "alice@example.com", "05527083461"],
  ["Bob", "BlaBla","bob@example.com", "05324718482"],
  ["Charlie", "BlaBla", "charlie@example.com", "054361614171"],
];



const handleDelete = (selectedRow: number) => {
  console.log("Delete rows:", selectedRow);
};

const Users: React.FC = () => {
  const router = useRouter();
  const handleEdit = (selectedRow: number) => {
      router.push(`/user/${selectedRow}`)
  };
  
  return (
    <div className="py-4 mt-[90px] w-full">
      <DataGrid
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Users;