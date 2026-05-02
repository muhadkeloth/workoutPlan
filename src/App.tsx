import React, { useState } from 'react';
import { StatsCard } from './components/StatsCard';
import { WorkoutSection } from './components/WorkoutSection';
import { DietSection } from './components/DietSection';
import { FaceYogaSection } from './components/FaceYogaSection';
import { RemindersSection } from './components/RemindersSection';
import { TabType, TrackerItem } from './types';
import { workoutDays } from './data/workoutData';
import { meals, freeFoods, avoidFoods, nutritionTip } from './data/dietData';
import { faceMorning, faceNight, faceTips, faceYogaTip } from './data/faceYogaData';
import { reminders, trackerItems } from './data/remindersData';
import { stats } from './data/statsData';
import { Dumbbell, Apple, Sparkles, Clock, Target } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('workout');
  const [trackerState, setTrackerState] = useState<TrackerItem[]>(
    trackerItems.map((text, index) => ({
      id: index,
      text,
      completed: false,
    }))
  );

  const tabs = [
    { id: 'workout' as TabType, label: 'Workout', icon: Dumbbell },
    { id: 'diet' as TabType, label: 'Diet', icon: Apple },
    { id: 'face' as TabType, label: 'Face Yoga', icon: Sparkles },
    { id: 'reminders' as TabType, label: 'Reminders', icon: Clock },
    { id: 'tracker' as TabType, label: 'Daily Tracker', icon: Target },
  ];

  const toggleTracker = (id: number) => {
    setTrackerState(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Lean Shred Complete Plan
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            27yo Male, 170cm 70kg · Your personalized transformation journey
          </p>
        </header>

        <StatsCard stats={stats} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] px-3 sm:px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === 'workout' && <WorkoutSection workoutDays={workoutDays} />}
            {activeTab === 'diet' && (
              <DietSection
                meals={meals}
                protein={stats.protein}
                carbs={stats.carbs}
                fats={stats.fats}
                freeFoods={freeFoods}
                avoidFoods={avoidFoods}
                nutritionTip={nutritionTip}
              />
            )}
            {activeTab === 'face' && (
              <FaceYogaSection
                faceMorning={faceMorning}
                faceNight={faceNight}
                faceTips={faceTips}
                faceYogaTip={faceYogaTip}
              />
            )}
            {activeTab === 'reminders' && (
              <RemindersSection
                reminders={reminders}
                trackerItems={trackerState}
                onToggleTracker={toggleTracker}
              />
            )}
            {activeTab === 'tracker' && (
              <RemindersSection
                reminders={[]}
                trackerItems={trackerState}
                onToggleTracker={toggleTracker}
              />
            )}
          </div>
        </div>

        <footer className="text-center py-6 text-sm text-gray-500">
          <p>Stay consistent, stay disciplined, and transform your body! 💪</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
