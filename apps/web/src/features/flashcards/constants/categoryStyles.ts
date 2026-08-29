export const KNOW_COUNT_CATEGORY = {
  MASTERED: 'Mastered',
  IN_PROGRESS: 'In progress',
  NOT_STARTED: 'Not started',
  TOTAL: 'Total',
};

export const CATEGORY_CONFIG = {
  [KNOW_COUNT_CATEGORY.TOTAL]: {
    background: 'bg-blue-300',
  },
  [KNOW_COUNT_CATEGORY.MASTERED]: {
    background: 'bg-teal-400',
  },
  [KNOW_COUNT_CATEGORY.IN_PROGRESS]: {
    background: 'bg-pink-500',
  },
  [KNOW_COUNT_CATEGORY.NOT_STARTED]: {
    background: 'bg-pink-400',
  },
} as const;
