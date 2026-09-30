import { FlashcardCategory } from "../types/flashCard";

export const CATEGORY_FILTER = {
  ALL: "all",
} as const;

export type CategoryFilter = string;
