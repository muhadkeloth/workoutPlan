import { Meal } from '../types';

export const meals: Meal[] = [
  { time: '6:30 AM', food: 'Warm water + lemon + ginger (empty stomach)', kcal: '0' },
  { time: '7:00 AM', food: 'Pre-workout: 2 boiled eggs + 1 banana or oats (small bowl)', kcal: '~250' },
  { time: '10:00 AM', food: 'Breakfast: Egg white omelette (4 whites) + brown bread (2 slices) + black coffee', kcal: '~320' },
  { time: '1:00 PM', food: 'Lunch: Brown rice (1 small cup) + grilled chicken/fish 150g + vegetable sabzi + salad', kcal: '~520' },
  { time: '4:00 PM', food: 'Snack: Moong sprouts + cucumber salad OR Greek yogurt (low fat)', kcal: '~150' },
  { time: '7:30 PM', food: 'Post-workout: Protein shake (if available) OR 2 boiled eggs + a handful of roasted chana', kcal: '~200' },
  { time: '8:30 PM', food: 'Dinner: Grilled fish/chicken 150g + sautéed veggies + 1 chapati (wheat)', kcal: '~400' },
  { time: '10:00 PM', food: 'Before sleep: 1 glass warm turmeric milk (low fat) OR green tea', kcal: '~60' },
];

export const freeFoods = [
  'Egg whites', 'chicken breast', 'fish (sardines, tuna, mackerel)', 
  'moong dal', 'brown rice', 'oats', 'sweet potato', 'cucumber', 
  'spinach', 'tomato', 'papaya', 'coconut water', 'black coffee', 'green tea'
];

export const avoidFoods = [
  'White rice (large portions)', 'maida', 'fried snacks (chips, bonda)', 
  'sugary drinks', 'alcohol', 'full-fat milk in excess', 
  'packaged juices', 'late-night eating'
];

export const nutritionTip = 'Drink 3–3.5 litres of water daily. Add lemon + ginger to warm water every morning on an empty stomach.';
