import { CATEGORY } from "../../features/flashcards/constants/categoryStyles";
import { CategoryFilter, CATEGORY_FILTER } from "../../features/flashcards/constants/filters";
import chevronDownIcon from '../../assets/images/icon-chevron-down.svg';
import shuffleIcon from '../../assets/images/icon-mastered.svg';

type StudyControlProps = {
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
    hideMastered:boolean;
  onHideMasteredChange: (value:boolean) => void
  onShuffle: ()=> void
};

export const StudyControl = ({
  selectedCategory,
  onCategoryChange,
    hideMastered,
  onHideMasteredChange,
  onShuffle
}: StudyControlProps) => {
  return (
    <div className="flex flex-col  gap-3 sm:flex-row sm:items-center sm:justify-between px-4">
    <div className="flex flex-col  gap-3 sm:flex-row sm:items-center ">
      <div className="relative w-full sm:w-auto">
        <select
      value={selectedCategory}
      onChange={(event) =>
        onCategoryChange(event.target.value as CategoryFilter)
      }
      className="outlined-surface w-full px-4 py-2 sm:w-auto sm:min-w-[190px] appearance-none"
    >
      <option value={CATEGORY_FILTER.ALL}>
        All Categories
      </option>

      {Object.values(CATEGORY).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <img src={chevronDownIcon} className="absolute right-4 top-1/2 -translate-y-1/2"/>
    </div>
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={hideMastered}
          onChange={(event) =>
            onHideMasteredChange(event.target.checked)
          }
        />

        <span>Hide Mastered</span>
      </label>
      </div>
    
        <button
  type="button"
  onClick={onShuffle}
  className="outlined-surface hard-shadow flex items-center gap-2 px-4 py-2 font-medium"
>
  <img
    src={shuffleIcon}
    alt=""
    className="h-5 w-5"
  />

  Shuffle
</button>
     
    </div>
  );
};