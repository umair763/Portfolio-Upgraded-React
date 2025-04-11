import React from 'react';

const Tag = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'tag';
  
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
    warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
    danger: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  };
  
  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;