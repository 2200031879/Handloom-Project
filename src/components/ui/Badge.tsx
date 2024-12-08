import React from 'react';

interface BadgeProps {
  count: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ count, className = '' }) => {
  return (
    <span className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ${className}`}>
      {count}
    </span>
  );
};