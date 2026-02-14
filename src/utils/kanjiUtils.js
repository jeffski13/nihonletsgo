import kanjiData from '../data/kanjiData';

/**
 * Get the next kanji entry to learn based on priority:
 * 1. Custom kanji list (if provided and has uncompleted entries)
 * 2. Sequential order through kanjiData
 *
 * @param {number[]} completedEntries - Array of completed kanjiData indices
 * @param {string[]} customKanjiList - User's custom learning queue
 * @returns {{entry: object, index: number}|null} - The next kanji entry with its index, or null if all completed
 */
export function getNextKanji(completedEntries = [], customKanjiList = []) {
  // If custom list exists, find first uncompleted entry whose character is in the list
  if (customKanjiList.length > 0) {
    for (const char of customKanjiList) {
      for (let i = 0; i < kanjiData.length; i++) {
        if (kanjiData[i].character === char && !completedEntries.includes(i)) {
          return { entry: kanjiData[i], index: i };
        }
      }
    }
  }

  // Fall back to sequential order
  for (let i = 0; i < kanjiData.length; i++) {
    if (!completedEntries.includes(i)) {
      return { entry: kanjiData[i], index: i };
    }
  }

  return null; // All entries completed
}

/**
 * Get all kanji data
 * @returns {object[]} - Array of all kanji data objects
 */
export function getAllKanji() {
  return kanjiData;
}

/**
 * Get kanji data by character
 * @param {string} character - The kanji character to find
 * @returns {object|undefined} - The kanji data object or undefined
 */
export function getKanjiByCharacter(character) {
  return kanjiData.find(k => k.character === character);
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {any[]} array - The array to shuffle
 * @returns {any[]} - A new shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get quiz options (1 correct answer + 3 incorrectAnswers) in random order
 * @param {string} correctAnswer - The correct answer
 * @param {string[]} incorrectAnswers - Array of distractor options
 * @returns {object[]} - Array of option objects with value and isCorrect
 */
export function getQuizOptions(correctAnswer, incorrectAnswers) {
  const options = [
    { value: correctAnswer, isCorrect: true },
    ...incorrectAnswers.map(d => ({ value: d, isCorrect: false }))
  ];
  return shuffleArray(options);
}

/**
 * Calculate learning progress statistics
 * @param {number[]} completedEntries - Array of completed kanjiData indices
 * @returns {object} - Progress statistics
 */
export function getProgressStats(completedEntries = []) {
  const total = kanjiData.length;
  const learned = completedEntries.length;
  const percentage = total > 0 ? Math.round((learned / total) * 100) : 0;

  return {
    learned,
    total,
    remaining: total - learned,
    percentage
  };
}

/**
 * Get unique learned kanji characters from completed entry indices
 * @param {number[]} completedEntries - Array of completed kanjiData indices
 * @returns {string[]} - Array of unique kanji characters
 */
export function getLearnedCharacters(completedEntries = []) {
  const chars = completedEntries
    .map(i => kanjiData[i]?.character)
    .filter(Boolean);
  return [...new Set(chars)];
}

/**
 * Parse a custom kanji list string into an array
 * @param {string} input - Comma or space separated string of kanji
 * @returns {string[]} - Array of individual kanji characters
 */
export function parseCustomKanjiList(input) {
  if (!input || typeof input !== 'string') return [];

  // Split by comma, space, or newline and filter empty strings
  return input
    .split(/[,\s\n]+/)
    .map(char => char.trim())
    .filter(char => char.length === 1 && /[\u4e00-\u9faf]/.test(char));
}

/**
 * Check if a kanji character exists in our data
 * @param {string} character - The kanji character to check
 * @returns {boolean} - True if the kanji exists in our data
 */
export function isKanjiInData(character) {
  return kanjiData.some(k => k.character === character);
}

/**
 * Get pronunciation quiz options (1 correct reading + 3 distractor readings) in random order
 * Uses characterReading (the reading of just the kanji character) for incorrectAnswers
 * @param {string} correctReading - The correct hiragana reading of the kanji character
 * @param {string} currentCharacter - The current kanji character (to exclude from incorrectAnswers)
 * @returns {object[]} - Array of option objects with value and isCorrect
 */
export function getPronunciationQuizOptions(correctReading, currentCharacter) {
  // Get all other character readings from kanji data as potential incorrectAnswers
  const otherReadings = kanjiData
    .filter(k => k.character !== currentCharacter)
    .map(k => k.characterReading)
    .filter(reading => reading && reading !== correctReading);

  // Shuffle and take 3 incorrectAnswers
  const shuffledReadings = shuffleArray(otherReadings);
  const incorrectAnswers = shuffledReadings.slice(0, 3);

  const options = [
    { value: correctReading, isCorrect: true },
    ...incorrectAnswers.map(d => ({ value: d, isCorrect: false }))
  ];

  return shuffleArray(options);
}

/**
 * Get sentence quiz options (1 correct meaning + 3 incorrect meanings) in random order
 * @param {string} correctMeaning - The correct sentence meaning
 * @param {string[]} incorrectMeanings - Array of incorrect sentence meanings
 * @returns {object[]} - Array of option objects with value and isCorrect
 */
export function getSentenceQuizOptions(correctMeaning, incorrectMeanings) {
  const options = [
    { value: correctMeaning, isCorrect: true },
    ...incorrectMeanings.map(m => ({ value: m, isCorrect: false }))
  ];
  return shuffleArray(options);
}
