
export enum GradeLevel {
  GRADE_4 = '4th Grade',
  GRADE_5 = '5th Grade'
}

export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

export type QuestionType = 'multiple-choice' | 'numerical' | 'open-ended';

export type Subject = 'Fractions' | 'Decimals' | 'Geometry' | 'Measurement' | 'Algebra' | 'Operations' | 'Advanced Operations' | 'Fraction Hero';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[]; // Only for multiple-choice
  correctAnswer?: number | string | string[]; // Index for MC, string for numerical/open
  units?: string; // For numerical input
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  explanation: string;
  hint: string;
  subject: Subject;
  difficulty: Difficulty;
}

export interface Topic {
  name: Subject;
  description: string;
  questions: {
    [key in Difficulty]: Question[];
  };
}

export interface CurriculumData {
  grade: GradeLevel;
  topics: Topic[];
}
