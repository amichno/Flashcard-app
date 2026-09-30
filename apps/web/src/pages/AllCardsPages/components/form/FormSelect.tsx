import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormSelectProps = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  options: string[];
};

export const FormSelect = ({
  label,
  registration,
  error,
  options,
}: FormSelectProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>

      <select {...registration} className="outlined-surface px-4 py-2">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <span className="text-sm text-red-600">{error.message}</span>}
    </label>
  );
};
