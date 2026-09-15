import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import './index.css';
import { FlashcardProvider } from './features/flashcards/context/flashcardContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlashcardProvider>
    <RouterProvider router={router} />
    </FlashcardProvider>
  </StrictMode>,
);
