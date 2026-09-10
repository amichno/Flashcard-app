import { STUDY_STATISTIC } from '../../features/flashcards/constants/studyStatistics';
import type { StudyStatistics as StudyStatisticsType } from '../../features/flashcards/types/studyStatistics';

type StudyStatisticsProps = {
  statistics: StudyStatisticsType;
};

export const StudyStatistics = ({ statistics }: StudyStatisticsProps) => {
  return (
    <div className='w-full h-full rounded-3xl border-2 hard-shadow border-[var(--ui-border-color)] bg-white p-5 sm:p-6'>
      <h2 className='mb-5 text-xl font-semibold'>Study Statistics</h2>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1'>
        {(Object.keys(STUDY_STATISTIC) as StudyStatisticType[]).map((type) => (
          <StatisticRow key={type} type={type} value={statistics[type]} />
        ))}
      </div>
    </div>
  );
};

export type StudyStatisticType = keyof typeof STUDY_STATISTIC;

type StatisticRowProps = {
  type: StudyStatisticType;
  value: number;
};

const StatisticRow = ({ type, value }: StatisticRowProps) => {
  const { label, backgroundColor, icon } = STUDY_STATISTIC[type];

  return (
    <div className='grid min-h-[120px] w-full grid-cols-[minmax(0,1fr)_96px] overflow-hidden rounded-2xl border-2 border-[var(--ui-border-color)] sm:grid-cols-[minmax(0,1fr)_110px] lg:grid-cols-[minmax(0,1fr)_124px]'>
      <div className='flex min-w-0 flex-col justify-between px-5 py-4'>
        <span className='text-sm font-medium sm:text-base'>{label}</span>

        <span className='text-3xl font-bold sm:text-4xl'>{value}</span>
      </div>

      <div
        className={`flex items-center justify-center border-l-2 border-[var(--ui-border-color)] ${backgroundColor}`}
      >
        <img src={icon} alt='' className='h-7 w-7 lg:h-9 lg:w-9' />
      </div>
    </div>
  );
};
