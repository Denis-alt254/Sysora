import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'rounded-xl font-bold transition-all active:scale-95';
  const variants = {
    primary: 'bg-primary text-on-primary shadow-lg shadow-primary/25 hover:bg-primary-container',
    secondary: 'bg-surface text-primary border border-outline-variant hover:bg-primary/5',
    ghost: 'text-on-surface hover:text-primary',
    dark: 'bg-on-surface text-surface hover:bg-on-surface/90',
    white: 'bg-white text-primary hover:shadow-xl'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}