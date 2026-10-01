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
    <label>
      <span>{label}</span>

      <input {...register(name)} placeholder={placeholder} />

      {error?.message && <span>{error.message}</span>}
    </label>
  );
};
