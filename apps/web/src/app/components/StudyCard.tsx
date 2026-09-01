import { useState } from 'react';
import { FlashCard } from '../../features/flashcards/Types/flashCard';
import { getBackgroundColor } from '../../features/flashcards/utils/getBackgroundColor';
import {
  CATEGORY_CONFIG,
  KNOW_COUNT_CATEGORY,
} from '../../features/flashcards/constants/categoryStyles';
import { MASTERY_THRESHOLD } from '../../features/flashcards/constants/flashCards';

type StudyCardProps = {
  flashCard: FlashCard;
};

export const StudyCard = ({ flashCard }: StudyCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { category, question, answer, knownCount } = flashCard;
  const backgroundColor =
    CATEGORY_CONFIG[getBackgroundColor(knownCount)].background;

  const progress = Math.min((knownCount / MASTERY_THRESHOLD) * 100, 100);

  return (
    <div
      className={`outlined-surface  ${isRevealed ? CATEGORY_CONFIG[KNOW_COUNT_CATEGORY.TOTAL].background : backgroundColor} min-h-[380px] p-6 rounded-3xl w-full hard-shadow flex flex-col justify-between `}
    >
      <div className='flex justify-center '>
        <span
          className={`rounded-full border bg-white px-3 py-1 text-x hard-shadow`}
        >
          {category}
        </span>
      </div>
      <button
        className='w-full h-full'
        onClick={() => setIsRevealed((prevState) => !prevState)}
      >
        {isRevealed ? (
          <>
            <span className='mb-2 text-sm'>Answer:</span>

            <p className='text-xl font-semibold'>{answer}</p>
          </>
        ) : (
          <>
            <h2 className='text-3xl font-bold'>{question}</h2>

            <span className='mt-3 text-sm py-4'>Click to reveal answer</span>
          </>
        )}
      </button>
      <div className='mt-auto flex items-center justify-center gap-2'>
        <div className='h-2 w-16 overflow-hidden rounded-full border border-[var(--ui-border-color)] bg-white'>
          <div
            className='h-full bg-[var(--ui-border-color)] transition-[width] duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className='text-xs font-medium'>
          {knownCount}/{MASTERY_THRESHOLD}
        </span>
      </div>
    </div>
  );
};
