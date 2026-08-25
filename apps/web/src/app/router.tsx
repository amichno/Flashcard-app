import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { StudyPage } from '../pages/StudyPage/StudyPage';
import { AllCardsPage } from '../pages/AllCardsPages/AllCardsPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <StudyPage /> },
      { path: '/study', element: <StudyPage /> },
      { path: '/cards', element: <AllCardsPage /> },
    ],
  },
]);
