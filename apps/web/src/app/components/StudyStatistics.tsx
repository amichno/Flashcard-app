import type { StudyStatistics as StudyStatisticsType } from '../../features/flashcards/types/studyStatistics';

type StudyStatisticsProps = {
  statistics: StudyStatisticsType;
};

export const StudyStatistics = ({ statistics }: StudyStatisticsProps) => {
  const { total, notStarted, inProgress, mastered } = statistics;

  return (
    <div className='rounded-3xl border-2 border-[var(--ui-border-color)] bg-white p-5'>
      <h2 className='mb-4 text-lg font-semibold'>Study statistics</h2>

      <div className='flex flex-col gap-3'>
        <StatisticRow label={'Total cards'} value={total} />

        <StatisticRow label={'Mastered'} value={mastered} />

        <StatisticRow label={'In Progress'} value={inProgress} />

        <StatisticRow label={'Not started'} value={notStarted} />
      </div>
    </div>
  );
};

type StatisticRowProps = {
  label: string;
  value: number;
};

const StatisticRow = ({ label, value }: StatisticRowProps) => {
  return (
    <div className='flex items-center justify-between  '>
      <span className='text-sm'>{label}</span>

      <span className='font-semibold'>{value}</span>
    </div>
  );
};
