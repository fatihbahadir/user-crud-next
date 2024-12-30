import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

interface UserFormProps {
  initialData?: { name: string; email: string; role: string };
  onSubmit: (formData: { name: string; email: string; role: string }) => void;
  onCancel: () => void;
  actionText: string; 
}

const UserForm: React.FC<UserFormProps> = ({
  initialData = { name: "", email: "", role: "" },
  onSubmit,
  onCancel,
  actionText,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <FormField
        label="Name"
        name="name"
        placeholder="Enter user name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter user email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="Role"
        name="role"
        placeholder="Enter user role"
        value={formData.role}
        onChange={handleChange}
      />
      <div className="flex justify-end space-x-4">
        <Button
          typeAttr="button"
          onClick={onCancel}
          className="flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-off-white text-gray-800 transition-all hover:scale-105"
        >
          Back
        </Button>
        <Button
          typeAttr="submit"
          className="flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-gray-800  text-off-white transition-all hover:scale-105"
        >
          {actionText}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;