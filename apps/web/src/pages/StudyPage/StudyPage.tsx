import { useState } from 'react';
import { StudyActions } from '../../app/components/StudyActions';
import { StudyCard } from '../../app/components/StudyCard';
import { StudyControl } from '../../app/components/StudyControls';
import { FlashCard } from '../../features/flashcards/Types/flashCard';
import { initialFlashcards } from '../../features/flashcards/data/initialFlashcard';
import { MASTERY_THRESHOLD } from '../../features/flashcards/constants/flashCards';

export const StudyPage = () => {
  const [flashcards, setFlashcards] = useState<FlashCard[]>(initialFlashcards);

  const [currentIndex, setCurrentIndex] = useState(0);

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
  return (
    <main className='mx-auto max-w-[1440px] px-4 py-6'>
      <div className='grid gap-6 lg:grid-cols-[1fr_280px]'>
        <section className='flex flex-col gap-4 outlined-surface hard-shadow py-4 rounded-2xl'>
          <StudyControl />

          <StudyCard flashCard={currentFlashcard} />

          <StudyActions onKnow={handleKnow} onReset={handleReset} />

          <div>Study navigation</div>
        </section>

        <aside>
          <div>Study statistics</div>
        </aside>
      </div>
    </main>
  );
};
