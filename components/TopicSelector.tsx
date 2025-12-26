
import React, { useState } from 'react';
import { GradeLevel, Subject, Difficulty } from '../types.ts';
import { CURRICULUM } from '../constants.tsx';

interface TopicSelectorProps {
  grade: GradeLevel;
  onSelect: (topic: Subject, difficulty: Difficulty) => void;
  onBack: () => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ grade, onSelect, onBack }) => {
  const topics = CURRICULUM.find(c => c.grade === grade)?.topics || [];
  const [selectedTopic, setSelectedTopic] = useState<Subject | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);

  const handleStart = () => {
    if (selectedTopic) {
      onSelect(selectedTopic, difficulty);
    }
  };

  const getEmoji = (name: string) => {
    switch (name) {
      case 'Fractions': return '🍰';
      case 'Operations': return '🧮';
      case 'Decimals': return '🪙';
      case 'Geometry': return '📐';
      case 'Measurement': return '📏';
      case 'Algebra': return '🧬';
      case 'Advanced Operations': return '💎';
      case 'Fraction Hero': return '🦸';
      default: return '📖';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white rounded-full transition-colors text-sky-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-3xl font-brand text-sky-800">Select a Topic</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {topics.map(topic => (
          <button 
            key={topic.name}
            onClick={() => setSelectedTopic(topic.name)}
            className={`flex items-start gap-6 bg-white p-6 rounded-3xl shadow-md transition-all border-4 text-left group ${
              selectedTopic === topic.name 
                ? 'border-sky-500 ring-4 ring-sky-100' 
                : 'border-transparent hover:border-sky-200'
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
              selectedTopic === topic.name ? 'bg-sky-500 text-white' : 'bg-sky-50 text-sky-400 group-hover:bg-sky-100'
            }`}>
              <span className="text-3xl">
                {getEmoji(topic.name)}
              </span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">{topic.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{topic.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-amber-100 animate-in zoom-in-95 duration-300">
          <h3 className="text-2xl font-brand text-center text-sky-800 mb-8">Choose Difficulty Level</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`flex flex-col items-center p-6 rounded-2xl border-4 transition-all ${
                  difficulty === d
                    ? d === Difficulty.EASY ? 'border-green-400 bg-green-50' : d === Difficulty.MEDIUM ? 'border-amber-400 bg-amber-50' : 'border-red-400 bg-red-50'
                    : 'border-gray-50 hover:border-gray-200'
                }`}
              >
                <span className="text-3xl mb-2">
                  {d === Difficulty.EASY ? '🌱' : d === Difficulty.MEDIUM ? '🌲' : '🔥'}
                </span>
                <span className={`font-bold ${
                   difficulty === d 
                     ? d === Difficulty.EASY ? 'text-green-600' : d === Difficulty.MEDIUM ? 'text-amber-600' : 'text-red-600'
                     : 'text-gray-400'
                }`}>{d}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="w-full py-5 bg-sky-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-sky-600 hover:shadow-sky-100 transform hover:-translate-y-1 transition-all"
          >
            Launch Quest! 🚀
          </button>
        </div>
      )}
    </div>
  );
};

export default TopicSelector;
