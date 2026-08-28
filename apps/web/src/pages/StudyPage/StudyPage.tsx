export const StudyPage = () => {
  return (
    <main className='mx-auto w-full px-4 py-6'>
      {' '}
      <div className='grid gap-6 lg:grid-cols-[1fr_280px]'>
        <section className='flex flex-col gap-4'>
          <div>Study controls</div>

          <div>Study card</div>

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
