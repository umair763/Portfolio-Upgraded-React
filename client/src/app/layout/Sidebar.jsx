import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaLaptopCode, 
  FaBriefcase, 
  FaBlog, 
  FaEnvelope, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUser /> },
    { name: 'Skills', path: '/skills', icon: <FaLaptopCode /> },
    { name: 'Projects', path: '/projects', icon: <FaBriefcase /> },
    { name: 'Experience', path: '/experience', icon: <FaBlog /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: {
      width: '250px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      width: '80px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };

  const profileVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 }
  };

  // For mobile: check if screen width is less than 768px
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* Mobile menu toggle */}
      {isMobile && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-full shadow-lg"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <motion.div 
        className={`sidebar ${isMobile ? 'fixed left-0 top-0 z-40' : ''}`}
        variants={sidebarVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial="open"
      >
        <div className="flex flex-col h-full p-4">
          {/* Profile Section */}
          <div className="text-center mb-8 mt-4">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="/assets/profile.jpg" 
                alt="Muhammad Umair" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/100';
                }}
              />
            </div>
            
            <motion.div
              variants={profileVariants}
              animate={isOpen ? 'open' : 'closed'}
              initial="open"
              className="mt-2"
            >
              <h3 className="text-lg font-semibold text-white">Muhammad Umair</h3>
              <p className="text-xs text-gray-300 mt-1">Frontend Developer</p>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `sidebar-link flex items-center py-3 px-4 rounded-lg ${
                        isActive ? 'active-link' : ''
                      }`
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    
                    {isOpen && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ml-3"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Toggle Button (for desktop) */}
          {!isMobile && (
            <button 
              onClick={toggleSidebar}
              className="mt-4 p-2 bg-gray-700 rounded-full self-end text-white"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;