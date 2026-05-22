import { ThemeButton } from './components/ThemeButton';
import { Routes, Route, Navigate, NavLink, Outlet } from 'react-router-dom';
import { WatchlistPage } from './pages/WatchlistPage';
import { AddFilmPage } from './pages/AddFilmPage';


function App() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b dark:border-gray-700">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "font-bold text-blue-500" : "text-gray-600 dark:text-gray-400"}
        >
          Můj watchlist
        </NavLink>
        <NavLink 
          to="/form"
          className={({ isActive }) => isActive ? "font-bold text-blue-500" : "text-gray-600 dark:text-gray-400"}
        >
          Přidat film
        </NavLink>
        <div className="ml-auto">
          <ThemeButton />
        </div>
      </nav>

      <Outlet />


      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
