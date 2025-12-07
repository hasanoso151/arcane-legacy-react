import React, { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { GenderScreen } from './components/GenderScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { AppState, AnalysisResult, Question, Gender } from './types';
import { QUESTIONS } from './constants';
import { calculateArchetype } from './utils/logic';
import { generateArcaneAnalysis } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INTRO);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [gender, setGender] = useState<Gender>('MALE');

  const startQuiz = () => {
    // Select 5 random questions
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setQuizQuestions(selected);

    setAppState(AppState.GENDER_SELECT);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
    setAppState(AppState.QUIZ);
  };

  const handleAnswer = async (optionId: string) => {
    const questionId = quizQuestions[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz Finished
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = async (finalAnswers: Record<number, string>) => {
    setAppState(AppState.LOADING);

    // 1. Calculate Archetype locally
    const archetype = calculateArchetype(finalAnswers);

    // 2. Generate Text via Gemini
    // Ensure we wait at least 2.5 seconds for the "Dramatic Loading" effect required by PRD
    const startTime = Date.now();
    const generatedText = await generateArcaneAnalysis(archetype, finalAnswers, gender);
    const endTime = Date.now();
    const duration = endTime - startTime;
    const minLoadingTime = 2500;

    if (duration < minLoadingTime) {
      await new Promise(resolve => setTimeout(resolve, minLoadingTime - duration));
    }

    setResult({
      archetype,
      generatedText
    });
    setAppState(AppState.RESULT);
  };

  const resetApp = () => {
    setAppState(AppState.INTRO);
    setResult(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizQuestions([]);
  };

  return (
    <div className="min-h-screen bg-arcane-900 text-gray-100 font-serif selection:bg-arcane-gold selection:text-black">
      {appState === AppState.INTRO && (
        <IntroScreen onStart={startQuiz} />
      )}

      {appState === AppState.GENDER_SELECT && (
        <GenderScreen onSelect={handleGenderSelect} />
      )}

      {appState === AppState.QUIZ && quizQuestions.length > 0 && (
        <QuestionScreen
          question={quizQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentStep={currentQuestionIndex + 1}
          totalSteps={quizQuestions.length}
        />
      )}

      {appState === AppState.LOADING && (
        <LoadingScreen />
      )}

      {appState === AppState.RESULT && result && (
        <ResultScreen result={result} onRetry={resetApp} gender={gender} />
      )}
    </div>
  );
};

export default App;
