import React from 'react';
import { Meal } from '../types';
import { Apple, Coffee, Utensils } from 'lucide-react';

interface DietSectionProps {
  meals: Meal[];
  protein: string;
  carbs: string;
  fats: string;
  freeFoods: string[];
  avoidFoods: string[];
  nutritionTip: string;
}

export const DietSection: React.FC<DietSectionProps> = ({ 
  meals, 
  protein, 
  carbs, 
  fats, 
  freeFoods, 
  avoidFoods, 
  nutritionTip 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Lean shred diet plan</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">~1,900 kcal · High protein · Low sugar · Kerala-friendly</p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
          <div className="text-2xl sm:text-3xl font-bold text-orange-700">{protein}</div>
          <div className="text-xs sm:text-sm text-orange-600 mt-1">protein</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center border border-yellow-200">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-700">{carbs}</div>
          <div className="text-xs sm:text-sm text-yellow-600 mt-1">carbs</div>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center border border-pink-200">
          <div className="text-2xl sm:text-3xl font-bold text-pink-700">{fats}</div>
          <div className="text-xs sm:text-sm text-pink-600 mt-1">fats</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Sample daily meal plan</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6 space-y-3">
          {meals.map((meal, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="mb-2 sm:mb-0">
                <div className="text-xs font-medium text-gray-500 mb-1">{meal.time}</div>
                <div className="text-sm text-gray-900">{meal.food}</div>
              </div>
              <div className="flex items-center gap-2">
                <Apple className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">{meal.kcal} kcal</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Apple className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Foods to eat freely</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-sm text-gray-700 leading-relaxed">
            {freeFoods.map((food, index) => (
              <span key={index}>
                {food}{index < freeFoods.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-red-50 to-pink-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-gray-900">Foods to avoid</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-sm text-gray-700 leading-relaxed">
            {avoidFoods.map((food, index) => (
              <span key={index}>
                {food}{index < avoidFoods.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <Coffee className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800 leading-relaxed">{nutritionTip}</p>
        </div>
      </div>
    </div>
  );
};
