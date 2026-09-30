import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
};

export const FormInput = ({
  label,
  registration,
  error,
  placeholder,
}: FormInputProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>

      <input
        {...registration}
        placeholder={placeholder}
        className="outlined-surface px-4 py-2"
      />

      {error && <span className="text-sm text-red-600">{error.message}</span>}
    </label>
  );
};
