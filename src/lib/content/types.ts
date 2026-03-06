export type LessonData = {
  title: string;
  duration: string;
  content: string;
  takeaways: string[];
  exercise?: string;
};

export type CourseContent = Record<string, LessonData>;

export type MultipleChoiceQuestion = {
  type: "mc";
  question: string;
  options: string[];
  correctIndex: number;
};

export type ShortAnswerQuestion = {
  type: "short";
  question: string;
  minLength: number;
};

export type QuizQuestion = MultipleChoiceQuestion | ShortAnswerQuestion;

export type ModuleQuiz = {
  title: string;
  questions: QuizQuestion[];
};

export type CourseQuizzes = Record<string, ModuleQuiz>;
