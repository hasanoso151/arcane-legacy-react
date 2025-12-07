export type Gender = 'MALE' | 'FEMALE';

export interface Option {
  id: string;
  text: string;
  weight: Record<string, number>; // Maps archetype IDs to score weights
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Archetype {
  id: string;
  name: {
    male: string;
    female: string;
  };
  title: {
    male: string;
    female: string;
  };
  baseDescription: string;
}

export enum AppState {
  INTRO = 'INTRO',
  GENDER_SELECT = 'GENDER_SELECT',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULT = 'RESULT',
}

export interface AnalysisResult {
  archetype: Archetype;
  generatedText: string;
}
