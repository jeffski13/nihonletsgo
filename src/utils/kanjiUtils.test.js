import { describe, it, expect } from 'vitest';
import {
  getNextKanji,
  getAllKanji,
  getKanjiByCharacter,
  shuffleArray,
  getQuizOptions,
  getProgressStats,
  parseCustomKanjiList,
  isKanjiInData
} from './kanjiUtils';
import kanjiData from '../data/kanjiData';

describe('kanjiUtils', () => {
  describe('getNextKanji', () => {
    it('returns the first kanji when nothing is learned', () => {
      const result = getNextKanji([], []);
      expect(result).toBeDefined();
      expect(result.character).toBe(kanjiData[0].character);
    });

    it('skips already learned kanji', () => {
      const result = getNextKanji(['日'], []);
      expect(result.character).toBe(kanjiData[0].character);
    });

    it('prioritizes custom kanji list', () => {
      const result = getNextKanji([], ['食', '水']);
      expect(result.character).toBe('食');
    });

    it('skips learned kanji in custom list', () => {
      const result = getNextKanji(['食'], ['食', '水']);
      expect(result.character).toBe('水');
    });

    it('falls back to frequency list when custom list is exhausted', () => {
      const result = getNextKanji(['食', '水'], ['食', '水']);
      expect(result.character).toBe('一');
    });

    it('returns null when all kanji are learned', () => {
      const allKanji = getAllKanji().map(k => k.character);
      const result = getNextKanji(allKanji, []);
      expect(result).toBeNull();
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
      const result = getKanjiByCharacter('日');
      expect(result).toBeDefined();
      expect(result.character).toBe('日');
      expect(result.meaning).toBe('day, sun');
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
    it('returns correct stats when nothing learned', () => {
      const result = getProgressStats([]);
      expect(result.learned).toBe(0);
      expect(result.total).toBeGreaterThan(0);
      expect(result.remaining).toBe(result.total);
      expect(result.percentage).toBe(0);
    });

    it('calculates percentage correctly', () => {
      const allKanji = getAllKanji();
      const halfLearned = allKanji.slice(0, Math.floor(allKanji.length / 2)).map(k => k.character);
      const result = getProgressStats(halfLearned);
      expect(result.percentage).toBeGreaterThanOrEqual(45);
      expect(result.percentage).toBeLessThanOrEqual(55);
    });

    it('shows 100% when all learned', () => {
      const allKanji = getAllKanji().map(k => k.character);
      const result = getProgressStats(allKanji);
      expect(result.percentage).toBe(100);
      expect(result.remaining).toBe(0);
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
      expect(isKanjiInData('日')).toBe(true);
      expect(isKanjiInData('食')).toBe(true);
    });

    it('returns false for kanji not in data', () => {
      expect(isKanjiInData('龍')).toBe(false);
      expect(isKanjiInData('a')).toBe(false);
    });
  });
});
