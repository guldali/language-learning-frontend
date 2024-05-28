import { Course } from './course.model';
export interface UserProgress {
  id: number;
  userId: string;
  courseId: number;
  description: string;
  title: string;
  completedLessons: number;
  completedQuizzes: number;
  course: Course;
}
