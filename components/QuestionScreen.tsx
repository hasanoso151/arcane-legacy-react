import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionScreenProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  currentStep: number;
  totalSteps: number;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onAnswer, currentStep, totalSteps }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setIsExiting(true);
    // Wait for animation before triggering parent callback
    setTimeout(() => {
      onAnswer(id);
      setIsExiting(false);
      setSelectedId(null);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-2xl mx-auto">
      <div className="w-full flex justify-between items-end mb-6 border-b border-arcane-700 pb-2">
        <span className="text-arcane-goldDim font-display text-sm">المخطوطة {currentStep} من {totalSteps}</span>
        <div className="flex space-x-1 space-x-reverse">
            {Array.from({length: totalSteps}).map((_, idx) => (
                <div key={idx} className={`h-1.5 w-6 rounded-full transition-colors ${idx < currentStep ? 'bg-arcane-gold' : 'bg-arcane-800'}`}></div>
            ))}
        </div>
      </div>

      <div className={`w-full transition-all duration-500 transform ${isExiting ? 'opacity-0 scale-95 filter blur-sm' : 'opacity-100 scale-100'}`}>
        <h2 className="text-2xl md:text-3xl font-serif text-gray-100 text-center mb-10 leading-relaxed drop-shadow-lg">
          {question.text}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isExiting}
              className={`
                relative p-4 md:p-6 border border-arcane-700 bg-arcane-800/50 backdrop-blur-sm rounded-lg text-right
                transition-all duration-300 group
                hover:border-arcane-gold hover:bg-arcane-700/60
                ${selectedId === option.id ? 'border-arcane-gold bg-arcane-gold/10' : ''}
              `}
            >
              <div className="flex items-center">
                <div className={`
                  w-8 h-8 flex items-center justify-center rounded-full border border-arcane-600 ml-4 font-display text-sm
                  group-hover:border-arcane-gold group-hover:text-arcane-gold transition-colors
                  ${selectedId === option.id ? 'border-arcane-gold text-arcane-gold bg-arcane-gold/20' : 'text-arcane-dust'}
                `}>
                  {option.id}
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  {option.text}
                </span>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-arcane-gold/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-arcane-gold/50 transition-colors"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
