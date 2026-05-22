import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { WatchlistProvider } from './context/WatchListContext.tsx';
import './index.css';

import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WatchlistProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WatchlistProvider>
    </BrowserRouter>
  </StrictMode>
);
