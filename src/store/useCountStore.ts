import { create } from 'zustand';

interface CountState {
  text: string;
  characters: number;
  excludeSpaces?: boolean;
  words: number;
  sentences: number;
  readingTime: number;
}

interface CountActions {
  setText: (text: string) => void;
  setCharacters: (count: number) => void;
  setExcludeSpaces: (exclude: boolean) => void;
  setWords: (count: number) => void;
  setSentences: (count: number) => void;
  setReadingTime: (time: number) => void;
  resetCounts: () => void;
}

export const useCountStore = create<CountState & CountActions>((set) => ({
  text: '',
  characters: 0,
  excludeSpaces: false,
  words: 0,
  sentences: 0,
  readingTime: 0,
  setText: (text) => set({ text }),
  setCharacters: (count) => set({ characters: count }),
  setExcludeSpaces: (exclude) => set({ excludeSpaces: exclude }),
  setWords: (count) => set({ words: count }),
  setSentences: (count) => set({ sentences: count }),
  setReadingTime: (time) => set({ readingTime: time }),
  resetCounts: () => set({ characters: 0, words: 0, sentences: 0 }),
}));
