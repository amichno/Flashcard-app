type StudyNavigationProps = {
  onNext: () => void;
  onPrev: () => void;
};

export const StudyNavigation = ({ onNext, onPrev }: StudyNavigationProps) => {
  return (
    <div className='flex justify-between px-4'>
      <button className='w-[125px] h-[43px] outlined-surface' onClick={onPrev}>
        <div className='w-full flex justify-center items-center gap-2'>
          <svg
            viewBox='0 0 24 24'
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              d='M15 18l-6-6 6-6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>Prev</span>
        </div>
      </button>
      <button
        className='w-[125px] h-[43px] outlined-surface flex'
        onClick={onNext}
      >
        <div className='w-full flex justify-center items-center gap-2'>
          <span>Next</span>
          <svg
            viewBox='0 0 24 24'
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              d='M9 6l6 6-6 6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
