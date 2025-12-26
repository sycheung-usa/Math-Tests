
import React, { useState, useEffect } from 'react';
import { Question, Difficulty } from '../types';
import { gemini } from '../services/geminiService';

interface ResultViewProps {
  results: { 
    score: number, 
    total: number, 
    bonusScore?: number, 
    bonusTotal?: number,
    answers: any[],
    time?: number
  };
  questions: Question[];
  topic: string;
  difficulty: Difficulty;
  onRestart: () => void;
  onNextDifficulty?: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ results, questions, topic, difficulty, onRestart, onNextDifficulty }) => {
  const percentage = Math.round((results.score / results.total) * 100);
  const [aiExplanations, setAiExplanations] = useState<Record<string, { loading: boolean, text?: string }>>({});
  const [bestTime, setBestTime] = useState<number | null>(null);

  useEffect(() => {
    // Confetti on perfect score
    if (percentage >= 100 && (window as any).confetti) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        (window as any).confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        (window as any).confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }

    // Scoreboard logic
    const scoreKey = `best_time_${topic}_${difficulty}`;
    const storedBest = localStorage.getItem(scoreKey);
    const currentTime = results.time || 9999;

    if (!storedBest || currentTime < parseInt(storedBest)) {
      localStorage.setItem(scoreKey, currentTime.toString());
      setBestTime(currentTime);
    } else {
      setBestTime(parseInt(storedBest));
    }
  }, [percentage, results.time, topic, difficulty]);

  const handleAskAi = async (q: Question, userAns: any) => {
    setAiExplanations(prev => ({ ...prev, [q.id]: { loading: true } }));
    
    let userDisplayAnswer = userAns;
    let correctDisplayAnswer = "";

    if (q.type === 'multiple-choice') {
      userDisplayAnswer = q.options ? q.options[userAns] : userAns;
      correctDisplayAnswer = q.options ? q.options[q.correctAnswer as number] : "";
    } else {
      correctDisplayAnswer = q.correctAnswer as string;
    }

    const explanation = await gemini.getMathExplanation(q.text, userDisplayAnswer, correctDisplayAnswer, q.difficulty);
    setAiExplanations(prev => ({ ...prev, [q.id]: { loading: false, text: explanation } }));
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const hasBonus = results.bonusTotal && results.bonusTotal > 0;

  const nextLevelName = difficulty === Difficulty.EASY ? 'Medium' : difficulty === Difficulty.MEDIUM ? 'Hard' : '';

  return (
    <div className="max-w-3xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <div className="inline-block relative">
           <svg className="w-56 h-56 drop-shadow-2xl" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
             <circle cx="50" cy="50" r="45" fill="none" stroke={percentage >= 100 ? '#10b981' : '#0ea5e9'} strokeWidth="10" 
                     strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * Math.min(100, percentage)) / 100}
                     strokeLinecap="round" className="transition-all duration-1500 ease-out" />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-6xl font-brand font-black text-sky-600">{percentage}%</span>
           </div>
        </div>
        
        <h2 className="text-5xl font-brand text-sky-800 mt-8 font-bold">
          {percentage >= 100 ? 'Mission Perfect! 🚀' : percentage >= 80 ? 'Elite Explorer! 🌟' : percentage >= 50 ? 'Great Progress! 👍' : 'Keep Training! 💪'}
        </h2>
        
        {/* Scoreboard & Time Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-sky-50">
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">Final Score</span>
                <span className="text-4xl font-brand font-black text-sky-600">{results.score} / {results.total}</span>
                {hasBonus && <div className="text-amber-500 text-xs font-bold mt-2">✨ Includes {results.bonusScore} Bonus Pts</div>}
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-amber-50">
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">Time Records</span>
                <div className="flex justify-around items-end">
                    <div className="flex flex-col">
                        <span className="text-2xl font-brand font-bold text-amber-600">{formatTime(results.time || 0)}</span>
                        <span className="text-[10px] text-gray-400 font-bold">QUEST TIME</span>
                    </div>
                    <div className="w-px h-8 bg-gray-100"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-brand font-bold text-green-600">{formatTime(bestTime || 0)}</span>
                        <span className="text-[10px] text-gray-400 font-bold">ALL-TIME BEST</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="text-3xl font-brand text-sky-700 border-b-4 border-sky-100 pb-3 flex justify-between items-center">
          <span>Mission Logs</span>
          <span className="text-sm bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">{difficulty} • {topic}</span>
        </h3>
        
        {questions.map((q, idx) => {
          const userAnsObj = results.answers.find(a => a.questionId === q.id);
          const isCorrect = userAnsObj?.isCorrect;
          const isBonus = idx >= results.total;
          
          let userDisplay = "";
          let correctDisplay = "";

          if (q.type === 'multiple-choice') {
            userDisplay = q.options ? q.options[userAnsObj?.selectedOption] : "";
            correctDisplay = q.options ? q.options[q.correctAnswer as number] : "";
          } else {
            userDisplay = userAnsObj?.selectedOption;
            correctDisplay = q.correctAnswer as string;
          }

          return (
            <div key={q.id + idx} className={`bg-white rounded-[3rem] p-10 shadow-lg border-4 transition-all hover:shadow-2xl ${isCorrect ? 'border-green-100' : 'border-red-100'} ${isBonus ? 'ring-8 ring-amber-50 ring-offset-4' : ''}`}>
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <span className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isCorrect ? 'Success!' : 'Reviewing'}
                    </span>
                    {isBonus && <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">Bonus Gem</span>}
                </div>
                <span className="text-gray-100 font-brand text-4xl font-black">#{idx + 1}</span>
              </div>
              
              <p className="text-gray-800 font-bold text-2xl mb-8 leading-relaxed">{q.text}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className={`p-6 rounded-[2rem] border-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <span className="text-xs text-gray-400 block mb-2 font-black uppercase tracking-wider">Your Answer</span>
                  <span className={`text-xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {userDisplay} {q.type === 'numerical' && q.units}
                  </span>
                </div>
                {(!isCorrect || q.type === 'open-ended') && (
                  <div className="p-6 rounded-[2rem] border-4 bg-green-50 border-green-100">
                    <span className="text-xs text-gray-400 block mb-2 font-black uppercase tracking-wider">Correct Target</span>
                    <span className="text-xl font-black text-green-700">{correctDisplay} {q.type === 'numerical' && q.units}</span>
                  </div>
                )}
              </div>

              <div className="bg-sky-50 rounded-[2rem] p-8 text-sky-800 text-lg leading-relaxed mb-8 flex gap-5 items-start">
                <span className="text-3xl mt-1">📝</span>
                <div>
                  <strong className="block mb-2 text-sky-900 text-xl">The Solution Path:</strong>
                  {q.explanation}
                </div>
              </div>

              <div className="pt-6 border-t-2 border-gray-50">
                {!aiExplanations[q.id] ? (
                  <button 
                    onClick={() => handleAskAi(q, userAnsObj?.selectedOption)}
                    className="w-full flex items-center justify-center gap-3 text-amber-700 hover:text-white font-black text-lg bg-amber-50 hover:bg-amber-500 px-8 py-5 rounded-[2rem] transition-all shadow-md active:scale-95"
                  >
                    <span>🤖 Ask Tutor for Help</span>
                  </button>
                ) : (
                  <div className="bg-amber-50 rounded-[2rem] p-10 border-4 border-amber-100 animate-in fade-in zoom-in-95">
                    {aiExplanations[q.id].loading ? (
                      <div className="flex flex-col items-center gap-4 text-amber-600 py-6">
                        <div className="animate-spin rounded-full h-12 w-12 border-8 border-amber-600 border-t-transparent"></div>
                        <span className="text-xl font-black italic">Analyzing your work...</span>
                      </div>
                    ) : (
                      <div className="text-amber-900 text-xl leading-relaxed whitespace-pre-wrap">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center text-3xl shadow-inner">🤖</div>
                           <span className="font-brand text-2xl font-black text-amber-800 underline decoration-amber-300">Tutor's Deep Insight</span>
                        </div>
                        {aiExplanations[q.id].text}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-6">
        <button 
          onClick={onRestart}
          className="px-12 py-6 bg-white border-4 border-sky-500 text-sky-500 rounded-[3rem] font-black text-2xl hover:bg-sky-50 transition-all shadow-xl"
        >
          Return to Hub 🏠
        </button>
        {onNextDifficulty && (
            <button 
                onClick={onNextDifficulty}
                className="px-12 py-6 bg-sky-500 text-white rounded-[3rem] font-black text-2xl hover:bg-sky-600 shadow-2xl hover:shadow-sky-300 transform hover:-translate-y-2 transition-all active:translate-y-0"
            >
                Try {nextLevelName} Level! 🚀
            </button>
        )}
      </div>
    </div>
  );
};

export default ResultView;
