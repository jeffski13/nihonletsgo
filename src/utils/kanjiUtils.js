import kanjiData from '../data/kanjiData';

/**
 * Get the next kanji to learn based on priority:
 * 1. Custom kanji list (if provided and not all learned)
 * 2. Frequency-based list
 *
 * @param {string[]} learnedKanji - Array of already learned kanji characters
 * @param {string[]} customKanjiList - User's custom learning queue
 * @returns {object|null} - The next kanji data object, or null if all learned
 */
export function getNextKanji(learnedKanji = [], customKanjiList = []) {
  // If custom list exists and has unlearned kanji
  if (customKanjiList.length > 0) {
    for (const char of customKanjiList) {
      if (!learnedKanji.includes(char)) {
        const kanjiEntry = kanjiData.find(k => k.character === char);
        if (kanjiEntry) {
          return kanjiEntry;
        }
      }
    }
  }

  // Fall back to frequency-based list
  for (const kanji of kanjiData) {
    if (!learnedKanji.includes(kanji.character)) {
      return kanji;
    }
  }

  return null; // All kanji learned
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
 * Get quiz options (1 correct answer + 3 distractors) in random order
 * @param {string} correctAnswer - The correct answer
 * @param {string[]} distractors - Array of distractor options
 * @returns {object[]} - Array of option objects with value and isCorrect
 */
export function getQuizOptions(correctAnswer, distractors) {
  const options = [
    { value: correctAnswer, isCorrect: true },
    ...distractors.map(d => ({ value: d, isCorrect: false }))
  ];
  return shuffleArray(options);
}

/**
 * Calculate learning progress statistics
 * @param {string[]} learnedKanji - Array of learned kanji characters
 * @returns {object} - Progress statistics
 */
export function getProgressStats(learnedKanji = []) {
  const totalKanji = kanjiData.length;
  const learnedCount = learnedKanji.length;
  const percentage = totalKanji > 0 ? Math.round((learnedCount / totalKanji) * 100) : 0;

  return {
    learned: learnedCount,
    total: totalKanji,
    remaining: totalKanji - learnedCount,
    percentage
  };
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
 * @param {string} correctReading - The correct hiragana reading
 * @param {string} currentCharacter - The current kanji character (to exclude from distractors)
 * @returns {object[]} - Array of option objects with value and isCorrect
 */
export function getPronunciationQuizOptions(correctReading, currentCharacter) {
  // Get all other readings from kanji data as potential distractors
  const otherReadings = kanjiData
    .filter(k => k.character !== currentCharacter)
    .map(k => k.vocabularyWord.reading)
    .filter(reading => reading !== correctReading);

  // Shuffle and take 3 distractors
  const shuffledReadings = shuffleArray(otherReadings);
  const distractors = shuffledReadings.slice(0, 3);

  const options = [
    { value: correctReading, isCorrect: true },
    ...distractors.map(d => ({ value: d, isCorrect: false }))
  ];

  return shuffleArray(options);
}
