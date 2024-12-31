import React, { useEffect } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { CreateUserRequestPayload, UserType } from "@/types/userTypes";
import { useFormik } from "formik";
import { validationSchema } from "@/constants/schemas";

interface UserFormProps {
  initialData?: CreateUserRequestPayload | null;
  onSubmit: (formData: CreateUserRequestPayload | null) => void;
  onCancel: () => void;
  actionText: string;
}

const UserForm: React.FC<UserFormProps> = ({
  initialData = { name: "", surname: "", email: "", phone_number: "" },
  onSubmit,
  onCancel,
  actionText,
}) => {
  const formik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      surname: initialData?.surname || "",
      email: initialData?.email || "",
      phone_number: initialData?.phone_number || "",
    },
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
        onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
      <FormField
        label="Name"
        name="name"
        placeholder="Enter user name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.name && formik.errors.name
            ? formik.errors.name
            : undefined
        }
      />
      <FormField
        label="Surname"
        name="surname"
        placeholder="Enter user surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.surname && formik.errors.surname
            ? formik.errors.surname
            : undefined
        }
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter user email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : undefined
        }
      />
      <FormField
        label="Phone Number"
        name="phone_number"
        placeholder="Enter user phone number"
        value={formik.values.phone_number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.phone_number && formik.errors.phone_number
            ? formik.errors.phone_number
            : undefined
        }
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
          className="flex items-center justify-center py-[5px] rounded-lg w-[80px] bg-gray-800 text-off-white transition-all hover:scale-105 disabled:opacity-50"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {actionText}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
