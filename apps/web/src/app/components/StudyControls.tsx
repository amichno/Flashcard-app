export const StudyControl = () => {
  return (
    <div className='flex items-center justify-between gap-4 border-b-2 py-2 px-4'>
      <div className='flex items-center gap-2 px-4'>
        <div className='relative'>
          <select className='outlined-surface pl-4 pr-8 py-2 appearance-none'>
            <option>All Categories</option>
          </select>
          <svg
            className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2'
            viewBox='0 0 20 20'
            fill='none'
            stroke='currentColor'
          >
            <path
              d='M6 8l4 4 4-4'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <label className='flex items-center gap-2'>
          <input type='checkbox' />

          <span className='text-sm font-medium'>Hide Mastered</span>
        </label>
      </div>

      <button
        type='button'
        className='outlined-surface  px-6 py-2 font-medium '
      >
        Shuffle
      </button>
    </div>
  );
};
