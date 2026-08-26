import { NavLink } from 'react-router-dom';

export const Header = () => {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900'
      : 'rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-100';

  return (
    <header className='flex items-center justify-between px-3 py-4'>
      <div className='font-semibold text-slate-900'>Flashcard </div>
      <nav className='flex items-center rounded-full border border-slate-300 p-1 px-3'>
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
