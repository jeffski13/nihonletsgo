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
  }
];

export default kanjiData;
