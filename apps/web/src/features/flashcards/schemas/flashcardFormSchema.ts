import { z } from "zod";

export const flashcardFormSchema = z.object({
  question: z
    .string()
    .trim()
    .min(3, "Question must contain at least 3 characters"),

  answer: z.string().trim().min(2, "Answer must contain at least 2 characters"),

  category: z.string().min(1, "Category is required"),
});

export type FlashcardFormValues = z.infer<typeof flashcardFormSchema>;
