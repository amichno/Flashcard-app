import { NavLink } from 'react-router-dom';
import LogoFlashCard from '../../../assets/images/logo-small.svg';

export const Header = () => {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `rounded-full border-2 px-8 py-3 text-lg font-semibold transition-colors ${
      isActive
        ? 'border-[#32190d] bg-[#ffd047]'
        : 'border-transparent bg-transparent'
    }`;

  return (
    <header className='flex items-center justify-between px-3 py-4'>
      <div className='flex justify-between items-center font-semibold text-slate-900 gap-2'>
        <img src={LogoFlashCard} className='h-10 w-10' />
        <div className='text-2xl'>Flashcard</div>
      </div>
      <nav className='flex items-center rounded-full border-with-shadow p-1 px-3'>
        <NavLink to='/study' className={getLinkClasses}>
          Study Mode
        </NavLink>
        <NavLink to='/cards' className={getLinkClasses}>
          All cards
        </NavLink>
      </nav>
    </header>
  );
};
