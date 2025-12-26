
import React, { useState, useMemo, useCallback, useRef } from 'react';
import { GradeLevel, Subject, Difficulty, Question } from './types';
import { CURRICULUM } from './constants';
import GradeSelector from './components/GradeSelector';
import TopicSelector from './components/TopicSelector';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import Header from './components/Header';

const App: React.FC = () => {
  const [grade, setGrade] = useState<GradeLevel | null>(null);
  const [topic, setTopic] = useState<Subject | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isBonusRound, setIsBonusRound] = useState(false);
  const [bonusQuestions, setBonusQuestions] = useState<Question[]>([]);
  const [normalResults, setNormalResults] = useState<{ score: number, total: number, answers: any[] } | null>(null);
  const [bonusResults, setBonusResults] = useState<{ score: number, total: number, answers: any[] } | null>(null);
  
  const startTimeRef = useRef<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  const reset = useCallback(() => {
    setGrade(null);
    setTopic(null);
    setQuizStarted(false);
    setIsBonusRound(false);
    setNormalResults(null);
    setBonusResults(null);
    setBonusQuestions([]);
    setTotalTime(0);
  }, []);

  const switchGrade = useCallback((newGrade: GradeLevel) => {
    setGrade(newGrade);
    setTopic(null);
    setQuizStarted(false);
    setIsBonusRound(false);
    setNormalResults(null);
    setBonusResults(null);
    setBonusQuestions([]);
    setTotalTime(0);
  }, []);

  const selectedQuestions = useMemo(() => {
    if (!grade || !topic) return [];
    const gradeData = CURRICULUM.find(c => c.grade === grade);
    const topicData = gradeData?.topics.find(t => t.name === topic);
    return topicData?.questions[difficulty] || [];
  }, [grade, topic, difficulty]);

  const handleStartQuiz = (selectedTopic: Subject, selectedDifficulty: Difficulty) => {
    setTopic(selectedTopic);
    setDifficulty(selectedDifficulty);
    setQuizStarted(true);
    setIsBonusRound(false);
    setNormalResults(null);
    setBonusResults(null);
    startTimeRef.current = Date.now();
  };

  const handleNextDifficulty = useCallback(() => {
    let nextDiff = difficulty;
    if (difficulty === Difficulty.EASY) nextDiff = Difficulty.MEDIUM;
    else if (difficulty === Difficulty.MEDIUM) nextDiff = Difficulty.HARD;

    if (nextDiff !== difficulty && topic) {
      handleStartQuiz(topic, nextDiff);
    }
  }, [difficulty, topic]);

  const handleFinishNormalQuiz = (score: number, answers: any[], missedIndices: number[]) => {
    setNormalResults({ score, total: selectedQuestions.length, answers });
    
    if (missedIndices.length > 0) {
      const bonusSet: Question[] = [];
      const gradeData = CURRICULUM.find(c => c.grade === grade);
      const topicData = gradeData?.topics.find(t => t.name === topic);
      
      // Look for bonus pool
      const otherPools = [Difficulty.HARD, Difficulty.MEDIUM, Difficulty.EASY].filter(d => d !== difficulty);
      const pool = topicData?.questions[otherPools[0]] || [];
      
      missedIndices.forEach((_, idx) => {
        if (pool[idx]) bonusSet.push(pool[idx]);
      });

      if (bonusSet.length > 0) {
        setBonusQuestions(bonusSet);
        setIsBonusRound(true);
      } else {
        setTotalTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
        setQuizStarted(false);
      }
    } else {
      setTotalTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      setQuizStarted(false);
    }
  };

  const handleFinishBonusQuiz = (score: number, answers: any[]) => {
    setBonusResults({ score, total: bonusQuestions.length, answers });
    setTotalTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    setQuizStarted(false);
    setIsBonusRound(false);
  };

  const finalCombinedResults = useMemo(() => {
    if (!normalResults) return null;
    return {
      score: normalResults.score + (bonusResults?.score || 0),
      total: normalResults.total,
      bonusScore: bonusResults?.score || 0,
      bonusTotal: bonusResults?.total || 0,
      normalAnswers: normalResults.answers,
      bonusAnswers: bonusResults?.answers || [],
      allQuestions: [...selectedQuestions, ...bonusQuestions],
      time: totalTime
    };
  }, [normalResults, bonusResults, selectedQuestions, bonusQuestions, totalTime]);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col selection:bg-sky-200">
      <Header onHomeClick={reset} onGradeSwitch={switchGrade} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl relative">
        {!grade && (
          <GradeSelector onSelect={setGrade} />
        )}

        {grade && !quizStarted && !finalCombinedResults && (
          <TopicSelector 
            grade={grade} 
            onSelect={handleStartQuiz} 
            onBack={() => setGrade(null)} 
          />
        )}

        {quizStarted && !isBonusRound && (
          <QuizView 
            questions={selectedQuestions} 
            onFinish={handleFinishNormalQuiz} 
            onCancel={() => setQuizStarted(false)}
          />
        )}

        {quizStarted && isBonusRound && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <div className="mb-8 text-center bg-amber-100 p-8 rounded-[3rem] border-4 border-amber-400 shadow-xl">
               <h2 className="text-4xl font-brand text-amber-700 font-bold">Bonus Quest Unlocked! 💎</h2>
               <p className="text-amber-600 mt-2 font-bold text-xl">You missed {bonusQuestions.length} challenges. Recover with these bonus puzzles!</p>
            </div>
            <QuizView 
              questions={bonusQuestions} 
              onFinish={handleFinishBonusQuiz} 
              onCancel={() => setQuizStarted(false)}
              isBonusRound
            />
          </div>
        )}

        {finalCombinedResults && !quizStarted && (
          <ResultView 
            results={{
                score: finalCombinedResults.score,
                total: finalCombinedResults.total,
                bonusScore: finalCombinedResults.bonusScore,
                bonusTotal: finalCombinedResults.bonusTotal,
                answers: [...finalCombinedResults.normalAnswers, ...finalCombinedResults.bonusAnswers],
                time: finalCombinedResults.time
            }} 
            questions={finalCombinedResults.allQuestions}
            topic={topic || 'Math'}
            difficulty={difficulty}
            onRestart={reset} 
            onNextDifficulty={difficulty !== Difficulty.HARD ? handleNextDifficulty : undefined}
          />
        )}
      </main>

      <footer className="py-8 text-center text-sky-400 text-sm">
        <p>© {new Date().getFullYear()} Cupertino Math Explorer</p>
        <p className="mt-1 opacity-75 italic">Aligned with CUSD 4th & 5th Grade Learning Objectives</p>
      </footer>
    </div>
  );
};

export default App;
