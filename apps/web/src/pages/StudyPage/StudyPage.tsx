import { StudyCard } from '../../app/components/StudyCard';
import { StudyControl } from '../../app/components/StudyControls';
import { FlashCard } from '../../features/flashcards/Types/flashCard';

export const StudyPage = () => {
  const emptyCard: FlashCard = {
    id: '',
    question: 'question hereee',
    answer: 'some answer ererer',
    category: 'React',
    knownCount: 0,
  };
  return (
    <main className='mx-auto max-w-[1440px] px-4 py-6'>
      <div className='grid gap-6 lg:grid-cols-[1fr_280px]'>
        <section className='flex flex-col gap-4'>
          <StudyControl />

          <StudyCard flashCard={emptyCard} />

          <div>Study actions</div>

          <div>Study navigation</div>
        </section>

        <aside>
          <div>Study statistics</div>
        </aside>
      </div>
    </main>
  );
};
