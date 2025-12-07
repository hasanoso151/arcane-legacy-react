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
  name: string;
  title: string; // e.g., "The Forgotten Seer"
  baseDescription: string;
}

export enum AppState {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULT = 'RESULT',
}

export interface AnalysisResult {
  archetype: Archetype;
  generatedText: string;
}
