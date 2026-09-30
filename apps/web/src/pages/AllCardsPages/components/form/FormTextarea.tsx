import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormTextareaProps = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
};

export const FormTextarea = ({
  label,
  registration,
  error,
  placeholder,
}: FormTextareaProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>

      <textarea
        {...registration}
        placeholder={placeholder}
        className="outlined-surface min-h-28 resize-y px-4 py-2"
      />

      {error && <span className="text-sm text-red-600">{error.message}</span>}
    </label>
  );
};
