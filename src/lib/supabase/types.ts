export type Profile = {
  id: string;
  display_name: string;
  email: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
};

export type Connection = {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: "pending" | "accepted" | "declined";
  created_at: string;
};

export type ConnectionWithProfile = Connection & {
  requester: Profile;
  addressee: Profile;
};

export type Progress = {
  id: string;
  user_id: string;
  course_slug: string;
  lesson_key: string;
  completed_at: string;
};

export type QuizResult = {
  id: string;
  user_id: string;
  course_slug: string;
  module_num: string;
  passed: boolean;
  score: number;
  answers: Record<string, unknown>;
  completed_at: string;
};
