import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(30, "Name must be at most 30 characters"),
    surname: Yup.string().required("Surname is required").min(2, "Surname must be at least 2 characters").max(30, "Surname must be at most 30 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone_number: Yup.string()
    .matches(/^05\d{2}[- ]?\d{3}[- ]?\d{4}$/, 'Invalid phone number, phone number should be in the format 05XX XXX XXXX').required('Phone number is required'),
  });