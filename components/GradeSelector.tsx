
import React from 'react';
import { GradeLevel } from '../types';

interface GradeSelectorProps {
  onSelect: (grade: GradeLevel) => void;
}

const GradeSelector: React.FC<GradeSelectorProps> = ({ onSelect }) => {
  return (
    <div className="text-center relative">
      {/* Decorative Graphics */}
      <div className="absolute -top-10 -left-10 text-6xl animate-float opacity-30 select-none hidden lg:block">➕</div>
      <div className="absolute top-20 -right-20 text-6xl animate-float-delayed opacity-30 select-none hidden lg:block">➗</div>
      <div className="absolute bottom-0 -left-20 text-6xl animate-float-delayed opacity-30 select-none hidden lg:block">📏</div>
      <div className="absolute -bottom-20 -right-10 text-6xl animate-float opacity-30 select-none hidden lg:block">📐</div>

      <div className="mb-12 animate-in fade-in zoom-in duration-1000">
        <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <span className="text-5xl">🧭</span>
        </div>
        <h2 className="text-5xl font-brand text-sky-800 mb-4 font-bold">Welcome, Explorer!</h2>
        <p className="text-gray-500 text-2xl max-w-xl mx-auto leading-relaxed">
            Ready to chart your course through the world of math? 
            Pick your grade and let's begin the quest!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <button 
          onClick={() => onSelect(GradeLevel.GRADE_4)}
          className="group relative bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-8 border-transparent hover:border-sky-400"
        >
          <div className="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">🎒</div>
          <h3 className="text-4xl font-brand text-sky-600 font-bold">4th Grade</h3>
          <p className="text-gray-400 mt-4 text-lg">Mastering Fractions, Division, and Patterns</p>
          <div className="mt-8 flex justify-center">
            <span className="bg-sky-50 text-sky-600 px-6 py-2 rounded-full font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">Start Mission</span>
          </div>
        </button>

        <button 
          onClick={() => onSelect(GradeLevel.GRADE_5)}
          className="group relative bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-8 border-transparent hover:border-amber-400"
        >
          <div className="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">🔭</div>
          <h3 className="text-4xl font-brand text-amber-600 font-bold">5th Grade</h3>
          <p className="text-gray-400 mt-4 text-lg">Exploring Decimals, Volume, and Geometry</p>
          <div className="mt-8 flex justify-center">
            <span className="bg-amber-50 text-amber-600 px-6 py-2 rounded-full font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors">Start Mission</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GradeSelector;
