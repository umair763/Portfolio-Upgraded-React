import React from 'react';
import { useTheme } from '@app/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <header className="py-4 px-6 flex justify-end items-center">
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-primary text-xl" />
        )}
      </button>
    </header>
  );
};

export default Header;