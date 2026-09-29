import type { FlashCard } from "../../../features/flashcards/types/flashCard";
import { MASTERY_THRESHOLD } from "../../../features/flashcards/constants/flashCards";

type AllCardsItemProps = {
  flashcard: FlashCard;
};

export const FlashcardGridItem = ({ flashcard }: AllCardsItemProps) => {
  const { question, answer, category, knownCount } = flashcard;

  const isMastered = knownCount >= MASTERY_THRESHOLD;

  const progress = Math.min((knownCount / MASTERY_THRESHOLD) * 100, 100);

  return (
    <article className="flex min-h-[220px] flex-col overflow-hidden rounded-xl border-2 border-[var(--ui-border-color)] bg-white">
      <div className="border-b-2 border-[var(--ui-border-color)] p-4">
        <h2 className="break-words text-base font-semibold">{question}</h2>
      </div>

      <div className="flex-1 px-4 py-3">
        <p className="mb-1 text-xs text-gray-500">Answer:</p>

        <p className="whitespace-pre-wrap break-words text-sm">{answer}</p>
      </div>

      <div className="flex items-center justify-between gap-2 border-t-2 border-[var(--ui-border-color)] px-3 py-2">
        <span
          title={category}
          className="max-w-[45%] truncate rounded-full border border-[var(--ui-border-color)] px-2 py-1 text-xs"
        >
          {category}
        </span>

        {isMastered ? (
          <span className="shrink-0 rounded-full bg-teal-300 px-2 py-1 text-xs font-semibold">
            Mastered {knownCount}/{MASTERY_THRESHOLD}
          </span>
        ) : (
          <div className="flex shrink-0 items-center gap-2">
            <div className="h-1.5 w-12 overflow-hidden rounded-full border border-[var(--ui-border-color)]">
              <div
                className="h-full bg-[var(--ui-border-color)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs">
              {knownCount}/{MASTERY_THRESHOLD}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};
