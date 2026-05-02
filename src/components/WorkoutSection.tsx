import React, { useState } from 'react';
import { WorkoutDay } from '../types';
import { ChevronDown, ChevronUp, Flame, Dumbbell, Battery } from 'lucide-react';

interface WorkoutSectionProps {
  workoutDays: WorkoutDay[];
}

export const WorkoutSection: React.FC<WorkoutSectionProps> = ({ workoutDays }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const getDayIcon = (type: string) => {
    switch (type) {
      case 'burn':
        return <Flame className="w-4 h-4" />;
      case 'muscle':
        return <Dumbbell className="w-4 h-4" />;
      case 'rest':
        return <Battery className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'burn':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'muscle':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'rest':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDayPillColor = (type: string) => {
    switch (type) {
      case 'burn':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'muscle':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'rest':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Weekly workout split</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">6 days on, 1 rest · 10kg dumbbells (5kg × 2)</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {workoutDays.map((day, index) => (
          <div
            key={index}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium border ${getDayPillColor(day.type)}`}
          >
            {days[index]}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
          <span>Fat burn / cardio</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
          <span>Strength / lean muscle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <span>Rest & recovery</span>
        </div>
      </div>

      <div className="space-y-3">
        {workoutDays.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <button
              onClick={() => toggleDay(index)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {getDayIcon(day.type)}
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(day.type)}`}>
                  {day.badge}
                </span>
                <span className="font-semibold text-gray-900">{day.day}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden sm:block">{day.desc}</span>
                {expandedDay === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>
            
            {expandedDay === index && (
              <div className="px-4 sm:px-6 pb-4 border-t border-gray-100 animate-slide-up">
                <div className="pt-4 space-y-3">
                  {day.exercises.map((exercise, exerciseIndex) => (
                    <div key={exerciseIndex} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm font-medium text-gray-900 flex-1">{exercise.name}</span>
                      <span className="text-xs sm:text-sm text-gray-600 ml-4 text-right">{exercise.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
