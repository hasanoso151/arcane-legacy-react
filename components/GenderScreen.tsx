import React, { useState } from 'react';
import { Gender } from '../types';

interface GenderScreenProps {
    onSelect: (gender: Gender) => void;
}

export const GenderScreen: React.FC<GenderScreenProps> = ({ onSelect }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [selectedId, setSelectedId] = useState<Gender | null>(null);

    const handleSelect = (gender: Gender) => {
        setSelectedId(gender);
        setIsExiting(true);
        // Wait for animation before triggering parent callback
        setTimeout(() => {
            onSelect(gender);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-2xl mx-auto">
            <div className="w-full flex justify-center items-end mb-10 border-b border-arcane-700 pb-4">
                <span className="text-arcane-goldDim font-display text-lg tracking-widest uppercase">توي الهوية</span>
            </div>

            <div className={`w-full transition-all duration-500 transform ${isExiting ? 'opacity-0 scale-95 filter blur-sm' : 'opacity-100 scale-100'}`}>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-100 text-center mb-12 leading-relaxed drop-shadow-lg">
                    من يخاطب الروح؟
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    <button
                        onClick={() => handleSelect('MALE')}
                        disabled={isExiting}
                        className={`
              relative p-6 md:p-8 border border-arcane-700 bg-arcane-800/50 backdrop-blur-sm rounded-lg text-center
              transition-all duration-300 group
              hover:border-arcane-gold hover:bg-arcane-700/60
              ${selectedId === 'MALE' ? 'border-arcane-gold bg-arcane-gold/10' : ''}
            `}
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-colors ${selectedId === 'MALE' ? 'border-arcane-gold text-arcane-gold' : 'border-arcane-600 text-arcane-dust group-hover:border-arcane-gold group-hover:text-arcane-gold'}`}>
                                ذكر
                            </div>
                            <span className="text-xl text-gray-300 group-hover:text-white font-serif transition-colors">
                                روح الحارس
                            </span>
                        </div>
                    </button>

                    <button
                        onClick={() => handleSelect('FEMALE')}
                        disabled={isExiting}
                        className={`
              relative p-6 md:p-8 border border-arcane-700 bg-arcane-800/50 backdrop-blur-sm rounded-lg text-center
              transition-all duration-300 group
              hover:border-arcane-gold hover:bg-arcane-700/60
              ${selectedId === 'FEMALE' ? 'border-arcane-gold bg-arcane-gold/10' : ''}
            `}
                    >
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-colors ${selectedId === 'FEMALE' ? 'border-arcane-gold text-arcane-gold' : 'border-arcane-600 text-arcane-dust group-hover:border-arcane-gold group-hover:text-arcane-gold'}`}>
                                أنثى
                            </div>
                            <span className="text-xl text-gray-300 group-hover:text-white font-serif transition-colors">
                                روح الحارسة
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
