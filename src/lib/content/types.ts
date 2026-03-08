export type KnowledgeCheck = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type LessonData = {
  title: string;
  duration: string;
  content: string;
  takeaways: string[];
  exercise?: string;
  checks?: KnowledgeCheck[];
};

export type CourseContent = Record<string, LessonData>;

export type QuizQuestion = {
  type: "mc";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type ModuleQuiz = {
  title: string;
  questions: QuizQuestion[];
};

export type CourseQuizzes = Record<string, ModuleQuiz>;
