
import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';

interface QuizViewProps {
  questions: Question[];
  onFinish: (score: number, answers: any[], missedIndices: number[]) => void;
  onCancel: () => void;
  isBonusRound?: boolean;
}

const QuizView: React.FC<QuizViewProps> = ({ questions, onFinish, onCancel, isBonusRound = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<any[]>([]);
  const [currentSelection, setCurrentSelection] = useState<any>(null);
  const [showHint, setShowHint] = useState(false);
  const [missedIndices, setMissedIndices] = useState<number[]>([]);
  const [seconds, setSeconds] = useState(0);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentSelection(null);
    setShowHint(false);
  }, [currentIndex]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (currentSelection === null || (typeof currentSelection === 'string' && currentSelection.trim() === '')) return;

    const newAnswers = [...selectedAnswers, currentSelection];
    const newMissed = [...missedIndices];
    
    let isCorrect = false;
    if (currentQuestion.type === 'multiple-choice') {
      isCorrect = currentSelection === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'numerical') {
      isCorrect = currentSelection.toString().trim().toLowerCase() === currentQuestion.correctAnswer?.toString().trim().toLowerCase();
    } else {
      isCorrect = true; 
    }

    if (!isCorrect) {
      newMissed.push(currentIndex);
    }

    setSelectedAnswers(newAnswers);
    setMissedIndices(newMissed);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const score = newAnswers.reduce((acc, ans, idx) => {
        const q = questions[idx];
        let correct = false;
        if (q.type === 'multiple-choice') correct = ans === q.correctAnswer;
        else if (q.type === 'numerical') correct = ans.toString().trim().toLowerCase() === q.correctAnswer?.toString().trim().toLowerCase();
        else correct = true;
        return correct ? acc + 1 : acc;
      }, 0);
      
      const detailedAnswers = newAnswers.map((ans, idx) => {
        const q = questions[idx];
        let correct = false;
        if (q.type === 'multiple-choice') correct = ans === q.correctAnswer;
        else if (q.type === 'numerical') correct = ans.toString().trim().toLowerCase() === q.correctAnswer?.toString().trim().toLowerCase();
        else correct = true;

        return {
          questionId: q.id,
          selectedOption: ans,
          isCorrect: correct
        };
      });

      onFinish(score, detailedAnswers, newMissed);
    }
  };

  const renderInputArea = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSelection(idx)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all transform active:scale-[0.98] ${
                  currentSelection === idx 
                    ? isBonusRound ? 'border-amber-500 bg-amber-50 shadow-inner' : 'border-sky-500 bg-sky-50 shadow-inner'
                    : 'border-gray-100 hover:border-sky-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors ${
                    currentSelection === idx 
                      ? isBonusRound ? 'bg-amber-500 text-white' : 'bg-sky-500 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-lg text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>
        );
      case 'numerical':
        return (
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Enter answer"
              value={currentSelection || ''}
              onChange={(e) => setCurrentSelection(e.target.value)}
              className="flex-grow p-6 text-2xl font-bold border-4 border-sky-100 rounded-2xl focus:border-sky-500 outline-none transition-all text-center"
              autoFocus
            />
            {currentQuestion.units && (
              <span className="text-2xl font-bold text-sky-600">{currentQuestion.units}</span>
            )}
          </div>
        );
      case 'open-ended':
        return (
          <textarea
            placeholder="Type your explanation here..."
            value={currentSelection || ''}
            onChange={(e) => setCurrentSelection(e.target.value)}
            className="w-full h-40 p-6 text-lg border-4 border-sky-100 rounded-2xl focus:border-sky-500 outline-none transition-all"
          />
        );
      default:
        return null;
    }
  };

  const renderTable = () => {
    if (!currentQuestion.tableData) return null;
    return (
      <div className="mb-8 overflow-hidden rounded-2xl border-2 border-sky-100 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-sky-50">
              {currentQuestion.tableData.headers.map((h, i) => (
                <th key={i} className="p-4 font-bold text-sky-800 border-b-2 border-sky-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentQuestion.tableData.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                {row.map((cell, j) => (
                  <th key={j} className="p-4 font-normal text-gray-700 border-b border-sky-50">{cell}</th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-4">
        <div className="flex flex-col">
          <span className={`font-bold ${isBonusRound ? 'text-amber-600' : 'text-sky-600'}`}>
            {isBonusRound ? 'Bonus Quest ' : 'Challenge '} {currentIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <span className="text-lg">⏱️</span>
            <span className="font-mono font-bold">{formatTime(seconds)}</span>
          </div>
        </div>
        <button onClick={onCancel} className="bg-red-50 text-red-400 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white text-xs transition-all font-bold">Quit Mission</button>
      </div>
      
      <div className="w-full bg-gray-200 h-4 rounded-full mb-8 overflow-hidden border-2 border-white shadow-inner">
        <div 
          className={`h-full transition-all duration-1000 ease-out ${isBonusRound ? 'bg-amber-500' : 'bg-sky-500'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={`bg-white rounded-[2.5rem] p-10 shadow-2xl border-t-[12px] ${isBonusRound ? 'border-amber-400' : 'border-sky-400'} relative`}>
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl border-4 border-sky-50">
            {currentQuestion.subject === 'Fractions' ? '🍰' : currentQuestion.subject === 'Geometry' ? '📐' : currentQuestion.subject === 'Measurement' ? '📏' : '🧮'}
        </div>

        <h3 className="text-2xl text-gray-800 font-bold mb-8 leading-relaxed">
          {currentQuestion.text}
        </h3>

        {renderTable()}

        {renderInputArea()}

        {showHint && (
          <div className="mt-8 bg-amber-50 border-2 border-amber-200 p-6 rounded-3xl text-amber-800 italic animate-in slide-in-from-top-4 duration-300 flex gap-3 items-start">
            <span className="text-2xl">💡</span>
            <div><span className="font-bold">Hint:</span> {currentQuestion.hint}</div>
          </div>
        )}

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex-1 py-5 rounded-3xl font-bold text-lg bg-white border-4 border-sky-100 text-sky-600 hover:bg-sky-50 transition-all active:scale-95 shadow-sm"
          >
            {showHint ? 'Got it!' : '💡 Need a Hint?'}
          </button>
          <button
            onClick={handleSubmit}
            disabled={currentSelection === null || (typeof currentSelection === 'string' && currentSelection.trim() === '')}
            className={`flex-[2] py-5 rounded-3xl font-bold text-2xl shadow-xl transition-all active:scale-95 ${
              (currentSelection !== null && (typeof currentSelection !== 'string' || currentSelection.trim() !== ''))
                ? isBonusRound ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-200' : 'bg-sky-500 text-white hover:bg-sky-600 shadow-sky-200'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
          >
            {currentIndex === questions.length - 1 ? 'Complete Quest' : 'Submit Answer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
