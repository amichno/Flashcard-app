import { FlashcardCategory } from "../types/flashCard";

export const CATEGORY_FILTER = {
  ALL: 'all',
} as const;

export type CategoryFilter =
  | FlashcardCategory
  | typeof CATEGORY_FILTER.ALL;