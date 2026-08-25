import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>Flashcard Header</div>
      <nav>
        <NavLink
          to='/study'
          className={({ isActive }) =>
            isActive
              ? 'rounded-full bg-amber-300 px-4 py-2 font-semibold text-slate-900'
              : 'rounded-full px-4 py-2 text-slate-500'
          }
        >
          Study Mode
        </NavLink>
        <NavLink to='/cards'>All cards</NavLink>
        <div className='bg-red-500 p-8 text-white'>TEST</div>
      </nav>
    </header>
  );
};
