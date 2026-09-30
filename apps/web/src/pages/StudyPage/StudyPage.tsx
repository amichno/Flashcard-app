import { useState } from "react";
import { StudyActions } from "../../app/components/StudyActions";
import { StudyCard } from "../../app/components/StudyCard";
import { StudyControl } from "../../app/components/StudyControls";
import { MASTERY_THRESHOLD } from "../../features/flashcards/constants/flashCards";
import { StudyNavigation } from "../../app/components/StudyNavigation";
import { StudyStatistics } from "../../app/components/StudyStatistics";
import { getStudyStatistics } from "../../features/flashcards/utils/getStudyStatistics";
import { CATEGORY_FILTER } from "../../features/flashcards/constants/filters";
import { CategoryFilter } from "../../features/flashcards/types/filterCategory";
import { useFlashcards } from "../../features/flashcards/context/flashcardContext";
import { shuffleArray } from "../../features/flashcards/utils/helpers";
import { FlashCard } from "../../features/flashcards/types/flashCard";
import { useFlashcardProgress } from "../../features/flashcards/hooks/useFlashcardProgress";
import { useStudyFilters } from "./hooks/useStudyFilters";
import { useStudyNavigation } from "./hooks/useStudyNavigation";
import { getUniqueCategories } from "../../features/flashcards/utils/getUniqueCategories";

export const StudyPage = () => {
  const { flashcards, setFlashcards } = useFlashcards();

  const {
    selectedCategory,
    hideMastered,
    filteredFlashcards,
    handleCategoryChange,
    handleHideMasteredChange,
  } = useStudyFilters(flashcards);

  const {
    currentIndex,
    currentFlashcard,
    studyFlashcards,
    setCurrentIndex,
    setShuffleOrder,
    handleNext,
    handlePrev,
    handleShuffle,
  } = useStudyNavigation(filteredFlashcards);

  const { handleKnow, handleReset } = useFlashcardProgress(
    setFlashcards,
    currentFlashcard,
  );

  const categories = getUniqueCategories(flashcards);

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_344px]">
        <section className="flex flex-col gap-4 outlined-surface hard-shadow py-4 rounded-2xl">
          <StudyControl
            categories={categories}
            hideMastered={hideMastered}
            onHideMasteredChange={handleHideMasteredChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onShuffle={handleShuffle}
          />

          {currentFlashcard ? (
            <>
              <StudyCard
                key={currentFlashcard.id}
                flashCard={currentFlashcard}
              />
              <StudyActions onKnow={handleKnow} onReset={handleReset} />
              <StudyNavigation onNext={handleNext} onPrev={handlePrev} />
            </>
          ) : (
            <p>No flashcards match the selected filters.</p>
          )}
        </section>

        <aside className="w-full  lg:max-w-[392px]">
          <StudyStatistics statistics={getStudyStatistics(flashcards)} />
        </aside>
      </div>
    </main>
  );
};
