// Kanji data ordered by frequency/usefulness for daily conversation
// Each entry includes the kanji, a primary vocabulary word, and an example sentence
//
// IMPORTANT: Kanji are ordered so that:
// 1. Each vocabulary word introduces only ONE new kanji character
// 2. Example sentences only use kanji that have been previously learned
//
// Each word in example sentences includes a 'kanjiInWord' array listing all kanji
// characters used in that word. The UI should display hiragana for any kanji
// the user hasn't learned yet.
//
// characterReading: The hiragana reading of just the kanji character within the vocabulary word

export interface ExampleWord {
  text: string;
  reading: string;
  meaning: string;
  kanjiInWord: string[];
  isNewWord?: boolean;
}

export interface VocabularyWord {
  word: string;
  reading: string;
  meaning: string;
  incorrectAnswers: string[];
}

export interface Example {
  sentence: string;
  sentenceMeaning: string;
  incorrectSentenceMeanings: string[];
  words: ExampleWord[];
}

export interface KanjiEntry {
  character: string;
  meaning: string;
  characterReading: string;
  vocabularyWord: VocabularyWord;
  example: Example;
}

const kanjiData: KanjiEntry[] = [
  {
    character: "子",
    meaning: "child",
    characterReading: "こ",
    vocabularyWord: {
      word: "子ども",
      reading: "こども",
      meaning: "child",
      incorrectAnswers: ["adult", "parent", "baby"]
    },
    example: {
      sentence: "子どもがあそんでいます",
      sentenceMeaning: "A child is playing.",
      incorrectSentenceMeanings: ["A child is sleeping.", "An adult is playing.", "A child is eating."],
      words: [
        { text: "子ども", reading: "kodomo", meaning: "child", isNewWord: true, kanjiInWord: ["子"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "あそんでいます", reading: "asondeimasu", meaning: "is playing", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "学",
    meaning: "study, learning",
    characterReading: "がく",
    vocabularyWord: {
      word: "学せい",
      reading: "がくせい",
      meaning: "student",
      incorrectAnswers: ["teacher", "school", "friend"]
    },
    example: {
      sentence: "わたしは学せいです",
      sentenceMeaning: "I am a student.",
      incorrectSentenceMeanings: ["I am a teacher.", "You are a student.", "I am not a student."],
      words: [
        { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "学せい", reading: "gakusei", meaning: "student", isNewWord: true, kanjiInWord: ["学"] },
        { text: "です", reading: "desu", meaning: "am/is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "生",
    meaning: "life, birth",
    characterReading: "う",
    vocabularyWord: {
      word: "生まれる",
      reading: "うまれる",
      meaning: "to be born",
      incorrectAnswers: ["to die", "to live", "to grow"]
    },
    example: {
      sentence: "子どもが生まれました",
      sentenceMeaning: "A child was born.",
      incorrectSentenceMeanings: ["A child is playing.", "A child grew up.", "An adult was born."],
      words: [
        { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "生まれました", reading: "umaremashita", meaning: "was born", isNewWord: true, kanjiInWord: ["生"] }
      ]
    }
  },
  {
    character: "先",
    meaning: "previous, ahead",
    characterReading: "せん",
    vocabularyWord: {
      word: "先生",
      reading: "せんせい",
      meaning: "teacher",
      incorrectAnswers: ["student", "friend", "doctor"]
    },
    example: {
      sentence: "先生はやさしいです",
      sentenceMeaning: "The teacher is kind.",
      incorrectSentenceMeanings: ["The teacher is strict.", "The student is kind.", "The teacher is not here."],
      words: [
        { text: "先生", reading: "sensei", meaning: "teacher", isNewWord: true, kanjiInWord: ["先", "生"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "やさしい", reading: "yasashii", meaning: "kind", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "目",
    meaning: "eye",
    characterReading: "め",
    vocabularyWord: {
      word: "目",
      reading: "め",
      meaning: "eye",
      incorrectAnswers: ["ear", "nose", "mouth"]
    },
    example: {
      sentence: "子どもの目はきれいです",
      sentenceMeaning: "The child's eyes are beautiful.",
      incorrectSentenceMeanings: ["The child's ears are big.", "The teacher's eyes are beautiful.", "The child's eyes are small."],
      words: [
        { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "目", reading: "me", meaning: "eyes", isNewWord: true, kanjiInWord: ["目"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "きれい", reading: "kirei", meaning: "beautiful", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "人",
    meaning: "person",
    characterReading: "ひと",
    vocabularyWord: {
      word: "人",
      reading: "ひと",
      meaning: "person",
      incorrectAnswers: ["animal", "thing", "place"]
    },
    example: {
      sentence: "あの人は先生です",
      sentenceMeaning: "That person is a teacher.",
      incorrectSentenceMeanings: ["That person is a student.", "This person is a teacher.", "That person is a doctor."],
      words: [
        { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
        { text: "人", reading: "hito", meaning: "person", isNewWord: true, kanjiInWord: ["人"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  }
];

export default kanjiData;
