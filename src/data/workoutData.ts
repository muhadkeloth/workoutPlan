import { WorkoutDay } from '../types';

export const workoutDays: WorkoutDay[] = [
  { 
    day: 'Monday', 
    badge: 'Fat Burn', 
    type: 'burn', 
    desc: 'HIIT + Cardio (40 min)', 
    exercises: [
      { name: 'Jumping jacks', detail: '3 × 40 reps' },
      { name: 'Burpees', detail: '3 × 12 reps' },
      { name: 'High knees', detail: '3 × 30 sec' },
      { name: 'Mountain climbers', detail: '3 × 30 sec' },
      { name: 'Dumbbell swing (hip hinge)', detail: '3 × 15 reps — 5kg each' },
      { name: 'Jump squats', detail: '3 × 15 reps' },
      { name: 'Plank hold', detail: '3 × 45 sec' },
    ]
  },
  { 
    day: 'Tuesday', 
    badge: 'Chest + Triceps', 
    type: 'muscle', 
    desc: 'Dumbbell strength (45 min)', 
    exercises: [
      { name: 'Dumbbell bench press (floor)', detail: '4 × 12 — 5kg each' },
      { name: 'Dumbbell fly (floor)', detail: '3 × 12 — 5kg each' },
      { name: 'Push-ups (wide grip)', detail: '4 × 15' },
      { name: 'Dumbbell overhead tricep extension', detail: '3 × 12 — one 5kg held with both hands' },
      { name: 'Diamond push-ups', detail: '3 × 10' },
      { name: 'Dips (chair/bench)', detail: '3 × 12' },
    ]
  },
  { 
    day: 'Wednesday', 
    badge: 'Back + Biceps', 
    type: 'muscle', 
    desc: 'Dumbbell strength (45 min)', 
    exercises: [
      { name: 'Dumbbell bent-over row', detail: '4 × 12 — 5kg each' },
      { name: 'Single-arm dumbbell row', detail: '3 × 12 each side — 5kg' },
      { name: 'Dumbbell bicep curl', detail: '4 × 12 — 5kg each' },
      { name: 'Hammer curl', detail: '3 × 12 — 5kg each' },
      { name: 'Superman hold (back extension)', detail: '3 × 15' },
      { name: 'Chin-up (if available) or inverted row', detail: '3 × 8' },
    ]
  },
  { 
    day: 'Thursday', 
    badge: 'Fat Burn', 
    type: 'burn', 
    desc: 'HIIT + Core (40 min)', 
    exercises: [
      { name: 'Skipping / shadow boxing', detail: '5 min warmup' },
      { name: 'Dumbbell thrusters', detail: '3 × 15 — 5kg each' },
      { name: 'Bicycle crunches', detail: '3 × 25' },
      { name: 'Leg raises', detail: '3 × 15' },
      { name: 'Russian twists (with 5kg dumbbell)', detail: '3 × 20' },
      { name: 'Side plank', detail: '3 × 30 sec each side' },
      { name: 'Burpees', detail: '3 × 10' },
    ]
  },
  { 
    day: 'Friday', 
    badge: 'Shoulders + Traps', 
    type: 'muscle', 
    desc: 'Dumbbell strength (45 min)', 
    exercises: [
      { name: 'Dumbbell shoulder press', detail: '4 × 12 — 5kg each' },
      { name: 'Lateral raise', detail: '3 × 15 — 5kg each' },
      { name: 'Front raise', detail: '3 × 12 — 5kg each' },
      { name: 'Dumbbell shrugs', detail: '3 × 15 — 5kg each' },
      { name: 'Arnold press', detail: '3 × 10 — 5kg each' },
      { name: 'Face pulls (resistance band or dumbbell pull-apart)', detail: '3 × 15' },
    ]
  },
  { 
    day: 'Saturday', 
    badge: 'Legs + Glutes', 
    type: 'muscle', 
    desc: 'Dumbbell strength (45 min)', 
    exercises: [
      { name: 'Dumbbell goblet squat', detail: '4 × 15 — hold 5kg' },
      { name: 'Dumbbell lunges', detail: '3 × 12 each leg — 5kg each' },
      { name: 'Romanian deadlift', detail: '4 × 12 — 5kg each' },
      { name: 'Dumbbell calf raises', detail: '3 × 20 — 5kg each' },
      { name: 'Glute bridges (with dumbbell on hips)', detail: '3 × 15 — 5kg' },
      { name: 'Sumo squat', detail: '3 × 15 — hold one 5kg' },
    ]
  },
  { 
    day: 'Sunday', 
    badge: 'Rest & Recovery', 
    type: 'rest', 
    desc: '15 min light stretch + face yoga only', 
    exercises: [
      { name: 'Full body stretch', detail: '10 min — hamstrings, hip flexors, shoulders' },
      { name: 'Deep breathing / box breathing', detail: '5 min' },
      { name: 'Face yoga full routine', detail: '10 min' },
      { name: 'Walk 20–30 min (light)', detail: 'Optional but recommended' },
    ]
  },
];
