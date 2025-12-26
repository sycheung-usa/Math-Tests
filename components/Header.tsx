
import React from 'react';
import { GradeLevel } from '../types';

interface HeaderProps {
  onHomeClick: () => void;
  onGradeSwitch: (grade: GradeLevel) => void;
  onQuit?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onGradeSwitch, onQuit }) => {
  return (
    <header className="bg-white shadow-sm border-b border-sky-100 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <span className="text-2xl font-bold">∑</span>
          </div>
          <h1 className="text-2xl font-brand font-bold text-sky-700 tracking-tight">
            Cupertino <span className="text-amber-500">Math</span> Explorer
          </h1>
        </button>
        
        <div className="hidden md:flex gap-6 text-sky-600 font-medium items-center">
          <button 
            onClick={() => onGradeSwitch(GradeLevel.GRADE_4)}
            className="hover:text-sky-800 transition-colors px-3 py-1 rounded-lg hover:bg-sky-50"
          >
            4th Grade
          </button>
          <button 
            onClick={() => onGradeSwitch(GradeLevel.GRADE_5)}
            className="hover:text-sky-800 transition-colors px-3 py-1 rounded-lg hover:bg-sky-50"
          >
            5th Grade
          </button>
          <div className="w-px h-6 bg-sky-100 mx-2"></div>
          <a 
            href="https://www.cusdk8.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-500 hover:text-amber-600 text-sm font-bold border-b-2 border-transparent hover:border-amber-500 transition-all"
          >
            CUSD Official
          </a>
          {onQuit && (
            <button 
              onClick={onQuit}
              className="bg-red-50 text-red-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-all shadow-sm border border-red-100"
            >
              Quit Explorer
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
