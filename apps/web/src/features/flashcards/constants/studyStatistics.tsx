import totalIcon from '../../../assets/images/icon-stats-total.svg';
import masteredIcon from '../../../assets/images/icon-stats-mastered.svg';
import progressIcon from '../../../assets/images/icon-stats-in-progress.svg';
import notStartedIcon from '../../../assets/images/icon-stats-not-started.svg';

export type StudyStatistics = {
  total: number;
  mastered: number;
  inProgress: number;
  notStarted: number;
};

export type StudyStatisticType = keyof StudyStatistics;

export const STUDY_STATISTIC = {
  total: {
    label: 'Total Cards',
    backgroundColor: 'bg-[#8BA8E5]',
    icon: totalIcon,
  },
  mastered: {
    label: 'Mastered',
    backgroundColor: 'bg-[#49CFC7]',
    icon: masteredIcon,
  },
  inProgress: {
    label: 'In Progress',
    backgroundColor: 'bg-[#EA68A1]',
    icon: progressIcon,
  },
  notStarted: {
    label: 'Not Started',
    backgroundColor: 'bg-[#EB70DC]',
    icon: notStartedIcon,
  },
} satisfies Record<
  StudyStatisticType,
  {
    label: string;
    backgroundColor: string;
    icon: string;
  }
>;
