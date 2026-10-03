import {
  Path,
  useFormContext,
  UseFormRegister,
  type FieldError,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { FlashcardFormValues } from "../../../../features/flashcards/schemas/flashcardFormSchema";

type FormInputProps = {
  label: string;
  name: Path<FlashcardFormValues>;
  placeholder?: string;
  error?: FieldError;
};

export const FormInput = ({
  label,
  name,
  error,
  placeholder,
}: FormInputProps) => {
  const { register } = useFormContext<FlashcardFormValues>();

  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>

      <input
        {...register(name)}
        placeholder={placeholder}
        className="outlined-surface  rounded-xl  px-4 py-2"
      />

      {error?.message && (
        <span className="text-sm text-red-600">{error.message}</span>
      )}
    </label>
  );
};
