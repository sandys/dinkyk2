import lesson01 from '../../../../curriculum/phase_01/lesson_01/metadata.json';

export type LessonMetadata = {
  lesson: number;
  phase: number;
  target_phonics: string;
  word_bank: string[];
  sight_words: string[];
};

export type LessonSummary = {
  focus: string;
  id: string;
  lesson: number;
  phase: number;
  slug: string;
};

const lessons: LessonMetadata[] = [lesson01 as LessonMetadata];

export const getLessonSummaries = (): LessonSummary[] =>
  lessons.map((lesson) => ({
    focus: lesson.target_phonics,
    id: `lesson-${lesson.lesson.toString().padStart(2, '0')}`,
    lesson: lesson.lesson,
    phase: lesson.phase,
    slug: `phase-${lesson.phase.toString().padStart(2, '0')}-lesson-${lesson.lesson
      .toString()
      .padStart(2, '0')}`
  }));

export const getLessonById = (id: string): LessonMetadata | undefined =>
  lessons.find((lesson) => `lesson-${lesson.lesson.toString().padStart(2, '0')}` === id);
