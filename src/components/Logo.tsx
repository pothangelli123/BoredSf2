import React from 'react';
import { Cloud } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', size = 'medium' }: LogoProps) {
  const sizes = {
    small: {
      container: 'w-8 h-8',
      icon: 'w-5 h-5',
      text: 'text-lg',
    },
    medium: {
      container: 'w-12 h-12',
      icon: 'w-7 h-7',
      text: 'text-xl',
    },
    large: {
      container: 'w-16 h-16',
      icon: 'w-10 h-10',
      text: 'text-2xl',
    },
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className={`absolute inset-0 bg-blue-400 rounded-xl rotate-6 opacity-50`}></div>
        <div className={`relative flex items-center justify-center ${sizes[size].container} bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg`}>
          <div className="absolute inset-0 bg-white opacity-10 rounded-xl"></div>
          <Cloud className={`${sizes[size].icon} text-white`} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold ${sizes[size].text}`}>BoredSF</span>
      </div>
    </div>
  );
} 