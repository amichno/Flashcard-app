import { CATEGORY_FILTER } from '../constants/filters';
import { FlashcardCategory } from './flashCard';

export type CategoryFilter = FlashcardCategory | typeof CATEGORY_FILTER.ALL;
