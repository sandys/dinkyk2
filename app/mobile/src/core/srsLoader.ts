import lesson01Card from '../../../../data/srs/lesson01_rhyme_match.json';

export type SrsCard = {
  exercise_id: string;
  lesson_number: number;
  exercise_type: string;
  skill_focus: string;
  prompt: Record<string, unknown>;
  response_type: string;
  correct_response: unknown;
  distractors?: unknown[];
  assets: Record<string, unknown>;
  srs_data: {
    due_date: string | null;
    stability: number;
    difficulty: number;
    review_history: unknown[];
  };
};

const cards: SrsCard[] = [lesson01Card as SrsCard];

export type SrsSummary = {
  dueCount: number;
  newCount: number;
  totalCount: number;
};

export const getSrsSummary = (): SrsSummary => {
  const totalCount = cards.length;
  const dueCount = cards.filter((card) => card.srs_data.due_date === null).length;
  const newCount = cards.filter((card) => card.srs_data.review_history.length === 0).length;

  return { dueCount, newCount, totalCount };
};
