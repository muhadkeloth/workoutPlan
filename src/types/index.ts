export interface Exercise {
  name: string;
  detail: string;
}

export interface WorkoutDay {
  day: string;
  badge: string;
  type: 'burn' | 'muscle' | 'rest';
  desc: string;
  exercises: Exercise[];
}

export interface Meal {
  time: string;
  food: string;
  kcal: string;
}

export interface FaceStep {
  name: string;
  detail: string;
}

export interface Reminder {
  time: string;
  label: string;
}

export interface Stats {
  dailyKcal: string;
  targetBodyFat: string;
  shredPhase: string;
  protein: string;
  carbs: string;
  fats: string;
}

export type TabType = 'workout' | 'diet' | 'face' | 'reminders' | 'tracker';

export interface TrackerItem {
  id: number;
  text: string;
  completed: boolean;
}
