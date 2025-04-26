import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import QuickHomes from './QuickHomes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuickHomes />
  </StrictMode>
);
