import { ARCHETYPES, QUESTIONS } from "../constants";
import { Archetype } from "../types";

export const calculateArchetype = (answers: Record<number, string>): Archetype => {
  const scores: Record<string, number> = {
    SEER: 0,
    GUARDIAN: 0,
    ARCHITECT: 0,
    FLAME: 0,
    ECHO: 0,
    WANDERER: 0,
  };

  Object.entries(answers).forEach(([questionId, selectedOptionId]) => {
    const question = QUESTIONS.find(q => q.id === parseInt(questionId));
    if (question) {
      const option = question.options.find(o => o.id === selectedOptionId);
      if (option && option.weight) {
        Object.entries(option.weight).forEach(([archetypeId, weight]) => {
          if (scores[archetypeId] !== undefined) {
            scores[archetypeId] += weight;
          }
        });
      }
    }
  });

  // Find the archetype with the highest score
  let maxScore = -1;
  let winningArchetypeId = 'SEER'; // Default

  Object.entries(scores).forEach(([id, score]) => {
    if (score > maxScore) {
      maxScore = score;
      winningArchetypeId = id;
    }
  });

  return ARCHETYPES[winningArchetypeId];
};
