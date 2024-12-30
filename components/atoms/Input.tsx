
interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    name?: string;
    className?: string;
    checked?: boolean
  }

export const Input : React.FC<InputProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    className,
    checked
}) => (

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        autoComplete="off"
        onChange={onChange}
        name={name}
        id={name}
        className={className}
        checked={checked}
      />
  );