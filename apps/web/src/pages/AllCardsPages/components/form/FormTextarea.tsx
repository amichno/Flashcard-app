import {
  useFormContext,
  type FieldError,
  type Path,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { FlashcardFormValues } from "../../../../features/flashcards/schemas/flashcardFormSchema";

type FormTextareaProps = {
  label: string;
  placeholder?: string;
  name: Path<FlashcardFormValues>;
  error?: FieldError;
};

export const FormTextarea = ({
  label,
  name,
  placeholder,
  error,
}: FormTextareaProps) => {
  const { register } = useFormContext<FlashcardFormValues>();

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>

      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="outlined-surface min-h-28 resize-y rounded-xl px-4 py-2"
      />

      {error?.message && (
        <span className="text-sm text-red-600">{error.message}</span>
      )}
    </label>
  );
};
