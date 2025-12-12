export interface Module {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  articleContent: string;
  quiz: Quiz;
}

export interface Quiz {
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  progress: ModuleProgress[];
}

export interface ModuleProgress {
  moduleId: number;
  completed: boolean;
  quizScore?: number;
}

export interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}
