export type LessonData = {
  title: string;
  duration: string;
  content: string;
  takeaways: string[];
  exercise?: string;
};

export type CourseContent = Record<string, LessonData>;
