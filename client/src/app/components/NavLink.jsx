import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`
        flex flex-col items-center justify-center px-2 py-3 rounded-lg text-center 
        relative cursor-pointer transition-all duration-200 
        hover:shadow-md hover:scale-105 active:scale-95
        ${isActive
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-gray-50 text-gray-700 hover:bg-blue-100'}
      `}
    >
      <span className="text-xl mb-1">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
      
      {isActive && (
        <span 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-white" 
          style={{
            width: '0%',
            animation: 'growWidth 0.3s ease forwards'
          }}
        />
      )}
      
      <style>{`
        @keyframes growWidth {
          from { width: 0%; }
          to { width: 50%; }
        }
      `}</style>
    </Link>
  );
}

export default NavLink;