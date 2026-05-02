import React from 'react';
import { FaceStep } from '../types';
import { Sparkles, Moon, Sun } from 'lucide-react';

interface FaceYogaSectionProps {
  faceMorning: FaceStep[];
  faceNight: FaceStep[];
  faceTips: string[];
  faceYogaTip: string;
}

export const FaceYogaSection: React.FC<FaceYogaSectionProps> = ({ 
  faceMorning, 
  faceNight, 
  faceTips, 
  faceYogaTip 
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Daily face yoga routine</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">10 minutes · Morning & Night · Slim + glow + defined jaw</p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-pink-200">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-pink-800 leading-relaxed">{faceYogaTip}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Morning — 5 mins (Slim + define)</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6 space-y-3">
          {faceMorning.map((step, index) => (
            <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
              <div className="font-medium text-gray-900 text-sm">{step.name}</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{step.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Night — 5 mins (Glow + relax)</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6 space-y-3">
          {faceNight.map((step, index) => (
            <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
              <div className="font-medium text-gray-900 text-sm">{step.name}</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{step.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Bonus tips for a slim face look</h3>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-sm text-gray-700 leading-relaxed">
            {faceTips.map((tip, index) => (
              <span key={index}>
                {tip}{index < faceTips.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
