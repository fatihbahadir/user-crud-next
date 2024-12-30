"use client";

import React, { use, useEffect, useState } from "react";
import UserForm from "@/components/organisms/UserForm";
import { useRouter } from "next/navigation";

const UserDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = use(params);
  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    role: string;
  }) => {
    console.log("Form submitted:", formData);
    router.push("/users"); // Geri yönlendirme
  };

  const handleCancel = () => {
    router.push("/users");
  };


  return (
    <div className="py-4  w-full flex justify-center items-center h-screen">
      <UserForm
        initialData={id !== "new" ? { name: "John", email: "john@example.com", role: "Admin" } : undefined}
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
        actionText={id !== "new" ? "Save" : "Create"}
      />
    </div>
  );
};

export default UserDetailPage;