// Kanji data ordered by frequency/usefulness for daily conversation
// Each entry includes the kanji, a primary vocabulary word, and an example sentence

const kanjiData = [
  {
    character: "日",
    meaning: "day, sun",
    vocabularyWord: {
      word: "日曜日",
      reading: "にちようび",
      meaning: "Sunday",
      distractors: ["Monday", "Saturday", "Friday"]
    },
    example: {
      sentence: "日曜日は休みです",
      words: [
        { text: "日曜日", reading: "nichiyoubi", meaning: "Sunday", isNewWord: true },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "休み", reading: "yasumi", meaning: "rest/holiday" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "一",
    meaning: "one",
    vocabularyWord: {
      word: "一つ",
      reading: "ひとつ",
      meaning: "one (thing)",
      distractors: ["two (things)", "three (things)", "many"]
    },
    example: {
      sentence: "りんごを一つください",
      words: [
        { text: "りんご", reading: "ringo", meaning: "apple" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "一つ", reading: "hitotsu", meaning: "one (thing)", isNewWord: true },
        { text: "ください", reading: "kudasai", meaning: "please give me" }
      ]
    }
  },
  {
    character: "人",
    meaning: "person",
    vocabularyWord: {
      word: "人",
      reading: "ひと",
      meaning: "person",
      distractors: ["animal", "thing", "place"]
    },
    example: {
      sentence: "あの人はだれですか",
      words: [
        { text: "あの", reading: "ano", meaning: "that" },
        { text: "人", reading: "hito", meaning: "person", isNewWord: true },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "だれ", reading: "dare", meaning: "who" },
        { text: "です", reading: "desu", meaning: "is" },
        { text: "か", reading: "ka", meaning: "(question marker)" }
      ]
    }
  },
  {
    character: "大",
    meaning: "big, large",
    vocabularyWord: {
      word: "大きい",
      reading: "おおきい",
      meaning: "big",
      distractors: ["small", "tall", "wide"]
    },
    example: {
      sentence: "この犬は大きいです",
      words: [
        { text: "この", reading: "kono", meaning: "this" },
        { text: "犬", reading: "inu", meaning: "dog" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "大きい", reading: "ookii", meaning: "big", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "年",
    meaning: "year",
    vocabularyWord: {
      word: "今年",
      reading: "ことし",
      meaning: "this year",
      distractors: ["last year", "next year", "every year"]
    },
    example: {
      sentence: "今年は楽しいです",
      words: [
        { text: "今年", reading: "kotoshi", meaning: "this year", isNewWord: true },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "楽しい", reading: "tanoshii", meaning: "fun" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "中",
    meaning: "middle, inside",
    vocabularyWord: {
      word: "中",
      reading: "なか",
      meaning: "inside",
      distractors: ["outside", "above", "below"]
    },
    example: {
      sentence: "かばんの中にあります",
      words: [
        { text: "かばん", reading: "kaban", meaning: "bag" },
        { text: "の", reading: "no", meaning: "(possessive)" },
        { text: "中", reading: "naka", meaning: "inside", isNewWord: true },
        { text: "に", reading: "ni", meaning: "in/at" },
        { text: "あります", reading: "arimasu", meaning: "exists" }
      ]
    }
  },
  {
    character: "出",
    meaning: "exit, go out",
    vocabularyWord: {
      word: "出る",
      reading: "でる",
      meaning: "to exit/go out",
      distractors: ["to enter", "to stay", "to return"]
    },
    example: {
      sentence: "へやを出る",
      words: [
        { text: "へや", reading: "heya", meaning: "room" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "出る", reading: "deru", meaning: "to exit", isNewWord: true }
      ]
    }
  },
  {
    character: "上",
    meaning: "up, above",
    vocabularyWord: {
      word: "上",
      reading: "うえ",
      meaning: "above/on top",
      distractors: ["below", "beside", "behind"]
    },
    example: {
      sentence: "つくえの上にあります",
      words: [
        { text: "つくえ", reading: "tsukue", meaning: "desk" },
        { text: "の", reading: "no", meaning: "(possessive)" },
        { text: "上", reading: "ue", meaning: "on top", isNewWord: true },
        { text: "に", reading: "ni", meaning: "at" },
        { text: "あります", reading: "arimasu", meaning: "exists" }
      ]
    }
  },
  {
    character: "下",
    meaning: "down, below",
    vocabularyWord: {
      word: "下",
      reading: "した",
      meaning: "below/under",
      distractors: ["above", "beside", "behind"]
    },
    example: {
      sentence: "いすの下にねこがいます",
      words: [
        { text: "いす", reading: "isu", meaning: "chair" },
        { text: "の", reading: "no", meaning: "(possessive)" },
        { text: "下", reading: "shita", meaning: "under", isNewWord: true },
        { text: "に", reading: "ni", meaning: "at" },
        { text: "ねこ", reading: "neko", meaning: "cat" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "います", reading: "imasu", meaning: "exists (animate)" }
      ]
    }
  },
  {
    character: "小",
    meaning: "small",
    vocabularyWord: {
      word: "小さい",
      reading: "ちいさい",
      meaning: "small",
      distractors: ["big", "tall", "wide"]
    },
    example: {
      sentence: "小さいねこがいます",
      words: [
        { text: "小さい", reading: "chiisai", meaning: "small", isNewWord: true },
        { text: "ねこ", reading: "neko", meaning: "cat" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "います", reading: "imasu", meaning: "exists (animate)" }
      ]
    }
  },
  {
    character: "本",
    meaning: "book, origin",
    vocabularyWord: {
      word: "本",
      reading: "ほん",
      meaning: "book",
      distractors: ["magazine", "newspaper", "letter"]
    },
    example: {
      sentence: "本を読みます",
      words: [
        { text: "本", reading: "hon", meaning: "book", isNewWord: true },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "読みます", reading: "yomimasu", meaning: "read" }
      ]
    }
  },
  {
    character: "月",
    meaning: "moon, month",
    vocabularyWord: {
      word: "月曜日",
      reading: "げつようび",
      meaning: "Monday",
      distractors: ["Tuesday", "Wednesday", "Sunday"]
    },
    example: {
      sentence: "月曜日にしごとがあります",
      words: [
        { text: "月曜日", reading: "getsuyoubi", meaning: "Monday", isNewWord: true },
        { text: "に", reading: "ni", meaning: "on" },
        { text: "しごと", reading: "shigoto", meaning: "work" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "あります", reading: "arimasu", meaning: "exists" }
      ]
    }
  },
  {
    character: "水",
    meaning: "water",
    vocabularyWord: {
      word: "水",
      reading: "みず",
      meaning: "water",
      distractors: ["tea", "juice", "milk"]
    },
    example: {
      sentence: "水をのみます",
      words: [
        { text: "水", reading: "mizu", meaning: "water", isNewWord: true },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "のみます", reading: "nomimasu", meaning: "drink" }
      ]
    }
  },
  {
    character: "火",
    meaning: "fire",
    vocabularyWord: {
      word: "火曜日",
      reading: "かようび",
      meaning: "Tuesday",
      distractors: ["Monday", "Wednesday", "Thursday"]
    },
    example: {
      sentence: "火曜日にあいましょう",
      words: [
        { text: "火曜日", reading: "kayoubi", meaning: "Tuesday", isNewWord: true },
        { text: "に", reading: "ni", meaning: "on" },
        { text: "あいましょう", reading: "aimashou", meaning: "let's meet" }
      ]
    }
  },
  {
    character: "木",
    meaning: "tree, wood",
    vocabularyWord: {
      word: "木",
      reading: "き",
      meaning: "tree",
      distractors: ["flower", "grass", "leaf"]
    },
    example: {
      sentence: "大きい木があります",
      words: [
        { text: "大きい", reading: "ookii", meaning: "big" },
        { text: "木", reading: "ki", meaning: "tree", isNewWord: true },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "あります", reading: "arimasu", meaning: "exists" }
      ]
    }
  },
  {
    character: "金",
    meaning: "gold, money",
    vocabularyWord: {
      word: "お金",
      reading: "おかね",
      meaning: "money",
      distractors: ["gold", "silver", "coin"]
    },
    example: {
      sentence: "お金がありません",
      words: [
        { text: "お金", reading: "okane", meaning: "money", isNewWord: true },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "ありません", reading: "arimasen", meaning: "does not exist" }
      ]
    }
  },
  {
    character: "土",
    meaning: "earth, soil",
    vocabularyWord: {
      word: "土曜日",
      reading: "どようび",
      meaning: "Saturday",
      distractors: ["Sunday", "Friday", "Monday"]
    },
    example: {
      sentence: "土曜日にあそびます",
      words: [
        { text: "土曜日", reading: "doyoubi", meaning: "Saturday", isNewWord: true },
        { text: "に", reading: "ni", meaning: "on" },
        { text: "あそびます", reading: "asobimasu", meaning: "play" }
      ]
    }
  },
  {
    character: "行",
    meaning: "go",
    vocabularyWord: {
      word: "行く",
      reading: "いく",
      meaning: "to go",
      distractors: ["to come", "to return", "to stay"]
    },
    example: {
      sentence: "がっこうに行く",
      words: [
        { text: "がっこう", reading: "gakkou", meaning: "school" },
        { text: "に", reading: "ni", meaning: "to" },
        { text: "行く", reading: "iku", meaning: "to go", isNewWord: true }
      ]
    }
  },
  {
    character: "来",
    meaning: "come",
    vocabularyWord: {
      word: "来る",
      reading: "くる",
      meaning: "to come",
      distractors: ["to go", "to return", "to leave"]
    },
    example: {
      sentence: "ともだちが来る",
      words: [
        { text: "ともだち", reading: "tomodachi", meaning: "friend" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "来る", reading: "kuru", meaning: "to come", isNewWord: true }
      ]
    }
  },
  {
    character: "見",
    meaning: "see",
    vocabularyWord: {
      word: "見る",
      reading: "みる",
      meaning: "to see/watch",
      distractors: ["to hear", "to smell", "to touch"]
    },
    example: {
      sentence: "テレビを見る",
      words: [
        { text: "テレビ", reading: "terebi", meaning: "TV" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "見る", reading: "miru", meaning: "to watch", isNewWord: true }
      ]
    }
  },
  {
    character: "食",
    meaning: "eat",
    vocabularyWord: {
      word: "食べる",
      reading: "たべる",
      meaning: "to eat",
      distractors: ["to drink", "to sleep", "to walk"]
    },
    example: {
      sentence: "ごはんを食べる",
      words: [
        { text: "ごはん", reading: "gohan", meaning: "rice/meal" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "食べる", reading: "taberu", meaning: "to eat", isNewWord: true }
      ]
    }
  },
  {
    character: "飲",
    meaning: "drink",
    vocabularyWord: {
      word: "飲む",
      reading: "のむ",
      meaning: "to drink",
      distractors: ["to eat", "to sleep", "to rest"]
    },
    example: {
      sentence: "おちゃを飲む",
      words: [
        { text: "おちゃ", reading: "ocha", meaning: "tea" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "飲む", reading: "nomu", meaning: "to drink", isNewWord: true }
      ]
    }
  },
  {
    character: "聞",
    meaning: "hear, ask",
    vocabularyWord: {
      word: "聞く",
      reading: "きく",
      meaning: "to hear/listen",
      distractors: ["to see", "to speak", "to read"]
    },
    example: {
      sentence: "おんがくを聞く",
      words: [
        { text: "おんがく", reading: "ongaku", meaning: "music" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "聞く", reading: "kiku", meaning: "to listen", isNewWord: true }
      ]
    }
  },
  {
    character: "読",
    meaning: "read",
    vocabularyWord: {
      word: "読む",
      reading: "よむ",
      meaning: "to read",
      distractors: ["to write", "to speak", "to listen"]
    },
    example: {
      sentence: "本を読む",
      words: [
        { text: "本", reading: "hon", meaning: "book" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "読む", reading: "yomu", meaning: "to read", isNewWord: true }
      ]
    }
  },
  {
    character: "書",
    meaning: "write",
    vocabularyWord: {
      word: "書く",
      reading: "かく",
      meaning: "to write",
      distractors: ["to read", "to draw", "to erase"]
    },
    example: {
      sentence: "てがみを書く",
      words: [
        { text: "てがみ", reading: "tegami", meaning: "letter" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "書く", reading: "kaku", meaning: "to write", isNewWord: true }
      ]
    }
  },
  {
    character: "話",
    meaning: "speak, story",
    vocabularyWord: {
      word: "話す",
      reading: "はなす",
      meaning: "to speak",
      distractors: ["to listen", "to write", "to read"]
    },
    example: {
      sentence: "にほんごを話す",
      words: [
        { text: "にほんご", reading: "nihongo", meaning: "Japanese language" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "話す", reading: "hanasu", meaning: "to speak", isNewWord: true }
      ]
    }
  },
  {
    character: "買",
    meaning: "buy",
    vocabularyWord: {
      word: "買う",
      reading: "かう",
      meaning: "to buy",
      distractors: ["to sell", "to borrow", "to give"]
    },
    example: {
      sentence: "くつを買う",
      words: [
        { text: "くつ", reading: "kutsu", meaning: "shoes" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "買う", reading: "kau", meaning: "to buy", isNewWord: true }
      ]
    }
  },
  {
    character: "入",
    meaning: "enter",
    vocabularyWord: {
      word: "入る",
      reading: "はいる",
      meaning: "to enter",
      distractors: ["to exit", "to stay", "to return"]
    },
    example: {
      sentence: "へやに入る",
      words: [
        { text: "へや", reading: "heya", meaning: "room" },
        { text: "に", reading: "ni", meaning: "into" },
        { text: "入る", reading: "hairu", meaning: "to enter", isNewWord: true }
      ]
    }
  },
  {
    character: "分",
    meaning: "minute, understand",
    vocabularyWord: {
      word: "分かる",
      reading: "わかる",
      meaning: "to understand",
      distractors: ["to forget", "to remember", "to think"]
    },
    example: {
      sentence: "にほんごが分かる",
      words: [
        { text: "にほんご", reading: "nihongo", meaning: "Japanese" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "分かる", reading: "wakaru", meaning: "to understand", isNewWord: true }
      ]
    }
  },
  {
    character: "時",
    meaning: "time, hour",
    vocabularyWord: {
      word: "時間",
      reading: "じかん",
      meaning: "time",
      distractors: ["place", "day", "year"]
    },
    example: {
      sentence: "時間がありません",
      words: [
        { text: "時間", reading: "jikan", meaning: "time", isNewWord: true },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "ありません", reading: "arimasen", meaning: "does not exist" }
      ]
    }
  },
  {
    character: "間",
    meaning: "between, space",
    vocabularyWord: {
      word: "間",
      reading: "あいだ",
      meaning: "between",
      distractors: ["beside", "above", "behind"]
    },
    example: {
      sentence: "いすとつくえの間",
      words: [
        { text: "いす", reading: "isu", meaning: "chair" },
        { text: "と", reading: "to", meaning: "and" },
        { text: "つくえ", reading: "tsukue", meaning: "desk" },
        { text: "の", reading: "no", meaning: "(possessive)" },
        { text: "間", reading: "aida", meaning: "between", isNewWord: true }
      ]
    }
  },
  {
    character: "今",
    meaning: "now",
    vocabularyWord: {
      word: "今",
      reading: "いま",
      meaning: "now",
      distractors: ["later", "before", "always"]
    },
    example: {
      sentence: "今、なにをしていますか",
      words: [
        { text: "今", reading: "ima", meaning: "now", isNewWord: true },
        { text: "なに", reading: "nani", meaning: "what" },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "しています", reading: "shiteimasu", meaning: "are doing" },
        { text: "か", reading: "ka", meaning: "(question marker)" }
      ]
    }
  },
  {
    character: "何",
    meaning: "what",
    vocabularyWord: {
      word: "何",
      reading: "なに",
      meaning: "what",
      distractors: ["who", "where", "when"]
    },
    example: {
      sentence: "これは何ですか",
      words: [
        { text: "これ", reading: "kore", meaning: "this" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "何", reading: "nan", meaning: "what", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" },
        { text: "か", reading: "ka", meaning: "(question marker)" }
      ]
    }
  },
  {
    character: "気",
    meaning: "spirit, energy",
    vocabularyWord: {
      word: "元気",
      reading: "げんき",
      meaning: "healthy/energetic",
      distractors: ["tired", "sick", "sad"]
    },
    example: {
      sentence: "お元気ですか",
      words: [
        { text: "お元気", reading: "ogenki", meaning: "healthy (polite)", isNewWord: true },
        { text: "です", reading: "desu", meaning: "are" },
        { text: "か", reading: "ka", meaning: "(question marker)" }
      ]
    }
  },
  {
    character: "好",
    meaning: "like, fond",
    vocabularyWord: {
      word: "好き",
      reading: "すき",
      meaning: "like/love",
      distractors: ["hate", "dislike", "fear"]
    },
    example: {
      sentence: "すしが好きです",
      words: [
        { text: "すし", reading: "sushi", meaning: "sushi" },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "好き", reading: "suki", meaning: "like", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "新",
    meaning: "new",
    vocabularyWord: {
      word: "新しい",
      reading: "あたらしい",
      meaning: "new",
      distractors: ["old", "used", "broken"]
    },
    example: {
      sentence: "新しいくるまです",
      words: [
        { text: "新しい", reading: "atarashii", meaning: "new", isNewWord: true },
        { text: "くるま", reading: "kuruma", meaning: "car" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "古",
    meaning: "old",
    vocabularyWord: {
      word: "古い",
      reading: "ふるい",
      meaning: "old (things)",
      distractors: ["new", "young", "fresh"]
    },
    example: {
      sentence: "この本は古いです",
      words: [
        { text: "この", reading: "kono", meaning: "this" },
        { text: "本", reading: "hon", meaning: "book" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "古い", reading: "furui", meaning: "old", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "長",
    meaning: "long",
    vocabularyWord: {
      word: "長い",
      reading: "ながい",
      meaning: "long",
      distractors: ["short", "tall", "wide"]
    },
    example: {
      sentence: "このみちは長いです",
      words: [
        { text: "この", reading: "kono", meaning: "this" },
        { text: "みち", reading: "michi", meaning: "road" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "長い", reading: "nagai", meaning: "long", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "高",
    meaning: "tall, expensive",
    vocabularyWord: {
      word: "高い",
      reading: "たかい",
      meaning: "tall/expensive",
      distractors: ["short", "cheap", "low"]
    },
    example: {
      sentence: "あのビルは高いです",
      words: [
        { text: "あの", reading: "ano", meaning: "that" },
        { text: "ビル", reading: "biru", meaning: "building" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "高い", reading: "takai", meaning: "tall", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "安",
    meaning: "cheap, peaceful",
    vocabularyWord: {
      word: "安い",
      reading: "やすい",
      meaning: "cheap",
      distractors: ["expensive", "free", "valuable"]
    },
    example: {
      sentence: "このみせは安いです",
      words: [
        { text: "この", reading: "kono", meaning: "this" },
        { text: "みせ", reading: "mise", meaning: "store" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "安い", reading: "yasui", meaning: "cheap", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "白",
    meaning: "white",
    vocabularyWord: {
      word: "白い",
      reading: "しろい",
      meaning: "white",
      distractors: ["black", "red", "blue"]
    },
    example: {
      sentence: "白いねこです",
      words: [
        { text: "白い", reading: "shiroi", meaning: "white", isNewWord: true },
        { text: "ねこ", reading: "neko", meaning: "cat" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "黒",
    meaning: "black",
    vocabularyWord: {
      word: "黒い",
      reading: "くろい",
      meaning: "black",
      distractors: ["white", "red", "blue"]
    },
    example: {
      sentence: "黒いくるまです",
      words: [
        { text: "黒い", reading: "kuroi", meaning: "black", isNewWord: true },
        { text: "くるま", reading: "kuruma", meaning: "car" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "赤",
    meaning: "red",
    vocabularyWord: {
      word: "赤い",
      reading: "あかい",
      meaning: "red",
      distractors: ["blue", "green", "yellow"]
    },
    example: {
      sentence: "赤いりんごです",
      words: [
        { text: "赤い", reading: "akai", meaning: "red", isNewWord: true },
        { text: "りんご", reading: "ringo", meaning: "apple" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "青",
    meaning: "blue",
    vocabularyWord: {
      word: "青い",
      reading: "あおい",
      meaning: "blue",
      distractors: ["red", "green", "yellow"]
    },
    example: {
      sentence: "そらは青いです",
      words: [
        { text: "そら", reading: "sora", meaning: "sky" },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "青い", reading: "aoi", meaning: "blue", isNewWord: true },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "電",
    meaning: "electricity",
    vocabularyWord: {
      word: "電車",
      reading: "でんしゃ",
      meaning: "train",
      distractors: ["bus", "car", "bicycle"]
    },
    example: {
      sentence: "電車でいきます",
      words: [
        { text: "電車", reading: "densha", meaning: "train", isNewWord: true },
        { text: "で", reading: "de", meaning: "by (means)" },
        { text: "いきます", reading: "ikimasu", meaning: "go" }
      ]
    }
  },
  {
    character: "車",
    meaning: "car, vehicle",
    vocabularyWord: {
      word: "車",
      reading: "くるま",
      meaning: "car",
      distractors: ["train", "bus", "bicycle"]
    },
    example: {
      sentence: "車がほしいです",
      words: [
        { text: "車", reading: "kuruma", meaning: "car", isNewWord: true },
        { text: "が", reading: "ga", meaning: "(subject marker)" },
        { text: "ほしい", reading: "hoshii", meaning: "want" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  },
  {
    character: "駅",
    meaning: "station",
    vocabularyWord: {
      word: "駅",
      reading: "えき",
      meaning: "station",
      distractors: ["airport", "bus stop", "harbor"]
    },
    example: {
      sentence: "駅はどこですか",
      words: [
        { text: "駅", reading: "eki", meaning: "station", isNewWord: true },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "どこ", reading: "doko", meaning: "where" },
        { text: "です", reading: "desu", meaning: "is" },
        { text: "か", reading: "ka", meaning: "(question marker)" }
      ]
    }
  },
  {
    character: "道",
    meaning: "road, way",
    vocabularyWord: {
      word: "道",
      reading: "みち",
      meaning: "road/way",
      distractors: ["bridge", "tunnel", "stairs"]
    },
    example: {
      sentence: "この道をまっすぐ",
      words: [
        { text: "この", reading: "kono", meaning: "this" },
        { text: "道", reading: "michi", meaning: "road", isNewWord: true },
        { text: "を", reading: "wo", meaning: "(object marker)" },
        { text: "まっすぐ", reading: "massugu", meaning: "straight" }
      ]
    }
  },
  {
    character: "店",
    meaning: "store",
    vocabularyWord: {
      word: "店",
      reading: "みせ",
      meaning: "store/shop",
      distractors: ["house", "office", "school"]
    },
    example: {
      sentence: "あの店は大きいです",
      words: [
        { text: "あの", reading: "ano", meaning: "that" },
        { text: "店", reading: "mise", meaning: "store", isNewWord: true },
        { text: "は", reading: "wa", meaning: "(topic marker)" },
        { text: "大きい", reading: "ookii", meaning: "big" },
        { text: "です", reading: "desu", meaning: "is" }
      ]
    }
  }
];

export default kanjiData;
