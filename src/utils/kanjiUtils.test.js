import { describe, it, expect } from 'vitest';
import {
  getNextKanji,
  getAllKanji,
  getKanjiByCharacter,
  shuffleArray,
  getQuizOptions,
  getProgressStats,
  getLearnedCharacters,
  parseCustomKanjiList,
  isKanjiInData
} from './kanjiUtils';
import kanjiData from '../data/kanjiData';

describe('kanjiUtils', () => {
  describe('getNextKanji', () => {
    it('returns the first entry when nothing is completed', () => {
      const result = getNextKanji([], []);
      expect(result).toBeDefined();
      expect(result.entry.character).toBe(kanjiData[0].character);
      expect(result.index).toBe(0);
    });

    it('skips completed entries', () => {
      const result = getNextKanji([0], []);
      expect(result.entry.character).toBe(kanjiData[1].character);
      expect(result.index).toBe(1);
    });

    it('prioritizes custom kanji list', () => {
      const result = getNextKanji([], [kanjiData[5].character, kanjiData[6].character]);
      expect(result.entry.character).toBe(kanjiData[5].character);
    });

    it('skips completed entries in custom list', () => {
      // If entry 5 is completed, should find the next entry matching kanjiData[5].character or move to next in custom list
      const char5 = kanjiData[5].character;
      // Find all indices for char5
      const indicesForChar5 = kanjiData
        .map((k, i) => k.character === char5 ? i : -1)
        .filter(i => i >= 0);
      // Complete all entries for char5
      const result = getNextKanji(indicesForChar5, [char5, kanjiData[3].character]);
      expect(result.entry.character).toBe(kanjiData[3].character);
    });

    it('falls back to sequential list when custom list is exhausted', () => {
      const char5 = kanjiData[5].character;
      const indicesForChar5 = kanjiData
        .map((k, i) => k.character === char5 ? i : -1)
        .filter(i => i >= 0);
      const result = getNextKanji(indicesForChar5, [char5]);
      expect(result.index).toBe(0);
    });

    it('returns null when all entries are completed', () => {
      const allIndices = kanjiData.map((_, i) => i);
      const result = getNextKanji(allIndices, []);
      expect(result).toBeNull();
    });

    it('returns subsequent entries for same character', () => {
      // Find a character that appears more than once
      const charCounts = {};
      kanjiData.forEach((k, i) => {
        if (!charCounts[k.character]) charCounts[k.character] = [];
        charCounts[k.character].push(i);
      });
      const duplicateChar = Object.entries(charCounts).find(([, indices]) => indices.length > 1);
      if (duplicateChar) {
        const [, indices] = duplicateChar;
        // Complete only the first entry
        const result = getNextKanji([indices[0]], []);
        // The second entry for the same character should eventually be returned
        const allBefore = Array.from({ length: indices[1] }, (_, i) => i);
        const result2 = getNextKanji(allBefore, []);
        expect(result2.index).toBe(indices[1]);
      }
    });
  });

  describe('getAllKanji', () => {
    it('returns an array of kanji data', () => {
      const result = getAllKanji();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('each kanji has required properties', () => {
      const result = getAllKanji();
      result.forEach(kanji => {
        expect(kanji).toHaveProperty('character');
        expect(kanji).toHaveProperty('meaning');
        expect(kanji).toHaveProperty('vocabularyWord');
        expect(kanji).toHaveProperty('example');
      });
    });
  });

  describe('getKanjiByCharacter', () => {
    it('returns kanji data for existing character', () => {
      const result = getKanjiByCharacter(kanjiData[0].character);
      expect(result).toBeDefined();
      expect(result.character).toBe(kanjiData[0].character);
      expect(result.meaning).toBe(kanjiData[0].meaning);
    });

    it('returns undefined for non-existent character', () => {
      const result = getKanjiByCharacter('龍');
      expect(result).toBeUndefined();
    });
  });

  describe('shuffleArray', () => {
    it('returns array with same length', () => {
      const original = [1, 2, 3, 4, 5];
      const result = shuffleArray(original);
      expect(result.length).toBe(original.length);
    });

    it('contains all original elements', () => {
      const original = [1, 2, 3, 4, 5];
      const result = shuffleArray(original);
      expect(result.sort()).toEqual(original.sort());
    });

    it('does not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const originalCopy = [...original];
      shuffleArray(original);
      expect(original).toEqual(originalCopy);
    });
  });

  describe('getQuizOptions', () => {
    it('returns 4 options', () => {
      const result = getQuizOptions('correct', ['wrong1', 'wrong2', 'wrong3']);
      expect(result.length).toBe(4);
    });

    it('includes exactly one correct answer', () => {
      const result = getQuizOptions('correct', ['wrong1', 'wrong2', 'wrong3']);
      const correctOptions = result.filter(o => o.isCorrect);
      expect(correctOptions.length).toBe(1);
      expect(correctOptions[0].value).toBe('correct');
    });

    it('includes all incorrectAnswers', () => {
      const incorrectAnswers = ['wrong1', 'wrong2', 'wrong3'];
      const result = getQuizOptions('correct', incorrectAnswers);
      const incorrectOptions = result.filter(o => !o.isCorrect).map(o => o.value);
      expect(incorrectOptions.sort()).toEqual(incorrectAnswers.sort());
    });
  });

  describe('getProgressStats', () => {
    it('returns correct stats when nothing completed', () => {
      const result = getProgressStats([]);
      expect(result.learned).toBe(0);
      expect(result.total).toBe(kanjiData.length);
      expect(result.remaining).toBe(kanjiData.length);
      expect(result.percentage).toBe(0);
    });

    it('calculates percentage correctly', () => {
      const halfIndices = kanjiData.slice(0, Math.floor(kanjiData.length / 2)).map((_, i) => i);
      const result = getProgressStats(halfIndices);
      expect(result.percentage).toBeGreaterThanOrEqual(45);
      expect(result.percentage).toBeLessThanOrEqual(55);
    });

    it('shows 100% when all completed', () => {
      const allIndices = kanjiData.map((_, i) => i);
      const result = getProgressStats(allIndices);
      expect(result.percentage).toBe(100);
      expect(result.remaining).toBe(0);
    });
  });

  describe('getLearnedCharacters', () => {
    it('returns empty array when nothing completed', () => {
      expect(getLearnedCharacters([])).toEqual([]);
    });

    it('returns unique characters from completed entries', () => {
      const result = getLearnedCharacters([0, 1, 2]);
      expect(result).toContain(kanjiData[0].character);
      expect(result).toContain(kanjiData[1].character);
      expect(result).toContain(kanjiData[2].character);
    });

    it('deduplicates characters that appear in multiple entries', () => {
      const allIndices = kanjiData.map((_, i) => i);
      const result = getLearnedCharacters(allIndices);
      const uniqueChars = [...new Set(kanjiData.map(k => k.character))];
      expect(result.length).toBe(uniqueChars.length);
    });
  });

  describe('parseCustomKanjiList', () => {
    it('parses comma-separated kanji', () => {
      const result = parseCustomKanjiList('日,月,火');
      expect(result).toEqual(['日', '月', '火']);
    });

    it('parses space-separated kanji', () => {
      const result = parseCustomKanjiList('日 月 火');
      expect(result).toEqual(['日', '月', '火']);
    });

    it('handles mixed separators', () => {
      const result = parseCustomKanjiList('日, 月 火');
      expect(result).toEqual(['日', '月', '火']);
    });

    it('filters non-kanji characters', () => {
      const result = parseCustomKanjiList('日 a 月 123 火');
      expect(result).toEqual(['日', '月', '火']);
    });

    it('returns empty array for invalid input', () => {
      expect(parseCustomKanjiList('')).toEqual([]);
      expect(parseCustomKanjiList(null)).toEqual([]);
      expect(parseCustomKanjiList(undefined)).toEqual([]);
    });
  });

  describe('isKanjiInData', () => {
    it('returns true for kanji in data', () => {
      expect(isKanjiInData(kanjiData[0].character)).toBe(true);
      expect(isKanjiInData(kanjiData[5].character)).toBe(true);
    });

    it('returns false for kanji not in data', () => {
      expect(isKanjiInData('龍')).toBe(false);
      expect(isKanjiInData('a')).toBe(false);
    });
  });
});
