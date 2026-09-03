type StudyNavigationProps = {
  onNext: () => void;
  onPrev: () => void;
};

export const StudyNavigation = ({ onNext, onPrev }: StudyNavigationProps) => {
  return (
    <div className='flex justify-between px-4'>
      <button className='w-[125px] h-[43px] outlined-surface' onClick={onPrev}>
        Prev
      </button>
      <button className='w-[125px] h-[43px] outlined-surface' onClick={onNext}>
        Next
      </button>
    </div>
  );
};
