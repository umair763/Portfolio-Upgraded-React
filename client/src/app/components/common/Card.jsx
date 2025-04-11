import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'card';
  
  const variantClasses = {
    default: 'bg-white dark:bg-dark-light',
    primary: 'bg-primary-light/10',
    success: 'bg-green-100 dark:bg-green-900/20',
    warning: 'bg-yellow-100 dark:bg-yellow-900/20',
  };
  
  const hoverClasses = hover ? 'hover:shadow-custom-md hover:-translate-y-1' : '';
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;