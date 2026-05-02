import React from 'react';
import { Stats } from '../types';

interface StatsCardProps {
  stats: Stats;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
        <div className="text-2xl sm:text-3xl font-bold text-blue-700">{stats.dailyKcal}</div>
        <div className="text-xs sm:text-sm text-blue-600 mt-1">daily kcal</div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
        <div className="text-2xl sm:text-3xl font-bold text-green-700">{stats.targetBodyFat}</div>
        <div className="text-xs sm:text-sm text-green-600 mt-1">target body fat</div>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
        <div className="text-2xl sm:text-3xl font-bold text-purple-700">{stats.shredPhase}</div>
        <div className="text-xs sm:text-sm text-purple-600 mt-1">shred phase</div>
      </div>
    </div>
  );
};

interface NutritionStatsProps {
  protein: string;
  carbs: string;
  fats: string;
}

export const NutritionStats: React.FC<NutritionStatsProps> = ({ protein, carbs, fats }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
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
  );
};
