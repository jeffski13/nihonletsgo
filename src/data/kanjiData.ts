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
  // === BASIC STANDALONE KANJI (no dependencies) ===
  {
    character: "一",
    meaning: "one",
    characterReading: "ひと",
    vocabularyWord: {
      word: "一つ",
      reading: "ひとつ",
      meaning: "one (thing)",
      incorrectAnswers: ["two (things)", "three (things)", "many"]
    },
    example: {
      sentence: "りんごを一つください",
      sentenceMeaning: "One apple, please.",
      incorrectSentenceMeanings: ["Two apples, please.", "One orange, please.", "I don't want any apples."],
      words: [
        { text: "りんご", reading: "ringo", meaning: "apple", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "一つ", reading: "hitotsu", meaning: "one (thing)", isNewWord: true, kanjiInWord: ["一"] },
        { text: "ください", reading: "kudasai", meaning: "please give me", kanjiInWord: [] }
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
      sentence: "あの人はだれですか",
      sentenceMeaning: "Who is that person?",
      incorrectSentenceMeanings: ["Where is that person?", "What is that thing?", "Is that person here?"],
      words: [
        { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
        { text: "人", reading: "hito", meaning: "person", isNewWord: true, kanjiInWord: ["人"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "だれ", reading: "dare", meaning: "who", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "大",
    meaning: "big, large",
    characterReading: "おお",
    vocabularyWord: {
      word: "大きい",
      reading: "おおきい",
      meaning: "big",
      incorrectAnswers: ["small", "tall", "wide"]
    },
    example: {
      sentence: "このいぬは大きいです",
      sentenceMeaning: "This dog is big.",
      incorrectSentenceMeanings: ["This dog is small.", "That cat is big.", "This dog is cute."],
      words: [
        { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
        { text: "いぬ", reading: "inu", meaning: "dog", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "大きい", reading: "ookii", meaning: "big", isNewWord: true, kanjiInWord: ["大"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "小",
    meaning: "small",
    characterReading: "ちい",
    vocabularyWord: {
      word: "小さい",
      reading: "ちいさい",
      meaning: "small",
      incorrectAnswers: ["big", "tall", "wide"]
    },
    example: {
      sentence: "小さいねこがいます",
      sentenceMeaning: "There is a small cat.",
      incorrectSentenceMeanings: ["There is a big cat.", "There is a small dog.", "The small cat is sleeping."],
      words: [
        { text: "小さい", reading: "chiisai", meaning: "small", isNewWord: true, kanjiInWord: ["小"] },
        { text: "ねこ", reading: "neko", meaning: "cat", kanjiInWord: [] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "います", reading: "imasu", meaning: "exists (animate)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "中",
    meaning: "middle, inside",
    characterReading: "なか",
    vocabularyWord: {
      word: "中",
      reading: "なか",
      meaning: "inside",
      incorrectAnswers: ["outside", "above", "below"]
    },
    example: {
      sentence: "かばんの中にあります",
      sentenceMeaning: "It's inside the bag.",
      incorrectSentenceMeanings: ["It's on top of the bag.", "It's next to the bag.", "The bag is not here."],
      words: [
        { text: "かばん", reading: "kaban", meaning: "bag", kanjiInWord: [] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "中", reading: "naka", meaning: "inside", isNewWord: true, kanjiInWord: ["中"] },
        { text: "に", reading: "ni", meaning: "in/at", kanjiInWord: [] },
        { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "上",
    meaning: "up, above",
    characterReading: "うえ",
    vocabularyWord: {
      word: "上",
      reading: "うえ",
      meaning: "above/on top",
      incorrectAnswers: ["below", "beside", "behind"]
    },
    example: {
      sentence: "つくえの上にあります",
      sentenceMeaning: "It's on the desk.",
      incorrectSentenceMeanings: ["It's under the desk.", "It's next to the desk.", "The desk is not here."],
      words: [
        { text: "つくえ", reading: "tsukue", meaning: "desk", kanjiInWord: [] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "上", reading: "ue", meaning: "on top", isNewWord: true, kanjiInWord: ["上"] },
        { text: "に", reading: "ni", meaning: "at", kanjiInWord: [] },
        { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "下",
    meaning: "down, below",
    characterReading: "した",
    vocabularyWord: {
      word: "下",
      reading: "した",
      meaning: "below/under",
      incorrectAnswers: ["above", "beside", "behind"]
    },
    example: {
      sentence: "いすの下にねこがいます",
      sentenceMeaning: "There is a cat under the chair.",
      incorrectSentenceMeanings: ["There is a cat on the chair.", "There is a dog under the chair.", "The chair is on the cat."],
      words: [
        { text: "いす", reading: "isu", meaning: "chair", kanjiInWord: [] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "下", reading: "shita", meaning: "under", isNewWord: true, kanjiInWord: ["下"] },
        { text: "に", reading: "ni", meaning: "at", kanjiInWord: [] },
        { text: "ねこ", reading: "neko", meaning: "cat", kanjiInWord: [] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "います", reading: "imasu", meaning: "exists (animate)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "出",
    meaning: "exit, go out",
    characterReading: "で",
    vocabularyWord: {
      word: "出る",
      reading: "でる",
      meaning: "to exit/go out",
      incorrectAnswers: ["to enter", "to stay", "to return"]
    },
    example: {
      sentence: "へやを出る",
      sentenceMeaning: "To leave the room.",
      incorrectSentenceMeanings: ["To enter the room.", "To clean the room.", "To stay in the room."],
      words: [
        { text: "へや", reading: "heya", meaning: "room", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "出る", reading: "deru", meaning: "to exit", isNewWord: true, kanjiInWord: ["出"] }
      ]
    }
  },
  {
    character: "入",
    meaning: "enter",
    characterReading: "はい",
    vocabularyWord: {
      word: "入る",
      reading: "はいる",
      meaning: "to enter",
      incorrectAnswers: ["to exit", "to stay", "to return"]
    },
    example: {
      sentence: "へやに入る",
      sentenceMeaning: "To enter the room.",
      incorrectSentenceMeanings: ["To leave the room.", "To see the room.", "To find the room."],
      words: [
        { text: "へや", reading: "heya", meaning: "room", kanjiInWord: [] },
        { text: "に", reading: "ni", meaning: "into", kanjiInWord: [] },
        { text: "入る", reading: "hairu", meaning: "to enter", isNewWord: true, kanjiInWord: ["入"] }
      ]
    }
  },
  {
    character: "本",
    meaning: "book, origin",
    characterReading: "ほん",
    vocabularyWord: {
      word: "本",
      reading: "ほん",
      meaning: "book",
      incorrectAnswers: ["magazine", "newspaper", "letter"]
    },
    example: {
      sentence: "本をかいます",
      sentenceMeaning: "I will buy a book.",
      incorrectSentenceMeanings: ["I will read a book.", "I will sell a book.", "I bought a magazine."],
      words: [
        { text: "本", reading: "hon", meaning: "book", isNewWord: true, kanjiInWord: ["本"] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "かいます", reading: "kaimasu", meaning: "buy", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "水",
    meaning: "water",
    characterReading: "みず",
    vocabularyWord: {
      word: "水",
      reading: "みず",
      meaning: "water",
      incorrectAnswers: ["tea", "juice", "milk"]
    },
    example: {
      sentence: "水をのみます",
      sentenceMeaning: "I will drink water.",
      incorrectSentenceMeanings: ["I will drink tea.", "I will eat water.", "I don't want water."],
      words: [
        { text: "水", reading: "mizu", meaning: "water", isNewWord: true, kanjiInWord: ["水"] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "のみます", reading: "nomimasu", meaning: "drink", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "木",
    meaning: "tree, wood",
    characterReading: "き",
    vocabularyWord: {
      word: "木",
      reading: "き",
      meaning: "tree",
      incorrectAnswers: ["flower", "grass", "leaf"]
    },
    example: {
      sentence: "大きい木があります",
      sentenceMeaning: "There is a big tree.",
      incorrectSentenceMeanings: ["There is a small tree.", "There is a big flower.", "The tree is not here."],
      words: [
        { text: "大きい", reading: "ookii", meaning: "big", kanjiInWord: ["大"] },
        { text: "木", reading: "ki", meaning: "tree", isNewWord: true, kanjiInWord: ["木"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "金",
    meaning: "gold, money",
    characterReading: "かね",
    vocabularyWord: {
      word: "お金",
      reading: "おかね",
      meaning: "money",
      incorrectAnswers: ["gold", "silver", "coin"]
    },
    example: {
      sentence: "お金がありません",
      sentenceMeaning: "I don't have money.",
      incorrectSentenceMeanings: ["I have money.", "I need money.", "Money is important."],
      words: [
        { text: "お金", reading: "okane", meaning: "money", isNewWord: true, kanjiInWord: ["金"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "ありません", reading: "arimasen", meaning: "does not exist", kanjiInWord: [] }
      ]
    }
  }
];

export default kanjiData;
