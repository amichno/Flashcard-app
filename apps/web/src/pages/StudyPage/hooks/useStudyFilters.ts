import { useState } from "react";
import {
  CategoryFilter,
  CATEGORY_FILTER,
} from "../../../features/flashcards/constants/filters";
import { MASTERY_THRESHOLD } from "../../../features/flashcards/constants/flashCards";
import { FlashCard } from "../../../features/flashcards/types/flashCard";

export const useStudyFilters = (flashcards: FlashCard[]) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    CATEGORY_FILTER.ALL,
  );

  const [hideMastered, setHideMastered] = useState(false);

  const filteredFlashcards = flashcards.filter((flashcard) => {
    const matchesCategory =
      selectedCategory === CATEGORY_FILTER.ALL ||
      flashcard.category === selectedCategory;

    const matchesMastered =
      !hideMastered || flashcard.knownCount < MASTERY_THRESHOLD;

    return matchesCategory && matchesMastered;
  });

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
  };

  const handleHideMasteredChange = (value: boolean) => {
    setHideMastered(value);
  };

  return {
    selectedCategory,
    hideMastered,
    filteredFlashcards,
    handleCategoryChange,
    handleHideMasteredChange,
  };
};
