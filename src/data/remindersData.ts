import { Reminder } from '../types';

export const reminders: Reminder[] = [
  { time: '6:30 AM', label: 'Wake up · Lemon ginger water · Face wash' },
  { time: '7:00 AM', label: 'Pre-workout meal (eggs / banana)' },
  { time: '7:30 AM', label: 'Morning face yoga (5 min)' },
  { time: '8:00 AM', label: 'Workout session starts (40-45 min)' },
  { time: '10:00 AM', label: 'Breakfast — high protein' },
  { time: '1:00 PM', label: 'Lunch — balanced macros' },
  { time: '3:30 PM', label: 'Water reminder — drink 500ml' },
  { time: '4:00 PM', label: 'Healthy snack' },
  { time: '7:00 PM', label: 'Evening workout (if split into 2 sessions)' },
  { time: '7:30 PM', label: 'Post-workout meal / protein' },
  { time: '8:30 PM', label: 'Dinner — light, high protein' },
  { time: '9:30 PM', label: 'Night face yoga (5 min)' },
  { time: '10:00 PM', label: 'Warm turmeric milk / green tea' },
  { time: '10:30 PM', label: 'Screen off · Sleep by 11 PM for muscle recovery' },
];

export const trackerItems = [
  '6:30 AM — Lemon ginger water',
  'Morning face yoga (5 min)',
  'Workout completed',
  'Protein-rich breakfast eaten',
  'Drank 1L water by noon',
  'Lunch (balanced macros)',
  'Healthy snack (no junk)',
  'Drank total 3L water',
  'Dinner (light & protein)',
  'Night face yoga (5 min)',
  'In bed by 11 PM',
];
