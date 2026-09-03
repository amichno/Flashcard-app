type StudyActionsProps = {
  onKnow: () => void;
  onReset: () => void;
};

export const StudyActions = ({ onKnow, onReset }: StudyActionsProps) => {
  return (
    <div className='flex items-center justify-center gap-4 border-b-2 py-4'>
      <button
        type='button'
        onClick={onKnow}
        className='outlined-surface hard-shadow bg-yellow-400 px-5 py-2 font-semibold'
      >
        I Know This
      </button>

      <button
        type='button'
        onClick={onReset}
        className='outlined-surface px-5 py-2  hard-shadow font-semibold'
      >
        Reset Progress
      </button>
    </div>
  );
};
