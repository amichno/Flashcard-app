import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { FlashCard } from "../../../features/flashcards/types/flashCard";
import {
  flashcardFormSchema,
  type FlashcardFormValues,
} from "../../../features/flashcards/schemas/flashcardFormSchema";

import { FormInput } from "./form/FormInput";
import { FormTextarea } from "./form/FormTextarea";
import { FormSelect } from "./form/FormSelect";

type FlashcardFormProps = {
  flashcard?: FlashCard;
  categories: string[];
  onSubmit: (values: FlashcardFormValues) => void;
  onCancel?: () => void;
};

export const FlashcardForm = ({
  flashcard,
  categories,
  onSubmit,
  onCancel,
}: FlashcardFormProps) => {
  const isEditMode = Boolean(flashcard);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardFormSchema),
    defaultValues: {
      question: "",
      answer: "",
      category: "",
    },
  });

  useEffect(() => {
    reset({
      question: flashcard?.question ?? "",
      answer: flashcard?.answer ?? "",
      category: flashcard?.category ?? "",
    });
  }, [flashcard, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="outlined-surface hard-shadow flex flex-col gap-4 rounded-2xl p-5"
    >
      <FormInput
        label="Question"
        placeholder="Enter question"
        registration={register("question")}
        error={errors.question}
      />

      <FormTextarea
        label="Answer"
        placeholder="Enter answer"
        registration={register("answer")}
        error={errors.answer}
      />

      <FormSelect
        label="Category"
        options={categories}
        registration={register("category")}
        error={errors.category}
      />

      <div className="flex gap-3">
        <button type="submit">
          {isEditMode ? "Save Changes" : "Create Card"}
        </button>

        {isEditMode && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
