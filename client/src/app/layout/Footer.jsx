import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto">
        <p className="flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Muhammad Umair &copy; {currentYear}
        </p>
        <p className="mt-2">
          Front-End Developer specializing in modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;