import React from 'react';

export const VisualHeader: React.FC = () => {
  return (
    <div className="bg-[#f7f5e6] border-b border-stone-200 py-3 md:py-6 px-4 flex flex-col items-center justify-center text-center shadow-sm shrink-0">
      <div className="w-10 h-10 md:w-20 md:h-20 mb-2 md:mb-3 rounded-full bg-green-100 flex items-center justify-center overflow-hidden border-2 border-green-600 shadow-md">
        {/* Symbolic Tree Visual using SVG */}
        <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-16 md:h-16 text-green-700 fill-current">
          <path d="M50 85 C50 85 45 85 40 95 H60 C55 85 50 85 50 85 V60 C60 55 70 50 75 40 C80 30 70 20 60 25 C65 15 55 5 45 10 C40 5 30 10 30 20 C20 15 10 25 20 35 C15 45 25 55 40 55 V85 Z" />
          <circle cx="20" cy="35" r="3" className="text-orange-400 fill-current" />
          <circle cx="30" cy="20" r="3" className="text-orange-400 fill-current" />
          <circle cx="45" cy="10" r="3" className="text-orange-400 fill-current" />
          <circle cx="60" cy="25" r="3" className="text-orange-400 fill-current" />
          <circle cx="75" cy="40" r="3" className="text-orange-400 fill-current" />
          <circle cx="35" cy="45" r="3" className="text-orange-400 fill-current" />
          <circle cx="55" cy="35" r="3" className="text-orange-400 fill-current" />
        </svg>
      </div>
      <h1 className="text-lg md:text-3xl font-serif font-bold text-green-900 mb-0 md:mb-1">Inspired Volunteer ChatBot</h1>
      <p className="text-xs md:text-base text-stone-600 font-medium italic hidden md:block">"Ask anything to be a Responsible & Inspired Volunteer!"</p>
    </div>
  );
};