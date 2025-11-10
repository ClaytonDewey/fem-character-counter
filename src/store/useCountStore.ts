import { create } from 'zustand';

interface CountState {
  characters: number;
  words: number;
  sentences: number;
  readingTime: number;
}

interface CountActions {
  setCharacters: (count: number) => void;
  setWords: (count: number) => void;
  setSentences: (count: number) => void;
  setReadingTime: (time: number) => void;
  resetCounts: () => void;
}

export const useCountStore = create<CountState & CountActions>((set) => ({
  characters: 0,
  words: 0,
  sentences: 0,
  readingTime: 0,
  setCharacters: (count) => set({ characters: count }),
  setWords: (count) => set({ words: count }),
  setSentences: (count) => set({ sentences: count }),
  setReadingTime: (time) => set({ readingTime: time }),
  resetCounts: () => set({ characters: 0, words: 0, sentences: 0 }),
}));
