import {
  Path,
  useFormContext,
  type FieldError,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { FlashcardFormValues } from "../../../../features/flashcards/schemas/flashcardFormSchema";

type FormSelectProps = {
  label: string;
  options: string[];
  name: Path<FlashcardFormValues>;
  error?: FieldError;
};

export const FormSelect = ({
  label,
  name,
  options,
  error,
}: FormSelectProps) => {
  const { register } = useFormContext<FlashcardFormValues>();
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>

      <select
        {...register(name)}
        className="outlined-surface rounded-xl px-4 py-2"
      >
        <option value="">Select category</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error?.message && (
        <span className="text-sm text-red-600">{error.message}</span>
      )}
    </label>
  );
};
