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

export const StudyPage = () => {
  const { flashcards, setFlashcards } = useFlashcards();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    CATEGORY_FILTER.ALL,
  );

  const [hideMastered, setHideMastered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [shuffleOrder, setShuffleOrder] =
  useState<string[] | null>(null);

  const currentFlashcard = flashcards[currentIndex];

  const handleKnow = () => {
    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              knownCount: Math.min(flashcard.knownCount + 1, MASTERY_THRESHOLD),
            }
          : flashcard,
      ),
    );
  };

  const handleReset = () => {
    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              knownCount: 0,
            }
          : flashcard,
      ),
    );
  };

  const handleNext = () => {
    const newFlashcard = flashcards[currentIndex + 1];
    if (newFlashcard) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    const newFlashcard = flashcards[currentIndex - 1];
    if (newFlashcard) setCurrentIndex(currentIndex - 1);
  };

  const getFilteredFlashCards= (
  category: CategoryFilter,
  shouldHideMastered: boolean,
) => {
  return flashcards.filter((flashcard) => {
    const matchesCategory =
      category === CATEGORY_FILTER.ALL ||
      flashcard.category === category;

    const matchesMastered =
      !shouldHideMastered ||
      flashcard.knownCount < MASTERY_THRESHOLD;

    return matchesCategory && matchesMastered;
  });
};

  const filteredFlashcards = getFilteredFlashCards(selectedCategory, hideMastered);

  const handleCategoryChange = (category: CategoryFilter) => {
    const nextFlashcards = getFilteredFlashCards(category, hideMastered);

    setSelectedCategory(category);
      setShuffleOrder(null);
    setCurrentIndex(nextFlashcards.length > 0 ? 0 : -1);
  };

  const onHideMasteredChange = (value:boolean) =>{
      const nextFlashcards = getFilteredFlashCards(
    selectedCategory,
    value,
  );

  setHideMastered(value);
  setCurrentIndex(nextFlashcards.length > 0 ? 0 : -1);
  }

  const handleShuffle = () => {
  const shuffledIds = shuffleArray(
    filteredFlashcards.map((flashcard) => flashcard.id),
  );

  setShuffleOrder(shuffledIds);
  setCurrentIndex(shuffledIds.length > 0 ? 0 : -1);
};

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_344px]">
        <section className="flex flex-col gap-4 outlined-surface hard-shadow py-4 rounded-2xl">
         <StudyControl
         hideMastered={hideMastered}
         onHideMasteredChange={onHideMasteredChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
            onShuffle={handleShuffle}
        />

          {currentFlashcard ? (
            <StudyCard key={currentFlashcard.id} flashCard={currentFlashcard} />
          ) : (
            <p>No flashcards match the selected filters.</p>
          )}

          <StudyActions onKnow={handleKnow} onReset={handleReset} />

          <StudyNavigation onNext={handleNext} onPrev={handlePrev} />
        </section>

        <aside className="w-full  lg:max-w-[392px]">
          <StudyStatistics statistics={getStudyStatistics(flashcards)} />
        </aside>
      </div>
    </main>
  );
};
