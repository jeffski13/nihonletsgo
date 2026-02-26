// Kanji data ordered by frequency/usefulness for daily conversation
// Each entry includes the kanji, a primary vocabulary word, and example sentences
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
  examples: Example[];
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
    examples: [
      {
        sentence: "子どもがあそんでいます",
        sentenceMeaning: "A child is playing.",
        incorrectSentenceMeanings: ["A child is sleeping.", "An adult is playing.", "A child is eating."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", isNewWord: true, kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あそんでいます", reading: "asondeimasu", meaning: "is playing", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもはかわいいです",
        sentenceMeaning: "The child is cute.",
        incorrectSentenceMeanings: ["The child is tired.", "An adult is cute.", "The child is not here."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", isNewWord: true, kanjiInWord: ["子"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "かわいい", reading: "kawaii", meaning: "cute", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもがいます",
        sentenceMeaning: "There is a child.",
        incorrectSentenceMeanings: ["There is no child.", "A child is leaving.", "An adult is here."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", isNewWord: true, kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is here", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
        sentence: "わたしは学せいです",
        sentenceMeaning: "I am a student.",
        incorrectSentenceMeanings: ["I am a teacher.", "You are a student.", "I am not a student."],
        words: [
          { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "学せい", reading: "gakusei", meaning: "student", isNewWord: true, kanjiInWord: ["学"] },
          { text: "です", reading: "desu", meaning: "am/is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "学せいがたくさんいます",
        sentenceMeaning: "There are many students.",
        incorrectSentenceMeanings: ["There are no students.", "There is only one student.", "The students are leaving."],
        words: [
          { text: "学せい", reading: "gakusei", meaning: "student", isNewWord: true, kanjiInWord: ["学"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "たくさん", reading: "takusan", meaning: "many", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "exist", kanjiInWord: [] }
        ]
      },
      {
        sentence: "学せいが子どもです",
        sentenceMeaning: "The student is a child.",
        incorrectSentenceMeanings: ["The student is an adult.", "The child is a student.", "There is no student."],
        words: [
          { text: "学せい", reading: "gakusei", meaning: "student", isNewWord: true, kanjiInWord: ["学"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
        sentence: "子どもが生まれました",
        sentenceMeaning: "A child was born.",
        incorrectSentenceMeanings: ["A child is playing.", "A child grew up.", "An adult was born."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "生まれました", reading: "umaremashita", meaning: "was born", isNewWord: true, kanjiInWord: ["生"] }
        ]
      },
      {
        sentence: "にほんで生まれました",
        sentenceMeaning: "I was born in Japan.",
        incorrectSentenceMeanings: ["I was born in America.", "I live in Japan.", "I wasn't born in Japan."],
        words: [
          { text: "にほん", reading: "nihon", meaning: "Japan", kanjiInWord: [] },
          { text: "で", reading: "de", meaning: "in", kanjiInWord: [] },
          { text: "生まれました", reading: "umaremashita", meaning: "was born", isNewWord: true, kanjiInWord: ["生"] }
        ]
      },
      {
        sentence: "子どもが生まれたばかりです",
        sentenceMeaning: "The child was just born.",
        incorrectSentenceMeanings: ["The child is growing up.", "The child was born long ago.", "A student was just born."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "生まれた", reading: "umareta", meaning: "was born", isNewWord: true, kanjiInWord: ["生"] },
          { text: "ばかり", reading: "bakari", meaning: "just", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
        sentence: "先生はやさしいです",
        sentenceMeaning: "The teacher is kind.",
        incorrectSentenceMeanings: ["The teacher is strict.", "The student is kind.", "The teacher is not here."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", isNewWord: true, kanjiInWord: ["先", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "やさしい", reading: "yasashii", meaning: "kind", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "先生は学せいをおしえます",
        sentenceMeaning: "The teacher teaches students.",
        incorrectSentenceMeanings: ["The teacher studies.", "The student teaches.", "The teacher is learning."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", isNewWord: true, kanjiInWord: ["先", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "学せい", reading: "gakusei", meaning: "student", kanjiInWord: ["学"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "おしえます", reading: "oshiemasu", meaning: "teaches", kanjiInWord: [] }
        ]
      },
      {
        sentence: "わたしの先生はすごいです",
        sentenceMeaning: "My teacher is amazing.",
        incorrectSentenceMeanings: ["My teacher is strict.", "My student is amazing.", "My teacher is not good."],
        words: [
          { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", isNewWord: true, kanjiInWord: ["先", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "すごい", reading: "sugoi", meaning: "amazing", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "先生の目はやさしいです",
        sentenceMeaning: "The teacher's eyes are gentle.",
        incorrectSentenceMeanings: ["The teacher's eyes are scary.", "The student's eyes are gentle.", "The teacher's eyes are small."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "目", reading: "me", meaning: "eyes", isNewWord: true, kanjiInWord: ["目"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "やさしい", reading: "yasashii", meaning: "gentle", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "目がいたいです",
        sentenceMeaning: "My eyes hurt.",
        incorrectSentenceMeanings: ["My eyes are beautiful.", "My eyes are tired.", "My eyes are fine."],
        words: [
          { text: "目", reading: "me", meaning: "eyes", isNewWord: true, kanjiInWord: ["目"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "いたい", reading: "itai", meaning: "hurt", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "この人は学せいです",
        sentenceMeaning: "This person is a student.",
        incorrectSentenceMeanings: ["This person is a teacher.", "That person is a student.", "This person is not a student."],
        words: [
          { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
          { text: "人", reading: "hito", meaning: "person", isNewWord: true, kanjiInWord: ["人"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "学せい", reading: "gakusei", meaning: "student", kanjiInWord: ["学"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "いい人に会いました",
        sentenceMeaning: "I met a good person.",
        incorrectSentenceMeanings: ["I met a bad person.", "I didn't meet anyone.", "A good person left."],
        words: [
          { text: "いい", reading: "ii", meaning: "good", kanjiInWord: [] },
          { text: "人", reading: "hito", meaning: "person", isNewWord: true, kanjiInWord: ["人"] },
          { text: "に", reading: "ni", meaning: "with", kanjiInWord: [] },
          { text: "会いました", reading: "aimashita", meaning: "met", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "学こうはたのしいです",
        sentenceMeaning: "School is fun.",
        incorrectSentenceMeanings: ["School is boring.", "School is difficult.", "I don't like school."],
        words: [
          { text: "学こう", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たのしい", reading: "tanoshii", meaning: "fun", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが学こうにいます",
        sentenceMeaning: "The children are at school.",
        incorrectSentenceMeanings: ["The children are at home.", "The teacher is at school.", "The children left school."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "学こう", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学"] },
          { text: "に", reading: "ni", meaning: "at", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "are", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
        sentence: "先生はいっ生学んでいます",
        sentenceMeaning: "The teacher studies for a lifetime.",
        incorrectSentenceMeanings: ["The teacher studied for a year.", "The student studies for a lifetime.", "The teacher stopped studying."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "いっ生", reading: "isshou", meaning: "lifetime", isNewWord: true, kanjiInWord: ["生"] },
          { text: "学んでいます", reading: "manandeimasu", meaning: "is studying", kanjiInWord: ["学"] }
        ]
      },
      {
        sentence: "いっ生わすれません",
        sentenceMeaning: "I will never forget for a lifetime.",
        incorrectSentenceMeanings: ["I forgot for a moment.", "I will remember for a year.", "I forgot everything."],
        words: [
          { text: "いっ生", reading: "isshou", meaning: "lifetime", isNewWord: true, kanjiInWord: ["生"] },
          { text: "わすれません", reading: "wasuremasen", meaning: "will not forget", kanjiInWord: [] }
        ]
      },
      {
        sentence: "いっ生いっしょにいましょう",
        sentenceMeaning: "Let's be together for a lifetime.",
        incorrectSentenceMeanings: ["Let's be together for a year.", "Let's part ways forever.", "We were together for a while."],
        words: [
          { text: "いっ生", reading: "isshou", meaning: "lifetime", isNewWord: true, kanjiInWord: ["生"] },
          { text: "いっしょに", reading: "issho ni", meaning: "together", kanjiInWord: [] },
          { text: "いましょう", reading: "imashou", meaning: "let's be", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
        sentence: "先にいってください",
        sentenceMeaning: "Please go ahead.",
        incorrectSentenceMeanings: ["Please come back.", "Please wait here.", "Please go later."],
        words: [
          { text: "先に", reading: "sakini", meaning: "ahead", isNewWord: true, kanjiInWord: ["先"] },
          { text: "いって", reading: "itte", meaning: "go", kanjiInWord: [] },
          { text: "ください", reading: "kudasai", meaning: "please", kanjiInWord: [] }
        ]
      },
      {
        sentence: "先にどうぞ",
        sentenceMeaning: "Please go first.",
        incorrectSentenceMeanings: ["Please come later.", "Please wait here.", "Please go last."],
        words: [
          { text: "先に", reading: "sakini", meaning: "first", isNewWord: true, kanjiInWord: ["先"] },
          { text: "どうぞ", reading: "douzo", meaning: "please/go ahead", kanjiInWord: [] }
        ]
      },
      {
        sentence: "わたしが先にきました",
        sentenceMeaning: "I arrived first.",
        incorrectSentenceMeanings: ["I arrived last.", "The teacher arrived first.", "I arrived on time."],
        words: [
          { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "先に", reading: "sakini", meaning: "first", isNewWord: true, kanjiInWord: ["先"] },
          { text: "きました", reading: "kimashita", meaning: "arrived/came", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "目ひょうをもっています",
        sentenceMeaning: "I have a goal.",
        incorrectSentenceMeanings: ["I don't have a goal.", "My goal is unclear.", "I gave up my goal."],
        words: [
          { text: "目ひょう", reading: "mokuhyou", meaning: "goal", isNewWord: true, kanjiInWord: ["目"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "もっています", reading: "motteimasu", meaning: "have", kanjiInWord: [] }
        ]
      },
      {
        sentence: "学せいの目ひょうはなんですか",
        sentenceMeaning: "What is the student's goal?",
        incorrectSentenceMeanings: ["What is the teacher's goal?", "The student has no goal.", "The student achieved the goal."],
        words: [
          { text: "学せい", reading: "gakusei", meaning: "student", kanjiInWord: ["学"] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "目ひょう", reading: "mokuhyou", meaning: "goal", isNewWord: true, kanjiInWord: ["目"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "なんですか", reading: "nan desu ka", meaning: "what is it?", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "にほん人がたくさんいます",
        sentenceMeaning: "There are many Japanese people.",
        incorrectSentenceMeanings: ["There are no Japanese people.", "There are few Japanese people.", "Japanese people are leaving."],
        words: [
          { text: "にほん人", reading: "nihonjin", meaning: "Japanese person", isNewWord: true, kanjiInWord: ["人"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "たくさん", reading: "takusan", meaning: "many", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "exist", kanjiInWord: [] }
        ]
      },
      {
        sentence: "わたしはにほん人です",
        sentenceMeaning: "I am Japanese.",
        incorrectSentenceMeanings: ["I am not Japanese.", "You are Japanese.", "I am American."],
        words: [
          { text: "わたし", reading: "watashi", meaning: "I", kanjiInWord: [] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "にほん人", reading: "nihonjin", meaning: "Japanese person", isNewWord: true, kanjiInWord: ["人"] },
          { text: "です", reading: "desu", meaning: "am", kanjiInWord: [] }
        ]
      }
    ]
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
    examples: [
      {
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
      },
      {
        sentence: "人生はたのしいです",
        sentenceMeaning: "Life is fun.",
        incorrectSentenceMeanings: ["Life is difficult.", "Life is short.", "Life is not fun."],
        words: [
          { text: "人生", reading: "jinsei", meaning: "life", isNewWord: true, kanjiInWord: ["人", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たのしい", reading: "tanoshii", meaning: "fun", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "人生はいっ生つづきます",
        sentenceMeaning: "Life continues for a lifetime.",
        incorrectSentenceMeanings: ["Life ends quickly.", "Life is just a moment.", "Life starts over."],
        words: [
          { text: "人生", reading: "jinsei", meaning: "life", isNewWord: true, kanjiInWord: ["人", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "いっ生", reading: "isshou", meaning: "lifetime", kanjiInWord: ["生"] },
          { text: "つづきます", reading: "tsuzukimasu", meaning: "continues", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "本",
    meaning: "book, origin, real",
    characterReading: "ほん",
    vocabularyWord: {
      word: "本",
      reading: "ほん",
      meaning: "book",
      incorrectAnswers: ["pencil", "notebook", "magazine"]
    },
    examples: [
      {
        sentence: "本をよみます",
        sentenceMeaning: "I read a book.",
        incorrectSentenceMeanings: ["I buy a book.", "I write a book.", "I lose a book."],
        words: [
          { text: "本", reading: "hon", meaning: "book", isNewWord: true, kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみます", reading: "yomimasu", meaning: "read", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが本をよんでいます",
        sentenceMeaning: "The child is reading a book.",
        incorrectSentenceMeanings: ["The child is writing a book.", "The teacher is reading a book.", "The child is buying a book."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", isNewWord: true, kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よんでいます", reading: "yondeimasu", meaning: "is reading", kanjiInWord: [] }
        ]
      },
      {
        sentence: "この本はおもしろいです",
        sentenceMeaning: "This book is interesting.",
        incorrectSentenceMeanings: ["This book is boring.", "That book is interesting.", "This book is difficult."],
        words: [
          { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", isNewWord: true, kanjiInWord: ["本"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "おもしろい", reading: "omoshiroi", meaning: "interesting", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "本",
    meaning: "book, origin, real",
    characterReading: "ほん",
    vocabularyWord: {
      word: "日本",
      reading: "にほん",
      meaning: "Japan",
      incorrectAnswers: ["China", "Korea", "America"]
    },
    examples: [
      {
        sentence: "日本はきれいです",
        sentenceMeaning: "Japan is beautiful.",
        incorrectSentenceMeanings: ["Japan is not beautiful.", "Japan is far away.", "Japan is small."],
        words: [
          { text: "日本", reading: "nihon", meaning: "Japan", isNewWord: true, kanjiInWord: ["日", "本"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "きれい", reading: "kirei", meaning: "beautiful", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "先生は日本人です",
        sentenceMeaning: "The teacher is Japanese.",
        incorrectSentenceMeanings: ["The teacher is American.", "The student is Japanese.", "The teacher is not Japanese."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "日本人", reading: "nihonjin", meaning: "Japanese person", isNewWord: true, kanjiInWord: ["日", "本", "人"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "日本に生まれました",
        sentenceMeaning: "I was born in Japan.",
        incorrectSentenceMeanings: ["I was born in America.", "I live in Japan.", "I will go to Japan."],
        words: [
          { text: "日本", reading: "nihon", meaning: "Japan", isNewWord: true, kanjiInWord: ["日", "本"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "生まれました", reading: "umaremashita", meaning: "was born", kanjiInWord: ["生"] }
        ]
      }
    ]
  },
  {
    character: "本",
    meaning: "book, origin, real",
    characterReading: "ほん",
    vocabularyWord: {
      word: "本とう",
      reading: "ほんとう",
      meaning: "truth, really",
      incorrectAnswers: ["lie", "maybe", "sometimes"]
    },
    examples: [
      {
        sentence: "本とうですか",
        sentenceMeaning: "Is that true?",
        incorrectSentenceMeanings: ["Is that a lie?", "Is that possible?", "Is that okay?"],
        words: [
          { text: "本とう", reading: "hontou", meaning: "true", isNewWord: true, kanjiInWord: ["本"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] },
          { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
        ]
      },
      {
        sentence: "本とうにありがとう",
        sentenceMeaning: "Thank you very much.",
        incorrectSentenceMeanings: ["Thank you a little.", "I am not grateful.", "Maybe thank you."],
        words: [
          { text: "本とうに", reading: "hontouni", meaning: "truly", isNewWord: true, kanjiInWord: ["本"] },
          { text: "ありがとう", reading: "arigatou", meaning: "thank you", kanjiInWord: [] }
        ]
      },
      {
        sentence: "それは本とうのことです",
        sentenceMeaning: "That is the truth.",
        incorrectSentenceMeanings: ["That is a lie.", "That is uncertain.", "That is not important."],
        words: [
          { text: "それ", reading: "sore", meaning: "that", kanjiInWord: [] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "本とう", reading: "hontou", meaning: "truth", isNewWord: true, kanjiInWord: ["本"] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "こと", reading: "koto", meaning: "thing/fact", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "休",
    meaning: "rest, holiday",
    characterReading: "やす",
    vocabularyWord: {
      word: "休みます",
      reading: "やすみます",
      meaning: "to rest, to be absent",
      incorrectAnswers: ["to work", "to study", "to play"]
    },
    examples: [
      {
        sentence: "たくさん休みます",
        sentenceMeaning: "I will rest a lot.",
        incorrectSentenceMeanings: ["I will work a lot.", "I will study a lot.", "I will not rest."],
        words: [
          { text: "たくさん", reading: "takusan", meaning: "a lot", kanjiInWord: [] },
          { text: "休みます", reading: "yasumimasu", meaning: "will rest", isNewWord: true, kanjiInWord: ["休"] }
        ]
      },
      {
        sentence: "子どもが休んでいます",
        sentenceMeaning: "The child is resting.",
        incorrectSentenceMeanings: ["The child is playing.", "The child is working.", "The teacher is resting."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "休んでいます", reading: "yasundeimasu", meaning: "is resting", isNewWord: true, kanjiInWord: ["休"] }
        ]
      },
      {
        sentence: "学こうを休みます",
        sentenceMeaning: "I will be absent from school.",
        incorrectSentenceMeanings: ["I will go to school.", "I will study at school.", "The school will be closed."],
        words: [
          { text: "学こう", reading: "gakkou", meaning: "school", kanjiInWord: ["学"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "休みます", reading: "yasumimasu", meaning: "will be absent", isNewWord: true, kanjiInWord: ["休"] }
        ]
      }
    ]
  },
  {
    character: "休",
    meaning: "rest, holiday",
    characterReading: "きゅう",
    vocabularyWord: {
      word: "休日",
      reading: "きゅうじつ",
      meaning: "holiday, day off",
      incorrectAnswers: ["workday", "school day", "weekday"]
    },
    examples: [
      {
        sentence: "休日はたのしいです",
        sentenceMeaning: "Holidays are fun.",
        incorrectSentenceMeanings: ["Holidays are boring.", "Weekdays are fun.", "Holidays are difficult."],
        words: [
          { text: "休日", reading: "kyuujitsu", meaning: "holiday", isNewWord: true, kanjiInWord: ["休", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たのしい", reading: "tanoshii", meaning: "fun", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "休日に本をよみます",
        sentenceMeaning: "I read books on holidays.",
        incorrectSentenceMeanings: ["I work on holidays.", "I study on holidays.", "I don't read on holidays."],
        words: [
          { text: "休日", reading: "kyuujitsu", meaning: "holiday", isNewWord: true, kanjiInWord: ["休", "日"] },
          { text: "に", reading: "ni", meaning: "on", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみます", reading: "yomimasu", meaning: "read", kanjiInWord: [] }
        ]
      },
      {
        sentence: "先生も休日があります",
        sentenceMeaning: "Teachers also have days off.",
        incorrectSentenceMeanings: ["Teachers never have days off.", "Only students have days off.", "Teachers work every day."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "も", reading: "mo", meaning: "also", kanjiInWord: [] },
          { text: "休日", reading: "kyuujitsu", meaning: "day off", isNewWord: true, kanjiInWord: ["休", "日"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists/have", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "今",
    meaning: "now, current",
    characterReading: "いま",
    vocabularyWord: {
      word: "今",
      reading: "いま",
      meaning: "now",
      incorrectAnswers: ["later", "yesterday", "tomorrow"]
    },
    examples: [
      {
        sentence: "今なにをしていますか",
        sentenceMeaning: "What are you doing now?",
        incorrectSentenceMeanings: ["What did you do earlier?", "What will you do later?", "Are you doing something?"],
        words: [
          { text: "今", reading: "ima", meaning: "now", isNewWord: true, kanjiInWord: ["今"] },
          { text: "なに", reading: "nani", meaning: "what", kanjiInWord: [] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "していますか", reading: "shiteimasu ka", meaning: "are you doing?", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今先生がいます",
        sentenceMeaning: "The teacher is here now.",
        incorrectSentenceMeanings: ["The teacher is not here now.", "The teacher was here earlier.", "The student is here now."],
        words: [
          { text: "今", reading: "ima", meaning: "now", isNewWord: true, kanjiInWord: ["今"] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is here", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが今ねています",
        sentenceMeaning: "The child is sleeping now.",
        incorrectSentenceMeanings: ["The child was sleeping earlier.", "The child is awake now.", "The teacher is sleeping now."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "今", reading: "ima", meaning: "now", isNewWord: true, kanjiInWord: ["今"] },
          { text: "ねています", reading: "neteimasu", meaning: "is sleeping", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "日",
    meaning: "sun, day",
    characterReading: "にち",
    vocabularyWord: {
      word: "日曜日",
      reading: "にちようび",
      meaning: "Sunday",
      incorrectAnswers: ["Monday", "Saturday", "Wednesday"]
    },
    examples: [
      {
        sentence: "日曜日は休日です",
        sentenceMeaning: "Sunday is a holiday.",
        incorrectSentenceMeanings: ["Sunday is a school day.", "Sunday is a workday.", "Sunday is not a holiday."],
        words: [
          { text: "日曜日", reading: "nichiyoubi", meaning: "Sunday", isNewWord: true, kanjiInWord: ["日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休日", reading: "kyuujitsu", meaning: "holiday", kanjiInWord: ["休", "日"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "日曜日に本をよみます",
        sentenceMeaning: "I read books on Sunday.",
        incorrectSentenceMeanings: ["I work on Sunday.", "I study on Sunday.", "I don't read on Sunday."],
        words: [
          { text: "日曜日", reading: "nichiyoubi", meaning: "Sunday", isNewWord: true, kanjiInWord: ["日"] },
          { text: "に", reading: "ni", meaning: "on", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみます", reading: "yomimasu", meaning: "read", kanjiInWord: [] }
        ]
      },
      {
        sentence: "日曜日はたのしいです",
        sentenceMeaning: "Sunday is fun.",
        incorrectSentenceMeanings: ["Sunday is boring.", "Monday is fun.", "Sunday is difficult."],
        words: [
          { text: "日曜日", reading: "nichiyoubi", meaning: "Sunday", isNewWord: true, kanjiInWord: ["日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たのしい", reading: "tanoshii", meaning: "fun", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "週",
    meaning: "week",
    characterReading: "しゅう",
    vocabularyWord: {
      word: "週",
      reading: "しゅう",
      meaning: "week",
      incorrectAnswers: ["month", "day", "year"]
    },
    examples: [
      {
        sentence: "一週にいちどいきます",
        sentenceMeaning: "I go once a week.",
        incorrectSentenceMeanings: ["I go twice a week.", "I go every day.", "I go once a month."],
        words: [
          { text: "一週", reading: "isshuu", meaning: "one week", isNewWord: true, kanjiInWord: ["週"] },
          { text: "に", reading: "ni", meaning: "per", kanjiInWord: [] },
          { text: "いちど", reading: "ichido", meaning: "once", kanjiInWord: [] },
          { text: "いきます", reading: "ikimasu", meaning: "go", kanjiInWord: [] }
        ]
      },
      {
        sentence: "毎週先生に会います",
        sentenceMeaning: "I meet the teacher every week.",
        incorrectSentenceMeanings: ["I meet the teacher every day.", "I never meet the teacher.", "I met the teacher once."],
        words: [
          { text: "毎週", reading: "maishuu", meaning: "every week", isNewWord: true, kanjiInWord: ["週"] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "に", reading: "ni", meaning: "with", kanjiInWord: [] },
          { text: "会います", reading: "aimasu", meaning: "meet", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今週は休みます",
        sentenceMeaning: "I will rest this week.",
        incorrectSentenceMeanings: ["I will work this week.", "I rested last week.", "I will study this week."],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", isNewWord: true, kanjiInWord: ["今", "週"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休みます", reading: "yasumimasu", meaning: "will rest", kanjiInWord: ["休"] }
        ]
      }
    ]
  },
  {
    character: "週",
    meaning: "week",
    characterReading: "しゅう",
    vocabularyWord: {
      word: "今週",
      reading: "こんしゅう",
      meaning: "this week",
      incorrectAnswers: ["last week", "next week", "every week"]
    },
    examples: [
      {
        sentence: "今週は休日があります",
        sentenceMeaning: "There is a holiday this week.",
        incorrectSentenceMeanings: ["There is no holiday this week.", "Last week had a holiday.", "Next week has a holiday."],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", isNewWord: true, kanjiInWord: ["今", "週"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休日", reading: "kyuujitsu", meaning: "holiday", kanjiInWord: ["休", "日"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今週先生に会いますか",
        sentenceMeaning: "Will you meet the teacher this week?",
        incorrectSentenceMeanings: ["Did you meet the teacher last week?", "Will you meet the student this week?", "Won't you meet the teacher this week?"],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", isNewWord: true, kanjiInWord: ["今", "週"] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "に", reading: "ni", meaning: "with", kanjiInWord: [] },
          { text: "会いますか", reading: "aimasuka", meaning: "will you meet?", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今週はたくさん本をよみます",
        sentenceMeaning: "I will read many books this week.",
        incorrectSentenceMeanings: ["I read many books last week.", "I won't read this week.", "I will buy books this week."],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", isNewWord: true, kanjiInWord: ["今", "週"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たくさん", reading: "takusan", meaning: "many", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみます", reading: "yomimasu", meaning: "will read", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "日",
    meaning: "sun, day",
    characterReading: "きょう",
    vocabularyWord: {
      word: "今日",
      reading: "きょう",
      meaning: "today",
      incorrectAnswers: ["tomorrow", "yesterday", "next week"]
    },
    examples: [
      {
        sentence: "今日は休日です",
        sentenceMeaning: "Today is a holiday.",
        incorrectSentenceMeanings: ["Today is a school day.", "Today is a workday.", "Today is not a holiday."],
        words: [
          { text: "今日", reading: "kyou", meaning: "today", isNewWord: true, kanjiInWord: ["今", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休日", reading: "kyuujitsu", meaning: "holiday", kanjiInWord: ["休", "日"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今日先生に会います",
        sentenceMeaning: "I will meet the teacher today.",
        incorrectSentenceMeanings: ["I met the teacher yesterday.", "I won't meet the teacher today.", "I will meet the student today."],
        words: [
          { text: "今日", reading: "kyou", meaning: "today", isNewWord: true, kanjiInWord: ["今", "日"] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "に", reading: "ni", meaning: "with", kanjiInWord: [] },
          { text: "会います", reading: "aimasu", meaning: "will meet", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今日は本をよみました",
        sentenceMeaning: "I read a book today.",
        incorrectSentenceMeanings: ["I bought a book today.", "I didn't read today.", "I read a book yesterday."],
        words: [
          { text: "今日", reading: "kyou", meaning: "today", isNewWord: true, kanjiInWord: ["今", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみました", reading: "yomimashita", meaning: "read", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "木",
    meaning: "tree, wood",
    characterReading: "き",
    vocabularyWord: {
      word: "木",
      reading: "き",
      meaning: "tree",
      incorrectAnswers: ["flower", "water", "stone"]
    },
    examples: [
      {
        sentence: "木がたくさんあります",
        sentenceMeaning: "There are many trees.",
        incorrectSentenceMeanings: ["There are no trees.", "There is one tree.", "The trees are gone."],
        words: [
          { text: "木", reading: "ki", meaning: "tree", isNewWord: true, kanjiInWord: ["木"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "たくさん", reading: "takusan", meaning: "many", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exist", kanjiInWord: [] }
        ]
      },
      {
        sentence: "あの木はおおきいです",
        sentenceMeaning: "That tree is big.",
        incorrectSentenceMeanings: ["That tree is small.", "This tree is big.", "That flower is big."],
        words: [
          { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
          { text: "木", reading: "ki", meaning: "tree", isNewWord: true, kanjiInWord: ["木"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "おおきい", reading: "ookii", meaning: "big", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが木にのぼります",
        sentenceMeaning: "The child climbs a tree.",
        incorrectSentenceMeanings: ["The child falls from a tree.", "The teacher climbs a tree.", "The child plays near a tree."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "木", reading: "ki", meaning: "tree", isNewWord: true, kanjiInWord: ["木"] },
          { text: "に", reading: "ni", meaning: "on", kanjiInWord: [] },
          { text: "のぼります", reading: "noborimasu", meaning: "climbs", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "木",
    meaning: "tree, wood",
    characterReading: "もく",
    vocabularyWord: {
      word: "木曜日",
      reading: "もくようび",
      meaning: "Thursday",
      incorrectAnswers: ["Tuesday", "Friday", "Sunday"]
    },
    examples: [
      {
        sentence: "木曜日は学こうがあります",
        sentenceMeaning: "I have school on Thursday.",
        incorrectSentenceMeanings: ["There is no school on Thursday.", "I have school on Friday.", "Thursday is a holiday."],
        words: [
          { text: "木曜日", reading: "mokuyoubi", meaning: "Thursday", isNewWord: true, kanjiInWord: ["木", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "学こう", reading: "gakkou", meaning: "school", kanjiInWord: ["学"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
        ]
      },
      {
        sentence: "木曜日に先生に会います",
        sentenceMeaning: "I meet the teacher on Thursday.",
        incorrectSentenceMeanings: ["I met the teacher on Wednesday.", "I won't meet the teacher on Thursday.", "I meet the student on Thursday."],
        words: [
          { text: "木曜日", reading: "mokuyoubi", meaning: "Thursday", isNewWord: true, kanjiInWord: ["木", "日"] },
          { text: "に", reading: "ni", meaning: "on", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "に", reading: "ni", meaning: "with", kanjiInWord: [] },
          { text: "会います", reading: "aimasu", meaning: "meet", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今週は木曜日があります",
        sentenceMeaning: "This week has a Thursday.",
        incorrectSentenceMeanings: ["This week has no Thursday.", "Thursday is next week.", "Thursday was last week."],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", kanjiInWord: ["今", "週"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "木曜日", reading: "mokuyoubi", meaning: "Thursday", isNewWord: true, kanjiInWord: ["木", "日"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "木",
    meaning: "tree, wood",
    characterReading: "ぎ",
    vocabularyWord: {
      word: "六本木",
      reading: "ろっぽんぎ",
      meaning: "Roppongi (area in Tokyo)",
      incorrectAnswers: ["Shinjuku", "Shibuya", "Ginza"]
    },
    examples: [
      {
        sentence: "六本木はにぎやかです",
        sentenceMeaning: "Roppongi is lively.",
        incorrectSentenceMeanings: ["Roppongi is quiet.", "Roppongi is boring.", "Roppongi is far away."],
        words: [
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "にぎやか", reading: "nigiyaka", meaning: "lively", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "六本木に先生がいます",
        sentenceMeaning: "There is a teacher in Roppongi.",
        incorrectSentenceMeanings: ["There is a student in Roppongi.", "There is no one in Roppongi.", "The teacher left Roppongi."],
        words: [
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "六本木は日本にあります",
        sentenceMeaning: "Roppongi is in Japan.",
        incorrectSentenceMeanings: ["Roppongi is in America.", "Roppongi is not in Japan.", "Roppongi is a park."],
        words: [
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "日本", reading: "nihon", meaning: "Japan", kanjiInWord: ["日", "本"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "is located", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "見",
    meaning: "to see, to look",
    characterReading: "み",
    vocabularyWord: {
      word: "見ます",
      reading: "みます",
      meaning: "to see, to watch",
      incorrectAnswers: ["to hear", "to eat", "to go"]
    },
    examples: [
      {
        sentence: "本をよく見ます",
        sentenceMeaning: "I look at the book carefully.",
        incorrectSentenceMeanings: ["I read the book.", "I don't look at the book.", "I buy the book."],
        words: [
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よく", reading: "yoku", meaning: "well/carefully", kanjiInWord: [] },
          { text: "見ます", reading: "mimasu", meaning: "look at", isNewWord: true, kanjiInWord: ["見"] }
        ]
      },
      {
        sentence: "子どもが木を見ています",
        sentenceMeaning: "The child is looking at the tree.",
        incorrectSentenceMeanings: ["The child is climbing the tree.", "The teacher is looking at the tree.", "The child is not looking."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "木", reading: "ki", meaning: "tree", kanjiInWord: ["木"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "見ています", reading: "miteimasu", meaning: "is looking at", isNewWord: true, kanjiInWord: ["見"] }
        ]
      },
      {
        sentence: "先生が目で見ます",
        sentenceMeaning: "The teacher sees with their eyes.",
        incorrectSentenceMeanings: ["The teacher hears with their eyes.", "The student sees with their eyes.", "The teacher cannot see."],
        words: [
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "目", reading: "me", meaning: "eyes", kanjiInWord: ["目"] },
          { text: "で", reading: "de", meaning: "with", kanjiInWord: [] },
          { text: "見ます", reading: "mimasu", meaning: "sees", isNewWord: true, kanjiInWord: ["見"] }
        ]
      }
    ]
  },
  {
    character: "見",
    meaning: "to see, to look",
    characterReading: "けん",
    vocabularyWord: {
      word: "見学",
      reading: "けんがく",
      meaning: "field trip, observation visit",
      incorrectAnswers: ["homework", "graduation", "entrance exam"]
    },
    examples: [
      {
        sentence: "学こうの見学があります",
        sentenceMeaning: "There is a school observation visit.",
        incorrectSentenceMeanings: ["There is no observation visit.", "There is a school exam.", "The observation visit is canceled."],
        words: [
          { text: "学こう", reading: "gakkou", meaning: "school", kanjiInWord: ["学"] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "見学", reading: "kengaku", meaning: "observation visit", isNewWord: true, kanjiInWord: ["見", "学"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが見学にいきます",
        sentenceMeaning: "The children go on a field trip.",
        incorrectSentenceMeanings: ["The children come back from a field trip.", "The teacher goes on a field trip.", "The children don't go."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "見学", reading: "kengaku", meaning: "field trip", isNewWord: true, kanjiInWord: ["見", "学"] },
          { text: "に", reading: "ni", meaning: "to", kanjiInWord: [] },
          { text: "いきます", reading: "ikimasu", meaning: "go", kanjiInWord: [] }
        ]
      },
      {
        sentence: "今日は見学の日です",
        sentenceMeaning: "Today is the day of the field trip.",
        incorrectSentenceMeanings: ["Today is not the field trip day.", "Tomorrow is the field trip day.", "Today is a regular school day."],
        words: [
          { text: "今日", reading: "kyou", meaning: "today", kanjiInWord: ["今", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "見学", reading: "kengaku", meaning: "field trip", isNewWord: true, kanjiInWord: ["見", "学"] },
          { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
          { text: "日", reading: "hi", meaning: "day", kanjiInWord: ["日"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "父",
    meaning: "father",
    characterReading: "ちち",
    vocabularyWord: {
      word: "父",
      reading: "ちち",
      meaning: "father (my own)",
      incorrectAnswers: ["mother", "brother", "grandfather"]
    },
    examples: [
      {
        sentence: "父は先生です",
        sentenceMeaning: "My father is a teacher.",
        incorrectSentenceMeanings: ["My father is a student.", "My mother is a teacher.", "My father is not a teacher."],
        words: [
          { text: "父", reading: "chichi", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "父と本をよみます",
        sentenceMeaning: "I read books with my father.",
        incorrectSentenceMeanings: ["I read books alone.", "My father reads alone.", "I watch TV with my father."],
        words: [
          { text: "父", reading: "chichi", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "と", reading: "to", meaning: "with", kanjiInWord: [] },
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
          { text: "よみます", reading: "yomimasu", meaning: "read", kanjiInWord: [] }
        ]
      },
      {
        sentence: "父は日本にいます",
        sentenceMeaning: "My father is in Japan.",
        incorrectSentenceMeanings: ["My father is in America.", "My father is not in Japan.", "My mother is in Japan."],
        words: [
          { text: "父", reading: "chichi", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "日本", reading: "nihon", meaning: "Japan", kanjiInWord: ["日", "本"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "父",
    meaning: "father",
    characterReading: "とう",
    vocabularyWord: {
      word: "お父さん",
      reading: "おとうさん",
      meaning: "father (polite/addressing)",
      incorrectAnswers: ["mother", "grandfather", "uncle"]
    },
    examples: [
      {
        sentence: "お父さんはどこですか",
        sentenceMeaning: "Where is your father?",
        incorrectSentenceMeanings: ["Where is your mother?", "Who is your father?", "When is your father coming?"],
        words: [
          { text: "お父さん", reading: "otousan", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "どこ", reading: "doko", meaning: "where", kanjiInWord: [] },
          { text: "ですか", reading: "desuka", meaning: "is?", kanjiInWord: [] }
        ]
      },
      {
        sentence: "お父さんが先生です",
        sentenceMeaning: "My father is a teacher.",
        incorrectSentenceMeanings: ["My father is a student.", "My mother is a teacher.", "My father is a doctor."],
        words: [
          { text: "お父さん", reading: "otousan", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "お父さんと見学にいきます",
        sentenceMeaning: "I go on a field trip with my father.",
        incorrectSentenceMeanings: ["I go alone on a field trip.", "My father goes on a field trip alone.", "I go shopping with my father."],
        words: [
          { text: "お父さん", reading: "otousan", meaning: "father", isNewWord: true, kanjiInWord: ["父"] },
          { text: "と", reading: "to", meaning: "with", kanjiInWord: [] },
          { text: "見学", reading: "kengaku", meaning: "field trip", kanjiInWord: ["見", "学"] },
          { text: "に", reading: "ni", meaning: "to", kanjiInWord: [] },
          { text: "いきます", reading: "ikimasu", meaning: "go", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "六",
    meaning: "six",
    characterReading: "ろく",
    vocabularyWord: {
      word: "六",
      reading: "ろく",
      meaning: "six",
      incorrectAnswers: ["five", "seven", "eight"]
    },
    examples: [
      {
        sentence: "子どもが六人います",
        sentenceMeaning: "There are six children.",
        incorrectSentenceMeanings: ["There are five children.", "There are seven children.", "There are no children."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "六", reading: "roku", meaning: "six", isNewWord: true, kanjiInWord: ["六"] },
          { text: "人", reading: "nin", meaning: "(counter for people)", kanjiInWord: ["人"] },
          { text: "います", reading: "imasu", meaning: "exist", kanjiInWord: [] }
        ]
      },
      {
        sentence: "本が六冊あります",
        sentenceMeaning: "There are six books.",
        incorrectSentenceMeanings: ["There are five books.", "There are seven books.", "There are no books."],
        words: [
          { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "六冊", reading: "rokusatsu", meaning: "six (books)", isNewWord: true, kanjiInWord: ["六"] },
          { text: "あります", reading: "arimasu", meaning: "exist", kanjiInWord: [] }
        ]
      },
      {
        sentence: "木が六本あります",
        sentenceMeaning: "There are six trees.",
        incorrectSentenceMeanings: ["There are five trees.", "There is one tree.", "There are no trees."],
        words: [
          { text: "木", reading: "ki", meaning: "tree", kanjiInWord: ["木"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "六本", reading: "roppon", meaning: "six (long objects)", isNewWord: true, kanjiInWord: ["六", "本"] },
          { text: "あります", reading: "arimasu", meaning: "exist", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "六",
    meaning: "six",
    characterReading: "ろっ",
    vocabularyWord: {
      word: "六本木",
      reading: "ろっぽんぎ",
      meaning: "Roppongi (area in Tokyo)",
      incorrectAnswers: ["Shinjuku", "Shibuya", "Ginza"]
    },
    examples: [
      {
        sentence: "六本木はにぎやかです",
        sentenceMeaning: "Roppongi is lively.",
        incorrectSentenceMeanings: ["Roppongi is quiet.", "Roppongi is boring.", "Roppongi is empty."],
        words: [
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "にぎやか", reading: "nigiyaka", meaning: "lively", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "六本木は日本にあります",
        sentenceMeaning: "Roppongi is in Japan.",
        incorrectSentenceMeanings: ["Roppongi is in America.", "Roppongi is not in Japan.", "Roppongi is a park."],
        words: [
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "日本", reading: "nihon", meaning: "Japan", kanjiInWord: ["日", "本"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "is located", kanjiInWord: [] }
        ]
      },
      {
        sentence: "お父さんは六本木にいます",
        sentenceMeaning: "My father is in Roppongi.",
        incorrectSentenceMeanings: ["My father is not in Roppongi.", "My mother is in Roppongi.", "My father went to Roppongi."],
        words: [
          { text: "お父さん", reading: "otousan", meaning: "father", kanjiInWord: ["父"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "六本木", reading: "roppongi", meaning: "Roppongi", isNewWord: true, kanjiInWord: ["六", "本", "木"] },
          { text: "に", reading: "ni", meaning: "in", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "校",
    meaning: "school",
    characterReading: "こう",
    vocabularyWord: {
      word: "学校",
      reading: "がっこう",
      meaning: "school",
      incorrectAnswers: ["hospital", "library", "office"]
    },
    examples: [
      {
        sentence: "学校に先生がいます",
        sentenceMeaning: "There is a teacher at the school.",
        incorrectSentenceMeanings: ["There is no teacher at school.", "There is a student at the school.", "The school is empty."],
        words: [
          { text: "学校", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学", "校"] },
          { text: "に", reading: "ni", meaning: "at", kanjiInWord: [] },
          { text: "先生", reading: "sensei", meaning: "teacher", kanjiInWord: ["先", "生"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "います", reading: "imasu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "子どもが学校にいきます",
        sentenceMeaning: "The child goes to school.",
        incorrectSentenceMeanings: ["The child comes home from school.", "The teacher goes to school.", "The child doesn't go to school."],
        words: [
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "学校", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学", "校"] },
          { text: "に", reading: "ni", meaning: "to", kanjiInWord: [] },
          { text: "いきます", reading: "ikimasu", meaning: "goes", kanjiInWord: [] }
        ]
      },
      {
        sentence: "学校はたのしいです",
        sentenceMeaning: "School is fun.",
        incorrectSentenceMeanings: ["School is boring.", "School is difficult.", "I don't like school."],
        words: [
          { text: "学校", reading: "gakkou", meaning: "school", isNewWord: true, kanjiInWord: ["学", "校"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "たのしい", reading: "tanoshii", meaning: "fun", kanjiInWord: [] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      }
    ]
  },
  {
    character: "校",
    meaning: "school",
    characterReading: "こう",
    vocabularyWord: {
      word: "休校",
      reading: "きゅうこう",
      meaning: "school closure",
      incorrectAnswers: ["school festival", "graduation", "entrance ceremony"]
    },
    examples: [
      {
        sentence: "今日は休校です",
        sentenceMeaning: "School is closed today.",
        incorrectSentenceMeanings: ["School is open today.", "Today is a regular school day.", "School will close tomorrow."],
        words: [
          { text: "今日", reading: "kyou", meaning: "today", kanjiInWord: ["今", "日"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休校", reading: "kyuukou", meaning: "school closure", isNewWord: true, kanjiInWord: ["休", "校"] },
          { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
        ]
      },
      {
        sentence: "休校のとき子どもは休みます",
        sentenceMeaning: "When school is closed, children rest.",
        incorrectSentenceMeanings: ["When school is open, children rest.", "When school is closed, children study.", "Children don't rest when school is closed."],
        words: [
          { text: "休校", reading: "kyuukou", meaning: "school closure", isNewWord: true, kanjiInWord: ["休", "校"] },
          { text: "のとき", reading: "no toki", meaning: "when", kanjiInWord: [] },
          { text: "子ども", reading: "kodomo", meaning: "child", kanjiInWord: ["子"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休みます", reading: "yasumimasu", meaning: "rest", kanjiInWord: ["休"] }
        ]
      },
      {
        sentence: "今週は休校があります",
        sentenceMeaning: "There is a school closure this week.",
        incorrectSentenceMeanings: ["There is no school closure this week.", "Last week had a school closure.", "School will close next week."],
        words: [
          { text: "今週", reading: "konshuu", meaning: "this week", kanjiInWord: ["今", "週"] },
          { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
          { text: "休校", reading: "kyuukou", meaning: "school closure", isNewWord: true, kanjiInWord: ["休", "校"] },
          { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
          { text: "あります", reading: "arimasu", meaning: "exists", kanjiInWord: [] }
        ]
      }
    ]
  }
];

export default kanjiData;
