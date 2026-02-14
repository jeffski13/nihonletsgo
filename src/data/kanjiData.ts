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
  },
  {
    character: "学",
    meaning: "study, learning",
    characterReading: "がっ",
    vocabularyWord: {
      word: "学こう",
      reading: "がっこう",
      meaning: "school",
      incorrectAnswers: ["hospital", "library", "station"]
    },
    example: {
      sentence: "学こうに先生がいます",
      sentenceMeaning: "There is a teacher at the school.",
      incorrectSentenceMeanings: ["There is a student at the school.", "There is no teacher at the school.", "The school is far away."],
      words: [
        { text: "学こう", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学"] },
        { text: "に", reading: "ni", meaning: "at", kanjiInWord: [] },
        { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "います", reading: "imasu", meaning: "exists", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "生",
    meaning: "life, birth",
    characterReading: "しょう",
    vocabularyWord: {
      word: "いっ生",
      reading: "いっしょう",
      meaning: "lifetime, whole life",
      incorrectAnswers: ["one day", "one year", "one moment"]
    },
    example: {
      sentence: "先生はいっ生学んでいます",
      sentenceMeaning: "The teacher studies for a lifetime.",
      incorrectSentenceMeanings: ["The teacher studied for a year.", "The student studies for a lifetime.", "The teacher stopped studying."],
      words: [
        { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "いっ生", reading: "isshou", meaning: "lifetime", isNewWord: true, kanjiInWord: ["生"] },
        { text: "学んでいます", reading: "manandeimasu", meaning: "is studying", kanjiInWord: ["学"] }
      ]
    }
  },
  {
    character: "先",
    meaning: "previous, ahead",
    characterReading: "さき",
    vocabularyWord: {
      word: "先に",
      reading: "さきに",
      meaning: "ahead, first",
      incorrectAnswers: ["later", "behind", "together"]
    },
    example: {
      sentence: "先にいってください",
      sentenceMeaning: "Please go ahead.",
      incorrectSentenceMeanings: ["Please come back.", "Please wait here.", "Please go later."],
      words: [
        { text: "先に", reading: "sakini", meaning: "ahead", isNewWord: true, kanjiInWord: ["先"] },
        { text: "いって", reading: "itte", meaning: "go", kanjiInWord: [] },
        { text: "ください", reading: "kudasai", meaning: "please", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "目",
    meaning: "eye",
    characterReading: "もく",
    vocabularyWord: {
      word: "目ひょう",
      reading: "もくひょう",
      meaning: "goal, target",
      incorrectAnswers: ["result", "problem", "answer"]
    },
    example: {
      sentence: "わたしの目ひょうは先生です",
      sentenceMeaning: "My goal is to become a teacher.",
      incorrectSentenceMeanings: ["My goal is to become a student.", "My teacher has a goal.", "My goal is not clear."],
      words: [
        { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "目ひょう", reading: "mokuhyou", meaning: "goal", isNewWord: true, kanjiInWord: ["目"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "人",
    meaning: "person",
    characterReading: "じん",
    vocabularyWord: {
      word: "にほん人",
      reading: "にほんじん",
      meaning: "Japanese person",
      incorrectAnswers: ["American person", "Chinese person", "Korean person"]
    },
    example: {
      sentence: "あの人はにほん人の先生です",
      sentenceMeaning: "That person is a Japanese teacher.",
      incorrectSentenceMeanings: ["That person is an American teacher.", "This person is a Japanese student.", "That person is not Japanese."],
      words: [
        { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
        { text: "人", reading: "hito", meaning: "person", kanjiInWord: ["人"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "にほん人", reading: "nihonjin", meaning: "Japanese person", isNewWord: true, kanjiInWord: ["人"] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "人",
    meaning: "person",
    characterReading: "じん",
    vocabularyWord: {
      word: "人生",
      reading: "じんせい",
      meaning: "life, human life",
      incorrectAnswers: ["death", "dream", "world"]
    },
    example: {
      sentence: "人生の目ひょうがあります",
      sentenceMeaning: "I have a goal in life.",
      incorrectSentenceMeanings: ["I don't have a goal.", "Life has no meaning.", "My life is difficult."],
      words: [
        { text: "人生", reading: "jinsei", meaning: "life", isNewWord: true, kanjiInWord: ["人", "生"] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "目ひょう", reading: "mokuhyou", meaning: "goal", kanjiInWord: ["目"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
      ]
    }
  }
];

export default kanjiData;
