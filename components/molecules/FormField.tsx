import React from "react";
import Label from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import Text from "../atoms/Text";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | false | undefined;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error
}) => (
  <div className="mb-4">
    <Label htmlFor={name} className="block text-off-white font-bold mb-2">
      {label} 
    </Label>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all border-gray-600"
    />
    {error && <Text variant="span" className="text-red-500 text-sm">{error}</Text>}
  </div>
);

export default FormField;