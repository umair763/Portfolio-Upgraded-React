import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  as = 'button',
  href,
  to,
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn flex items-center justify-center font-medium rounded-lg transition-all';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'btn-outline',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
  };
  
  const sizeClasses = {
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-2 px-4',
    large: 'text-base py-3 px-6'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;