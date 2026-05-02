import React from 'react';
import { Reminder, TrackerItem } from '../types';
import { Clock, CheckCircle, Circle, Trophy } from 'lucide-react';

interface RemindersSectionProps {
  reminders: Reminder[];
  trackerItems: TrackerItem[];
  onToggleTracker: (id: number) => void;
}

export const RemindersSection: React.FC<RemindersSectionProps> = ({ 
  reminders, 
  trackerItems, 
  onToggleTracker 
}) => {
  const completedCount = trackerItems.filter(item => item.completed).length;
  const totalCount = trackerItems.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Daily reminders</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">Screenshot this or set phone alarms based on these times</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 space-y-3">
          {reminders.map((reminder, index) => (
            <div key={index} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 min-w-[80px] justify-center">
                <Clock className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">{reminder.time}</span>
              </div>
              <span className="text-sm text-gray-900 flex-1">{reminder.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Today's daily tracker</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">Check off each habit as you complete it</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 space-y-3">
          {trackerItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => onToggleTracker(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  item.completed
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                {item.completed ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <Circle className="w-3 h-3" />
                )}
                {item.completed ? 'Done' : 'Mark done'}
              </button>
              <span className={`text-sm flex-1 ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {completedCount}/{totalCount} habits completed today — {completionPercentage}%
          </span>
          {completionPercentage === 100 && (
            <div className="flex items-center gap-2 text-green-600">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Perfect day!</span>
            </div>
          )}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              completionPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        {completionPercentage === 100 && (
          <div className="text-center py-4 px-6 bg-green-50 rounded-xl border border-green-200">
            <p className="text-green-800 font-medium text-sm">
              🎉 All habits done today. Great work! You're one step closer to your goals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
