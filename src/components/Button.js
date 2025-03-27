import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  // Determine button style based on variant
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-teal-600 hover:bg-teal-700 text-white';
      case 'secondary':
        return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
      case 'outline':
        return 'bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-50';
      case 'ghost':
        return 'bg-transparent text-teal-600 hover:bg-teal-50';
      default:
        return 'bg-teal-600 hover:bg-teal-700 text-white';
    }
  };

  // Determine button padding based on size
  const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return 'py-1 px-3 text-sm';
      case 'md':
        return 'py-2 px-4 text-base';
      case 'lg':
        return 'py-3 px-6 text-lg';
      default:
        return 'py-2 px-4 text-base';
    }
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50';
  const buttonClasses = `${baseClasses} ${getButtonStyle()} ${getButtonSize()} ${className}`;

  // If 'to' prop exists, render a Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // If 'href' prop exists, render an anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
