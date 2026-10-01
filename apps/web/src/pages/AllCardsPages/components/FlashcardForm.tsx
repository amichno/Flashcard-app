import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
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
  onSubmit: (values: FlashcardFormValues) => void | Promise<void>;
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
    formState: { errors, isSubmitting },
  } = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardFormSchema),
    defaultValues: {
      question: "",
      answer: "",
      category: "",
    },
  });

  const methods = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardFormSchema),
  });

  useEffect(() => {
    reset({
      question: flashcard?.question ?? "",
      answer: flashcard?.answer ?? "",
      category: flashcard?.category ?? "",
    });
  }, [flashcard, reset]);

  const handleFormSubmit = async (values: FlashcardFormValues) => {
    await onSubmit(values);

    if (!isEditMode) {
      reset({
        question: "",
        answer: "",
        category: "",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="outlined-surface hard-shadow flex flex-col gap-4 rounded-2xl p-5"
      >
        <FormInput label="Question" name="question" error={errors.question} />

        <FormTextarea label="Answer" name="answer" error={errors.answer} />

        <FormSelect
          label="Category"
          name="category"
          options={categories}
          error={errors.category}
        />

        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? "Saving..."
              : isEditMode
                ? "Save Changes"
                : "Create Card"}
          </button>

          {isEditMode && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
