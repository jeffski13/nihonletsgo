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

const kanjiData = [
  // === BASIC STANDALONE KANJI (no dependencies) ===
  {
    character: "一",
    meaning: "one",
    characterReading: "ひと",
    vocabularyWord: {
      word: "一つ",
      reading: "ひとつ",
      meaning: "one (thing)",
      distractors: ["two (things)", "three (things)", "many"]
    },
    example: {
      sentence: "りんごを一つください",
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
      distractors: ["animal", "thing", "place"]
    },
    example: {
      sentence: "あの人はだれですか",
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
      distractors: ["small", "tall", "wide"]
    },
    example: {
      sentence: "このいぬは大きいです",
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
      distractors: ["big", "tall", "wide"]
    },
    example: {
      sentence: "小さいねこがいます",
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
      distractors: ["outside", "above", "below"]
    },
    example: {
      sentence: "かばんの中にあります",
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
      distractors: ["below", "beside", "behind"]
    },
    example: {
      sentence: "つくえの上にあります",
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
      distractors: ["above", "beside", "behind"]
    },
    example: {
      sentence: "いすの下にねこがいます",
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
      distractors: ["to enter", "to stay", "to return"]
    },
    example: {
      sentence: "へやを出る",
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
      distractors: ["to exit", "to stay", "to return"]
    },
    example: {
      sentence: "へやに入る",
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
      distractors: ["magazine", "newspaper", "letter"]
    },
    example: {
      sentence: "本をかいます",
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
      distractors: ["tea", "juice", "milk"]
    },
    example: {
      sentence: "水をのみます",
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
      distractors: ["flower", "grass", "leaf"]
    },
    example: {
      sentence: "大きい木があります",
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
      distractors: ["gold", "silver", "coin"]
    },
    example: {
      sentence: "お金がありません",
      words: [
        { text: "お金", reading: "okane", meaning: "money", isNewWord: true, kanjiInWord: ["金"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "ありません", reading: "arimasen", meaning: "does not exist", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "今",
    meaning: "now",
    characterReading: "いま",
    vocabularyWord: {
      word: "今",
      reading: "いま",
      meaning: "now",
      distractors: ["later", "before", "always"]
    },
    example: {
      sentence: "今、なにをしていますか",
      words: [
        { text: "今", reading: "ima", meaning: "now", isNewWord: true, kanjiInWord: ["今"] },
        { text: "なに", reading: "nani", meaning: "what", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "しています", reading: "shiteimasu", meaning: "are doing", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "何",
    meaning: "what",
    characterReading: "なに",
    vocabularyWord: {
      word: "何",
      reading: "なに",
      meaning: "what",
      distractors: ["who", "where", "when"]
    },
    example: {
      sentence: "これは何ですか",
      words: [
        { text: "これ", reading: "kore", meaning: "this", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "何", reading: "nan", meaning: "what", isNewWord: true, kanjiInWord: ["何"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  },

  // === ACTION VERBS (standalone kanji) ===
  {
    character: "行",
    meaning: "go",
    characterReading: "い",
    vocabularyWord: {
      word: "行く",
      reading: "いく",
      meaning: "to go",
      distractors: ["to come", "to return", "to stay"]
    },
    example: {
      sentence: "がっこうに行く",
      words: [
        { text: "がっこう", reading: "gakkou", meaning: "school", kanjiInWord: [] },
        { text: "に", reading: "ni", meaning: "to", kanjiInWord: [] },
        { text: "行く", reading: "iku", meaning: "to go", isNewWord: true, kanjiInWord: ["行"] }
      ]
    }
  },
  {
    character: "来",
    meaning: "come",
    characterReading: "く",
    vocabularyWord: {
      word: "来る",
      reading: "くる",
      meaning: "to come",
      distractors: ["to go", "to return", "to leave"]
    },
    example: {
      sentence: "ともだちが来る",
      words: [
        { text: "ともだち", reading: "tomodachi", meaning: "friend", kanjiInWord: [] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "来る", reading: "kuru", meaning: "to come", isNewWord: true, kanjiInWord: ["来"] }
      ]
    }
  },
  {
    character: "見",
    meaning: "see",
    characterReading: "み",
    vocabularyWord: {
      word: "見る",
      reading: "みる",
      meaning: "to see/watch",
      distractors: ["to hear", "to smell", "to touch"]
    },
    example: {
      sentence: "テレビを見る",
      words: [
        { text: "テレビ", reading: "terebi", meaning: "TV", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "見る", reading: "miru", meaning: "to watch", isNewWord: true, kanjiInWord: ["見"] }
      ]
    }
  },
  {
    character: "食",
    meaning: "eat",
    characterReading: "た",
    vocabularyWord: {
      word: "食べる",
      reading: "たべる",
      meaning: "to eat",
      distractors: ["to drink", "to sleep", "to walk"]
    },
    example: {
      sentence: "ごはんを食べる",
      words: [
        { text: "ごはん", reading: "gohan", meaning: "rice/meal", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "食べる", reading: "taberu", meaning: "to eat", isNewWord: true, kanjiInWord: ["食"] }
      ]
    }
  },
  {
    character: "飲",
    meaning: "drink",
    characterReading: "の",
    vocabularyWord: {
      word: "飲む",
      reading: "のむ",
      meaning: "to drink",
      distractors: ["to eat", "to sleep", "to rest"]
    },
    example: {
      sentence: "おちゃを飲む",
      words: [
        { text: "おちゃ", reading: "ocha", meaning: "tea", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "飲む", reading: "nomu", meaning: "to drink", isNewWord: true, kanjiInWord: ["飲"] }
      ]
    }
  },
  {
    character: "聞",
    meaning: "hear, ask",
    characterReading: "き",
    vocabularyWord: {
      word: "聞く",
      reading: "きく",
      meaning: "to hear/listen",
      distractors: ["to see", "to speak", "to read"]
    },
    example: {
      sentence: "おんがくを聞く",
      words: [
        { text: "おんがく", reading: "ongaku", meaning: "music", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "聞く", reading: "kiku", meaning: "to listen", isNewWord: true, kanjiInWord: ["聞"] }
      ]
    }
  },
  {
    character: "読",
    meaning: "read",
    characterReading: "よ",
    vocabularyWord: {
      word: "読む",
      reading: "よむ",
      meaning: "to read",
      distractors: ["to write", "to speak", "to listen"]
    },
    example: {
      sentence: "本を読む",
      words: [
        { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "読む", reading: "yomu", meaning: "to read", isNewWord: true, kanjiInWord: ["読"] }
      ]
    }
  },
  {
    character: "書",
    meaning: "write",
    characterReading: "か",
    vocabularyWord: {
      word: "書く",
      reading: "かく",
      meaning: "to write",
      distractors: ["to read", "to draw", "to erase"]
    },
    example: {
      sentence: "てがみを書く",
      words: [
        { text: "てがみ", reading: "tegami", meaning: "letter", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "書く", reading: "kaku", meaning: "to write", isNewWord: true, kanjiInWord: ["書"] }
      ]
    }
  },
  {
    character: "話",
    meaning: "speak, story",
    characterReading: "はな",
    vocabularyWord: {
      word: "話す",
      reading: "はなす",
      meaning: "to speak",
      distractors: ["to listen", "to write", "to read"]
    },
    example: {
      sentence: "にほんごを話す",
      words: [
        { text: "にほんご", reading: "nihongo", meaning: "Japanese language", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "話す", reading: "hanasu", meaning: "to speak", isNewWord: true, kanjiInWord: ["話"] }
      ]
    }
  },
  {
    character: "買",
    meaning: "buy",
    characterReading: "か",
    vocabularyWord: {
      word: "買う",
      reading: "かう",
      meaning: "to buy",
      distractors: ["to sell", "to borrow", "to give"]
    },
    example: {
      sentence: "くつを買う",
      words: [
        { text: "くつ", reading: "kutsu", meaning: "shoes", kanjiInWord: [] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "買う", reading: "kau", meaning: "to buy", isNewWord: true, kanjiInWord: ["買"] }
      ]
    }
  },
  {
    character: "分",
    meaning: "minute, understand",
    characterReading: "わ",
    vocabularyWord: {
      word: "分かる",
      reading: "わかる",
      meaning: "to understand",
      distractors: ["to forget", "to remember", "to think"]
    },
    example: {
      sentence: "にほんごが分かる",
      words: [
        { text: "にほんご", reading: "nihongo", meaning: "Japanese", kanjiInWord: [] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "分かる", reading: "wakaru", meaning: "to understand", isNewWord: true, kanjiInWord: ["分"] }
      ]
    }
  },

  // === ADJECTIVES (standalone kanji) ===
  {
    character: "好",
    meaning: "like, fond",
    characterReading: "す",
    vocabularyWord: {
      word: "好き",
      reading: "すき",
      meaning: "like/love",
      distractors: ["hate", "dislike", "fear"]
    },
    example: {
      sentence: "すしが好きです",
      words: [
        { text: "すし", reading: "sushi", meaning: "sushi", kanjiInWord: [] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "好き", reading: "suki", meaning: "like", isNewWord: true, kanjiInWord: ["好"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "新",
    meaning: "new",
    characterReading: "あたら",
    vocabularyWord: {
      word: "新しい",
      reading: "あたらしい",
      meaning: "new",
      distractors: ["old", "used", "broken"]
    },
    example: {
      sentence: "新しいかばんです",
      words: [
        { text: "新しい", reading: "atarashii", meaning: "new", isNewWord: true, kanjiInWord: ["新"] },
        { text: "かばん", reading: "kaban", meaning: "bag", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "古",
    meaning: "old",
    characterReading: "ふる",
    vocabularyWord: {
      word: "古い",
      reading: "ふるい",
      meaning: "old (things)",
      distractors: ["new", "young", "fresh"]
    },
    example: {
      sentence: "この本は古いです",
      words: [
        { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
        { text: "本", reading: "hon", meaning: "book", kanjiInWord: ["本"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "古い", reading: "furui", meaning: "old", isNewWord: true, kanjiInWord: ["古"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "長",
    meaning: "long",
    characterReading: "なが",
    vocabularyWord: {
      word: "長い",
      reading: "ながい",
      meaning: "long",
      distractors: ["short", "tall", "wide"]
    },
    example: {
      sentence: "このみちは長いです",
      words: [
        { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
        { text: "みち", reading: "michi", meaning: "road", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "長い", reading: "nagai", meaning: "long", isNewWord: true, kanjiInWord: ["長"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "高",
    meaning: "tall, expensive",
    characterReading: "たか",
    vocabularyWord: {
      word: "高い",
      reading: "たかい",
      meaning: "tall/expensive",
      distractors: ["short", "cheap", "low"]
    },
    example: {
      sentence: "あのビルは高いです",
      words: [
        { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
        { text: "ビル", reading: "biru", meaning: "building", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "高い", reading: "takai", meaning: "tall", isNewWord: true, kanjiInWord: ["高"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "安",
    meaning: "cheap, peaceful",
    characterReading: "やす",
    vocabularyWord: {
      word: "安い",
      reading: "やすい",
      meaning: "cheap",
      distractors: ["expensive", "free", "valuable"]
    },
    example: {
      sentence: "このみせは安いです",
      words: [
        { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
        { text: "みせ", reading: "mise", meaning: "store", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "安い", reading: "yasui", meaning: "cheap", isNewWord: true, kanjiInWord: ["安"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },

  // === COLORS (standalone kanji) ===
  {
    character: "白",
    meaning: "white",
    characterReading: "しろ",
    vocabularyWord: {
      word: "白い",
      reading: "しろい",
      meaning: "white",
      distractors: ["black", "red", "blue"]
    },
    example: {
      sentence: "白いねこです",
      words: [
        { text: "白い", reading: "shiroi", meaning: "white", isNewWord: true, kanjiInWord: ["白"] },
        { text: "ねこ", reading: "neko", meaning: "cat", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "黒",
    meaning: "black",
    characterReading: "くろ",
    vocabularyWord: {
      word: "黒い",
      reading: "くろい",
      meaning: "black",
      distractors: ["white", "red", "blue"]
    },
    example: {
      sentence: "黒いかばんです",
      words: [
        { text: "黒い", reading: "kuroi", meaning: "black", isNewWord: true, kanjiInWord: ["黒"] },
        { text: "かばん", reading: "kaban", meaning: "bag", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "赤",
    meaning: "red",
    characterReading: "あか",
    vocabularyWord: {
      word: "赤い",
      reading: "あかい",
      meaning: "red",
      distractors: ["blue", "green", "yellow"]
    },
    example: {
      sentence: "赤いりんごです",
      words: [
        { text: "赤い", reading: "akai", meaning: "red", isNewWord: true, kanjiInWord: ["赤"] },
        { text: "りんご", reading: "ringo", meaning: "apple", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "青",
    meaning: "blue",
    characterReading: "あお",
    vocabularyWord: {
      word: "青い",
      reading: "あおい",
      meaning: "blue",
      distractors: ["red", "green", "yellow"]
    },
    example: {
      sentence: "そらは青いです",
      words: [
        { text: "そら", reading: "sora", meaning: "sky", kanjiInWord: [] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "青い", reading: "aoi", meaning: "blue", isNewWord: true, kanjiInWord: ["青"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },

  // === TIME CONCEPTS (order matters for dependencies) ===
  {
    character: "日",
    meaning: "day, sun",
    characterReading: "ひ",
    vocabularyWord: {
      word: "日",
      reading: "ひ",
      meaning: "day/sun",
      distractors: ["moon", "star", "cloud"]
    },
    example: {
      sentence: "今日はあついです",
      words: [
        { text: "今日", reading: "kyou", meaning: "today", isNewWord: true, kanjiInWord: ["今", "日"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "あつい", reading: "atsui", meaning: "hot", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "月",
    meaning: "moon, month",
    characterReading: "つき",
    vocabularyWord: {
      word: "月",
      reading: "つき",
      meaning: "moon/month",
      distractors: ["sun", "star", "sky"]
    },
    example: {
      sentence: "月がきれいです",
      words: [
        { text: "月", reading: "tsuki", meaning: "moon", isNewWord: true, kanjiInWord: ["月"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "きれい", reading: "kirei", meaning: "beautiful", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "火",
    meaning: "fire",
    characterReading: "ひ",
    vocabularyWord: {
      word: "火",
      reading: "ひ",
      meaning: "fire",
      distractors: ["water", "earth", "wind"]
    },
    example: {
      sentence: "火はあついです",
      words: [
        { text: "火", reading: "hi", meaning: "fire", isNewWord: true, kanjiInWord: ["火"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "あつい", reading: "atsui", meaning: "hot", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "土",
    meaning: "earth, soil",
    characterReading: "つち",
    vocabularyWord: {
      word: "土",
      reading: "つち",
      meaning: "earth/soil",
      distractors: ["water", "fire", "sky"]
    },
    example: {
      sentence: "土がやわらかいです",
      words: [
        { text: "土", reading: "tsuchi", meaning: "soil", isNewWord: true, kanjiInWord: ["土"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "やわらかい", reading: "yawarakai", meaning: "soft", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "曜",
    meaning: "day of the week",
    characterReading: "よう",
    vocabularyWord: {
      word: "曜日",
      reading: "ようび",
      meaning: "day of the week",
      distractors: ["month", "year", "time"]
    },
    example: {
      sentence: "何曜日ですか",
      words: [
        { text: "何", reading: "nan", meaning: "what", kanjiInWord: ["何"] },
        { text: "曜日", reading: "youbi", meaning: "day of week", isNewWord: true, kanjiInWord: ["曜", "日"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "年",
    meaning: "year",
    characterReading: "とし",
    vocabularyWord: {
      word: "今年",
      reading: "ことし",
      meaning: "this year",
      distractors: ["last year", "next year", "every year"]
    },
    example: {
      sentence: "今年はいいです",
      words: [
        { text: "今年", reading: "kotoshi", meaning: "this year", isNewWord: true, kanjiInWord: ["今", "年"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "いい", reading: "ii", meaning: "good", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "間",
    meaning: "between, space",
    characterReading: "あいだ",
    vocabularyWord: {
      word: "間",
      reading: "あいだ",
      meaning: "between",
      distractors: ["beside", "above", "behind"]
    },
    example: {
      sentence: "いすとつくえの間",
      words: [
        { text: "いす", reading: "isu", meaning: "chair", kanjiInWord: [] },
        { text: "と", reading: "to", meaning: "and", kanjiInWord: [] },
        { text: "つくえ", reading: "tsukue", meaning: "desk", kanjiInWord: [] },
        { text: "の", reading: "no", meaning: "(possessive)", kanjiInWord: [] },
        { text: "間", reading: "aida", meaning: "between", isNewWord: true, kanjiInWord: ["間"] }
      ]
    }
  },
  {
    character: "時",
    meaning: "time, hour",
    characterReading: "じ",
    vocabularyWord: {
      word: "時間",
      reading: "じかん",
      meaning: "time",
      distractors: ["place", "day", "year"]
    },
    example: {
      sentence: "時間がありません",
      words: [
        { text: "時間", reading: "jikan", meaning: "time", isNewWord: true, kanjiInWord: ["時", "間"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "ありません", reading: "arimasen", meaning: "does not exist", kanjiInWord: [] }
      ]
    }
  },

  // === PLACES AND TRANSPORTATION (車 before 電 for dependency) ===
  {
    character: "車",
    meaning: "car, vehicle",
    characterReading: "くるま",
    vocabularyWord: {
      word: "車",
      reading: "くるま",
      meaning: "car",
      distractors: ["train", "bus", "bicycle"]
    },
    example: {
      sentence: "車がほしいです",
      words: [
        { text: "車", reading: "kuruma", meaning: "car", isNewWord: true, kanjiInWord: ["車"] },
        { text: "が", reading: "ga", meaning: "(subject marker)", kanjiInWord: [] },
        { text: "ほしい", reading: "hoshii", meaning: "want", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "電",
    meaning: "electricity",
    characterReading: "でん",
    vocabularyWord: {
      word: "電車",
      reading: "でんしゃ",
      meaning: "train",
      distractors: ["bus", "car", "bicycle"]
    },
    example: {
      sentence: "電車でいきます",
      words: [
        { text: "電車", reading: "densha", meaning: "train", isNewWord: true, kanjiInWord: ["電", "車"] },
        { text: "で", reading: "de", meaning: "by (means)", kanjiInWord: [] },
        { text: "いきます", reading: "ikimasu", meaning: "go", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "駅",
    meaning: "station",
    characterReading: "えき",
    vocabularyWord: {
      word: "駅",
      reading: "えき",
      meaning: "station",
      distractors: ["airport", "bus stop", "harbor"]
    },
    example: {
      sentence: "駅はどこですか",
      words: [
        { text: "駅", reading: "eki", meaning: "station", isNewWord: true, kanjiInWord: ["駅"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "どこ", reading: "doko", meaning: "where", kanjiInWord: [] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "道",
    meaning: "road, way",
    characterReading: "みち",
    vocabularyWord: {
      word: "道",
      reading: "みち",
      meaning: "road/way",
      distractors: ["bridge", "tunnel", "stairs"]
    },
    example: {
      sentence: "この道をまっすぐ",
      words: [
        { text: "この", reading: "kono", meaning: "this", kanjiInWord: [] },
        { text: "道", reading: "michi", meaning: "road", isNewWord: true, kanjiInWord: ["道"] },
        { text: "を", reading: "wo", meaning: "(object marker)", kanjiInWord: [] },
        { text: "まっすぐ", reading: "massugu", meaning: "straight", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "店",
    meaning: "store",
    characterReading: "みせ",
    vocabularyWord: {
      word: "店",
      reading: "みせ",
      meaning: "store/shop",
      distractors: ["house", "office", "school"]
    },
    example: {
      sentence: "あの店は大きいです",
      words: [
        { text: "あの", reading: "ano", meaning: "that", kanjiInWord: [] },
        { text: "店", reading: "mise", meaning: "store", isNewWord: true, kanjiInWord: ["店"] },
        { text: "は", reading: "wa", meaning: "(topic marker)", kanjiInWord: [] },
        { text: "大きい", reading: "ookii", meaning: "big", kanjiInWord: ["大"] },
        { text: "です", reading: "desu", meaning: "is", kanjiInWord: [] }
      ]
    }
  },

  // === COMPOUND-DEPENDENT KANJI (元 needed for 元気) ===
  {
    character: "元",
    meaning: "origin, source",
    characterReading: "もと",
    vocabularyWord: {
      word: "元",
      reading: "もと",
      meaning: "origin/source",
      distractors: ["end", "result", "copy"]
    },
    example: {
      sentence: "元にもどす",
      words: [
        { text: "元", reading: "moto", meaning: "original state", isNewWord: true, kanjiInWord: ["元"] },
        { text: "に", reading: "ni", meaning: "to", kanjiInWord: [] },
        { text: "もどす", reading: "modosu", meaning: "to return", kanjiInWord: [] }
      ]
    }
  },
  {
    character: "気",
    meaning: "spirit, energy",
    characterReading: "き",
    vocabularyWord: {
      word: "元気",
      reading: "げんき",
      meaning: "healthy/energetic",
      distractors: ["tired", "sick", "sad"]
    },
    example: {
      sentence: "お元気ですか",
      words: [
        { text: "お元気", reading: "ogenki", meaning: "healthy (polite)", isNewWord: true, kanjiInWord: ["元", "気"] },
        { text: "です", reading: "desu", meaning: "are", kanjiInWord: [] },
        { text: "か", reading: "ka", meaning: "(question marker)", kanjiInWord: [] }
      ]
    }
  }
];

export default kanjiData;
