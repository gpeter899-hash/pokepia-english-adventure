const lessons = [
  {
    id: "abc-phonics",
    title: "彩虹港：ABC與發音",
    kind: "Phonics",
    reward: 45,
    badge: "ABC Star",
    enemy: "Letter Bubble",
    goal: "認識字母開頭音，建立聽音選字的直覺",
    questions: [
      {
        q: "Which word starts with the /b/ sound?",
        read: "Which word starts with the b sound?",
        options: [
          { text: "bag", zh: "bag 是包包，開頭是 /b/，嘴巴先閉起來再發聲。", say: "bag", correct: true },
          { text: "cat", zh: "cat 是貓咪，開頭是 /k/，不是 /b/。", say: "cat" },
          { text: "sun", zh: "sun 是太陽，開頭是 /s/，像蛇吐氣的聲音。", say: "sun" },
          { text: "egg", zh: "egg 是蛋，開頭是短短的 /e/ 音。", say: "egg" }
        ],
        hint: "小嘴巴先閉起來，啵一聲，就是 /b/。"
      },
      {
        q: "Which word starts with the /m/ sound?",
        read: "Which word starts with the m sound?",
        options: [
          { text: "moon", zh: "moon 是月亮，/m/ 像哼歌一樣，嘴巴會閉起來。", say: "moon", correct: true },
          { text: "fish", zh: "fish 是魚，開頭是 /f/，要輕輕吹氣。", say: "fish" },
          { text: "dog", zh: "dog 是狗狗，開頭是 /d/。", say: "dog" },
          { text: "red", zh: "red 是紅色，開頭是 /r/。", say: "red" }
        ],
        hint: "摸摸嘴唇，發 /m/ 時嘴巴會閉起來。"
      },
      {
        q: "A is for ____.",
        read: "A is for",
        options: [
          { text: "apple", zh: "apple 是蘋果，A is for apple 是最經典的字母任務。", say: "apple", correct: true },
          { text: "book", zh: "book 是書，開頭是 B。", say: "book" },
          { text: "chair", zh: "chair 是椅子，開頭是 C。", say: "chair" },
          { text: "desk", zh: "desk 是書桌，開頭是 D。", say: "desk" }
        ],
        hint: "想一想：紅紅圓圓、可以吃的 apple。"
      },
      {
        q: "Which pair has the same first sound?",
        read: "Which pair has the same first sound?",
        options: [
          { text: "cat / cake", zh: "cat 和 cake 都是 C 開頭，這裡都發 /k/。", say: "cat, cake", correct: true },
          { text: "dog / sun", zh: "dog 是 /d/，sun 是 /s/，聲音不同。", say: "dog, sun" },
          { text: "fish / moon", zh: "fish 是 /f/，moon 是 /m/，聲音不同。", say: "fish, moon" },
          { text: "apple / bag", zh: "apple 是 /a/，bag 是 /b/，聲音不同。", say: "apple, bag" }
        ],
        hint: "先聽第一個聲音，不用急著看整個字。"
      }
    ]
  },
  {
    id: "colors-numbers",
    title: "糖果森林：顏色與數字",
    kind: "Vocabulary",
    reward: 55,
    badge: "Color Pop",
    enemy: "Number Jelly",
    goal: "熟悉 1-20、常見顏色與簡單描述",
    questions: [
      {
        q: "Which one means 「藍色」?",
        read: "Which one means blue?",
        options: [
          { text: "blue", zh: "blue 是藍色，像天空和海水的顏色。", say: "blue", correct: true },
          { text: "green", zh: "green 是綠色，像樹葉。", say: "green" },
          { text: "yellow", zh: "yellow 是黃色，像香蕉。", say: "yellow" },
          { text: "black", zh: "black 是黑色。", say: "black" }
        ],
        hint: "天空晴朗時常常是 blue。"
      },
      {
        q: "How many apples? 7 apples = ____ apples.",
        read: "Seven apples.",
        options: [
          { text: "seven", zh: "seven 是 7，像一把小小的斜尺。", say: "seven", correct: true },
          { text: "three", zh: "three 是 3。", say: "three" },
          { text: "ten", zh: "ten 是 10。", say: "ten" },
          { text: "twelve", zh: "twelve 是 12。", say: "twelve" }
        ],
        hint: "7 的英文是 seven。"
      },
      {
        q: "Choose the correct sentence.",
        read: "Choose the correct sentence.",
        options: [
          { text: "I have two pencils.", zh: "two 是 2，pencils 加 s，表示兩枝以上。", say: "I have two pencils.", correct: true },
          { text: "I have two pencil.", zh: "two 後面通常要用複數 pencils。", say: "I have two pencil." },
          { text: "I has two pencils.", zh: "I 要搭配 have，不是 has。", say: "I has two pencils." },
          { text: "I have pencil two.", zh: "英文數量要放在名詞前面：two pencils。", say: "I have pencil two." }
        ],
        hint: "I have + 數字 + 複數名詞。"
      },
      {
        q: "A banana is usually ____.",
        read: "A banana is usually",
        options: [
          { text: "yellow", zh: "yellow 是黃色，香蕉成熟時通常是 yellow。", say: "yellow", correct: true },
          { text: "purple", zh: "purple 是紫色，不是一般香蕉的顏色。", say: "purple" },
          { text: "gray", zh: "gray 是灰色。", say: "gray" },
          { text: "pink", zh: "pink 是粉紅色。", say: "pink" }
        ],
        hint: "香蕉像小太陽的顏色。"
      }
    ]
  },
  {
    id: "classroom",
    title: "鉛筆小鎮：教室英文",
    kind: "School",
    reward: 65,
    badge: "Class Hero",
    enemy: "Desk Sprite",
    goal: "能聽懂教室物品和老師常用指令",
    questions: [
      {
        q: "Teacher says: Open your ____.",
        read: "Open your book.",
        options: [
          { text: "book", zh: "Open your book. 是打開你的書。上課超常聽到。", say: "book", correct: true },
          { text: "door", zh: "door 是門，open the door 才是開門。", say: "door" },
          { text: "milk", zh: "milk 是牛奶，不是教室用品。", say: "milk" },
          { text: "nose", zh: "nose 是鼻子，不會說 open your nose。", say: "nose" }
        ],
        hint: "老師要大家翻課本時會說這句。"
      },
      {
        q: "Which word means 「橡皮擦」?",
        read: "Which word means eraser?",
        options: [
          { text: "eraser", zh: "eraser 是橡皮擦，可以擦掉 pencil 寫的字。", say: "eraser", correct: true },
          { text: "ruler", zh: "ruler 是尺。", say: "ruler" },
          { text: "window", zh: "window 是窗戶。", say: "window" },
          { text: "crayon", zh: "crayon 是蠟筆。", say: "crayon" }
        ],
        hint: "寫錯字時，eraser 會來救援。"
      },
      {
        q: "Please ____ down.",
        read: "Please sit down.",
        options: [
          { text: "sit", zh: "sit down 是坐下。小椅子在等你。", say: "sit down", correct: true },
          { text: "run", zh: "run 是跑，在教室裡不要亂跑。", say: "run" },
          { text: "eat", zh: "eat 是吃。", say: "eat" },
          { text: "swim", zh: "swim 是游泳。", say: "swim" }
        ],
        hint: "老師要大家坐好，會說 sit down。"
      },
      {
        q: "Which sentence is polite in class?",
        read: "Which sentence is polite in class?",
        options: [
          { text: "May I go to the restroom?", zh: "May I...? 是有禮貌的請求，很適合在教室用。", say: "May I go to the restroom?", correct: true },
          { text: "Give me now!", zh: "這句太兇了，不適合對老師同學說。", say: "Give me now!" },
          { text: "I no like.", zh: "這句文法不完整，可以說 I don't like it。", say: "I no like." },
          { text: "Go away!", zh: "Go away 是叫人走開，不禮貌。", say: "Go away!" }
        ],
        hint: "May I...? 是小小紳士淑女的魔法開頭。"
      }
    ]
  },
  {
    id: "animals",
    title: "動物草原：可愛生物",
    kind: "Vocabulary",
    reward: 70,
    badge: "Animal Pal",
    enemy: "Wild Paw",
    goal: "學會常見動物與簡單外觀描述",
    questions: [
      {
        q: "Which animal says meow?",
        read: "Which animal says meow?",
        options: [
          { text: "cat", zh: "cat 是貓咪，會 meow meow。", say: "cat", correct: true },
          { text: "dog", zh: "dog 是狗狗，常說 woof。", say: "dog" },
          { text: "bird", zh: "bird 是鳥。", say: "bird" },
          { text: "fish", zh: "fish 是魚，不會 meow。", say: "fish" }
        ],
        hint: "會喵喵叫的是 cat。"
      },
      {
        q: "A rabbit has long ____.",
        read: "A rabbit has long ears.",
        options: [
          { text: "ears", zh: "ears 是耳朵，rabbit 的長耳朵很可愛。", say: "ears", correct: true },
          { text: "wings", zh: "wings 是翅膀，兔子沒有翅膀。", say: "wings" },
          { text: "fins", zh: "fins 是魚鰭。", say: "fins" },
          { text: "hands", zh: "hands 是手，不是兔子最明顯的特徵。", say: "hands" }
        ],
        hint: "兔兔頭上長長的那兩個。"
      },
      {
        q: "Choose the correct sentence.",
        read: "Choose the correct sentence.",
        options: [
          { text: "It is a small bird.", zh: "It is a small bird. 是：牠是一隻小鳥。", say: "It is a small bird.", correct: true },
          { text: "It are a small bird.", zh: "It 要搭配 is。", say: "It are a small bird." },
          { text: "It is small bird.", zh: "單數可數名詞 bird 前面要有 a。", say: "It is small bird." },
          { text: "It a small bird is.", zh: "英文句子順序要 It is a small bird。", say: "It a small bird is." }
        ],
        hint: "It is a + 形容詞 + 動物。"
      },
      {
        q: "Which animal can swim?",
        read: "Which animal can swim?",
        options: [
          { text: "fish", zh: "fish 是魚，最會在水裡游泳。", say: "fish", correct: true },
          { text: "hamster", zh: "hamster 是倉鼠，牠主要在陸地活動。", say: "hamster" },
          { text: "chicken", zh: "chicken 是雞。", say: "chicken" },
          { text: "horse", zh: "horse 是馬。", say: "horse" }
        ],
        hint: "水裡的小游泳高手。"
      }
    ]
  },
  {
    id: "family",
    title: "溫暖樹屋：家庭與朋友",
    kind: "Speaking",
    reward: 75,
    badge: "Family Hug",
    enemy: "Name Cloud",
    goal: "能介紹家人朋友、名字與年紀",
    questions: [
      {
        q: "This is my mom. ____ name is Amy.",
        read: "This is my mom. Her name is Amy.",
        options: [
          { text: "Her", zh: "Her 是她的。媽媽是女生，所以用 Her name。", say: "Her", correct: true },
          { text: "His", zh: "His 是他的，通常用在男生。", say: "His" },
          { text: "My", zh: "My 是我的，這裡要說媽媽的名字。", say: "My" },
          { text: "Your", zh: "Your 是你的，不符合句意。", say: "Your" }
        ],
        hint: "mom 是女生，想想 her。"
      },
      {
        q: "A: How old are you? B: ____",
        read: "How old are you?",
        options: [
          { text: "I am ten.", zh: "How old 問年紀，I am ten. 是我十歲。", say: "I am ten.", correct: true },
          { text: "I am fine.", zh: "I am fine. 是問候時回答我很好。", say: "I am fine." },
          { text: "It is red.", zh: "It is red. 是它是紅色。", say: "It is red." },
          { text: "At school.", zh: "At school. 是在學校，回答地點。", say: "At school." }
        ],
        hint: "問幾歲，要回答數字。"
      },
      {
        q: "Which one means 「朋友」?",
        read: "Which one means friend?",
        options: [
          { text: "friend", zh: "friend 是朋友，可以一起玩、一起學英文。", say: "friend", correct: true },
          { text: "father", zh: "father 是爸爸。", say: "father" },
          { text: "sister", zh: "sister 是姊妹。", say: "sister" },
          { text: "teacher", zh: "teacher 是老師。", say: "teacher" }
        ],
        hint: "好朋友就是 friend。"
      },
      {
        q: "Choose the best self-introduction.",
        read: "Choose the best self introduction.",
        options: [
          { text: "Hi, I am Ben. I am nine.", zh: "這句有名字也有年紀，介紹自己很清楚。", say: "Hi, I am Ben. I am nine.", correct: true },
          { text: "Book blue chair.", zh: "這只是三個單字，不是自我介紹。", say: "Book blue chair." },
          { text: "She are Ben.", zh: "主詞和 be 動詞不搭配。", say: "She are Ben." },
          { text: "I nine am Ben.", zh: "英文順序要 I am Ben. I am nine.", say: "I nine am Ben." }
        ],
        hint: "介紹自己可以說 Hi, I am 名字。"
      }
    ]
  },
  {
    id: "daily-actions",
    title: "早安山谷：日常動作",
    kind: "Grammar",
    reward: 85,
    badge: "Daily Dash",
    enemy: "Action Puff",
    goal: "學會 like, can, have 與日常活動句",
    questions: [
      {
        q: "I can ____ a bike.",
        read: "I can ride a bike.",
        options: [
          { text: "ride", zh: "ride a bike 是騎腳踏車。can 後面用原形動詞 ride。", say: "ride", correct: true },
          { text: "rides", zh: "can 後面不要加 s。", say: "rides" },
          { text: "riding", zh: "can 後面不用 ing。", say: "riding" },
          { text: "rode", zh: "can 後面不用過去式。", say: "rode" }
        ],
        hint: "can 後面接原形動詞。"
      },
      {
        q: "She ____ apples.",
        read: "She likes apples.",
        options: [
          { text: "likes", zh: "She 是第三人稱單數，like 要變 likes。", say: "likes", correct: true },
          { text: "like", zh: "She 後面通常要 likes。", say: "like" },
          { text: "liking", zh: "這裡不是現在進行式。", say: "liking" },
          { text: "to like", zh: "這句不需要 to。", say: "to like" }
        ],
        hint: "She, he, it 後面的動詞常常要加 s。"
      },
      {
        q: "A: What do you do after school? B: ____",
        read: "What do you do after school?",
        options: [
          { text: "I play soccer.", zh: "I play soccer. 是我踢足球，能回答放學後做什麼。", say: "I play soccer.", correct: true },
          { text: "It is sunny.", zh: "這是在說天氣。", say: "It is sunny." },
          { text: "I am eight.", zh: "這是在說年紀。", say: "I am eight." },
          { text: "This is a ruler.", zh: "這是在介紹物品。", say: "This is a ruler." }
        ],
        hint: "問 do，要回答一個動作。"
      },
      {
        q: "Which sentence means 「我有一顆球」?",
        read: "I have a ball.",
        options: [
          { text: "I have a ball.", zh: "have 是有，a ball 是一顆球。", say: "I have a ball.", correct: true },
          { text: "I am a ball.", zh: "這句變成我是一顆球，太神奇了。", say: "I am a ball." },
          { text: "I like a ball.", zh: "like 是喜歡，不是有。", say: "I like a ball." },
          { text: "I can a ball.", zh: "can 後面要接動作，這句不完整。", say: "I can a ball." }
        ],
        hint: "想說我有，用 I have。"
      }
    ]
  },
  {
    id: "weather-feelings",
    title: "雲朵湖：天氣與心情",
    kind: "Conversation",
    reward: 95,
    badge: "Mood Cloud",
    enemy: "Rain Blob",
    goal: "能回答天氣、感覺與簡單原因",
    questions: [
      {
        q: "A: How's the weather? B: ____",
        read: "How is the weather?",
        options: [
          { text: "It's rainy.", zh: "It's rainy. 是下雨了，用來回答天氣。", say: "It's rainy.", correct: true },
          { text: "I'm hungry.", zh: "I'm hungry. 是我餓了，回答心情或狀態。", say: "I'm hungry." },
          { text: "It's a pencil.", zh: "這是在介紹物品。", say: "It's a pencil." },
          { text: "She is my sister.", zh: "這是在介紹家人。", say: "She is my sister." }
        ],
        hint: "weather 是天氣。"
      },
      {
        q: "I want some water. I am ____.",
        read: "I want some water. I am thirsty.",
        options: [
          { text: "thirsty", zh: "thirsty 是口渴，想喝水就是 thirsty。", say: "thirsty", correct: true },
          { text: "sleepy", zh: "sleepy 是想睡覺。", say: "sleepy" },
          { text: "angry", zh: "angry 是生氣。", say: "angry" },
          { text: "cold", zh: "cold 是冷。", say: "cold" }
        ],
        hint: "想喝水，就是口渴。"
      },
      {
        q: "Which one means 「我很開心」?",
        read: "I am happy.",
        options: [
          { text: "I am happy.", zh: "happy 是開心，I am happy. 是我很開心。", say: "I am happy.", correct: true },
          { text: "I am sad.", zh: "sad 是難過。", say: "I am sad." },
          { text: "I am tired.", zh: "tired 是累。", say: "I am tired." },
          { text: "I am sick.", zh: "sick 是生病。", say: "I am sick." }
        ],
        hint: "笑咪咪的心情是 happy。"
      },
      {
        q: "It is hot. Put on your ____.",
        read: "It is hot. Put on your cap.",
        options: [
          { text: "cap", zh: "cap 是帽子，天氣熱、太陽大時可以戴帽子。", say: "cap", correct: true },
          { text: "coat", zh: "coat 是外套，冷的時候比較需要。", say: "coat" },
          { text: "gloves", zh: "gloves 是手套，冷天常用。", say: "gloves" },
          { text: "scarf", zh: "scarf 是圍巾。", say: "scarf" }
        ],
        hint: "太陽大，頭上戴什麼？"
      }
    ]
  },
  {
    id: "mini-reading",
    title: "星光城堡：小四閱讀BOSS",
    kind: "Boss",
    reward: 130,
    badge: "Grade 4 Ready",
    enemy: "Story Dragon",
    goal: "整合單字、句型與短文理解",
    questions: [
      {
        q: "Read: Mia has a red bag. She has two books in it. What color is Mia's bag?",
        read: "Mia has a red bag. She has two books in it. What color is Mia's bag?",
        options: [
          { text: "red", zh: "短文說 Mia has a red bag，所以包包是 red。", say: "red", correct: true },
          { text: "blue", zh: "短文沒有說 blue。", say: "blue" },
          { text: "green", zh: "green 是綠色，但短文不是這個顏色。", say: "green" },
          { text: "yellow", zh: "yellow 是黃色，短文沒有提到。", say: "yellow" }
        ],
        hint: "看到 red bag 了嗎？答案藏在那裡。"
      },
      {
        q: "Read: It is Sunday. Leo plays basketball with his brother. Who plays with Leo?",
        read: "It is Sunday. Leo plays basketball with his brother. Who plays with Leo?",
        options: [
          { text: "his brother", zh: "with his brother 是和他的兄弟一起。", say: "his brother", correct: true },
          { text: "his teacher", zh: "短文沒有 teacher。", say: "his teacher" },
          { text: "his mom", zh: "短文沒有 mom。", say: "his mom" },
          { text: "his friend", zh: "短文沒有 friend。", say: "his friend" }
        ],
        hint: "with 後面的人就是一起玩的人。"
      },
      {
        q: "A: Do you like dogs? B: ____",
        read: "Do you like dogs?",
        options: [
          { text: "Yes, I do.", zh: "Do you...? 的肯定回答可以說 Yes, I do。", say: "Yes, I do.", correct: true },
          { text: "Yes, I am.", zh: "am 是 be 動詞，這題要用 do 回答。", say: "Yes, I am." },
          { text: "Yes, it is.", zh: "it is 用來回答物品或天氣，不適合這題。", say: "Yes, it is." },
          { text: "Yes, she can.", zh: "這是在回答 can 的問題。", say: "Yes, she can." }
        ],
        hint: "問題開頭是 Do you，所以回答也找 do。"
      },
      {
        q: "Choose the best sentence.",
        read: "Choose the best sentence.",
        options: [
          { text: "We go to school by bus.", zh: "by bus 是搭公車，句子順序也正確。", say: "We go to school by bus.", correct: true },
          { text: "We goes to school by bus.", zh: "We 後面用 go，不用 goes。", say: "We goes to school by bus." },
          { text: "We go school bus by.", zh: "英文順序不對。", say: "We go school bus by." },
          { text: "We by bus go to school.", zh: "常見順序是 go to school by bus。", say: "We by bus go to school." }
        ],
        hint: "We + go to school + by bus。"
      }
    ]
  }
];

const storyLessonCount = lessons.length;
const wordBankUnits = window.POKEPIA_WORD_BANK || [];

lessons.push(...createWordMissions(wordBankUnits));

const pets = [
  { name: "Bunbun", species: "小兔夥伴", className: "bunny", at: 0 },
  { name: "Mimi", species: "花貓夥伴", className: "cat", at: 1 },
  { name: "Pipo", species: "小狗夥伴", className: "dog", at: 2 },
  { name: "Bamboo", species: "熊貓夥伴", className: "panda", at: 3 },
  { name: "Fenny", species: "狐狸夥伴", className: "fox", at: 4 },
  { name: "Ollie", species: "水獺夥伴", className: "otter", at: 5 },
  { name: "Kiki", species: "小猴夥伴", className: "monkey", at: 6 },
  { name: "Lulu", species: "星鹿夥伴", className: "deer", at: 8 }
];

const initialState = {
  xp: 0,
  cleared: [],
  activeLesson: "abc-phonics",
  questionIndex: 0,
  answered: false,
  selectedAnswer: null
};

let state = loadState();

if (!lessons.some((lesson) => lesson.id === state.activeLesson)) {
  state = { ...initialState };
  saveState();
}

const els = {
  trainerName: document.querySelector("#trainerName"),
  trainerRank: document.querySelector("#trainerRank"),
  trainerXp: document.querySelector("#trainerXp"),
  xpBar: document.querySelector("#xpBar"),
  petSprite: document.querySelector("#petSprite"),
  petName: document.querySelector("#petName"),
  petLevel: document.querySelector("#petLevel"),
  petBar: document.querySelector("#petBar"),
  collectionGrid: document.querySelector("#collectionGrid"),
  badgeStrip: document.querySelector("#badgeStrip"),
  completionText: document.querySelector("#completionText"),
  questMap: document.querySelector("#questMap"),
  lessonType: document.querySelector("#lessonType"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonReward: document.querySelector("#lessonReward"),
  enemyName: document.querySelector("#enemyName"),
  questionMeta: document.querySelector("#questionMeta"),
  questionText: document.querySelector("#questionText"),
  answerList: document.querySelector("#answerList"),
  speakQuestionBtn: document.querySelector("#speakQuestionBtn"),
  hintBtn: document.querySelector("#hintBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  feedback: document.querySelector("#feedback"),
  teacherCaption: document.querySelector("#teacherCaption"),
  resetBtn: document.querySelector("#resetBtn")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("pokepiaEnglishState"));
    return { ...initialState, ...saved };
  } catch {
    return { ...initialState };
  }
}

function saveState() {
  localStorage.setItem("pokepiaEnglishState", JSON.stringify(state));
}

function getActiveLesson() {
  return lessons.find((lesson) => lesson.id === state.activeLesson) || lessons[0];
}

function getActiveQuestion() {
  const lesson = getActiveLesson();
  return lesson.questions[state.questionIndex] || lesson.questions[0];
}

function isUnlocked(index) {
  return index === 0 || state.cleared.includes(lessons[index - 1].id);
}

function getRank() {
  if (state.xp >= 560) return "小四閱讀勇者";
  if (state.xp >= 330) return "句型探險家";
  if (state.xp >= 150) return "單字收藏家";
  return "Starter";
}

function getPetLevel() {
  return Math.max(1, Math.floor(state.xp / 90) + 1);
}

function getCurrentPet() {
  const clearedCount = state.cleared.length;
  return [...pets].reverse().find((pet) => clearedCount >= pet.at) || pets[0];
}

function getCorrectIndex(question) {
  return question.options.findIndex((option) => option.correct);
}

function createWordMissions(units) {
  return units.flatMap((unit, unitIndex) => {
    const normalizedWords = unit.words.map(([en, zh]) => ({ en, zh, unit }));
    return chunkWords(normalizedWords, 6).map((chunk, chunkIndex) => {
      const missionNumber = chunkIndex + 1;
      return {
        id: `word-${unit.id}-${missionNumber}`,
        title: `${unit.title} ${missionNumber}`,
        kind: unit.kind,
        reward: 35,
        badge: `${unit.title}${missionNumber}`,
        enemy: getWordEnemy(unitIndex, chunkIndex),
        goal: unit.goal,
        questions: chunk.map((word, wordIndex) => createWordQuestion(word, normalizedWords, wordIndex, chunkIndex))
      };
    });
  });
}

function chunkWords(words, size) {
  const chunks = [];
  for (let index = 0; index < words.length; index += size) {
    chunks.push(words.slice(index, index + size));
  }
  return chunks;
}

function createWordQuestion(word, allWords, wordIndex, chunkIndex) {
  const distractors = allWords
    .filter((item) => item.en !== word.en)
    .sort((a, b) => {
      const aScore = hashText(`${word.en}-${chunkIndex}-${wordIndex}-${a.en}`);
      const bScore = hashText(`${word.en}-${chunkIndex}-${wordIndex}-${b.en}`);
      return aScore - bScore;
    })
    .slice(0, 3);

  return {
    q: `Which one means 「${word.zh}」?`,
    read: `Which one means ${word.en}?`,
    options: [
      createWordOption(word, true),
      ...distractors.map((item) => createWordOption(item, false))
    ],
    hint: `${word.zh} 的英文是 ${word.en}。先聽聲音，再看看字母形狀。`
  };
}

function createWordOption(word, correct) {
  return {
    text: word.en,
    zh: `${word.en} 是「${word.zh}」。把它收進你的 POKEPIA 單字圖鑑吧。`,
    say: word.en,
    correct
  };
}

function getWordEnemy(unitIndex, chunkIndex) {
  const enemies = ["Word Bubble", "Sound Seed", "Memory Puff", "Quiz Jelly", "Letter Sprite", "Review Star"];
  return enemies[(unitIndex + chunkIndex) % enemies.length];
}

function getShuffledOptions(question, lessonId, questionIndex) {
  return question.options
    .map((option, originalIndex) => ({ ...option, originalIndex }))
    .sort((a, b) => {
      const aScore = hashText(`${lessonId}-${questionIndex}-${a.text}`);
      const bScore = hashText(`${lessonId}-${questionIndex}-${b.text}`);
      return aScore - bScore;
    });
}

function hashText(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) % 9973;
  }
  return hash;
}

function render() {
  renderTrainer();
  renderCollection();
  renderBadges();
  renderMap();
  renderBattle();
}

function renderTrainer() {
  const pet = getCurrentPet();
  const petLevel = getPetLevel();
  els.trainerRank.textContent = getRank();
  els.trainerXp.textContent = `${state.xp} XP`;
  els.xpBar.style.width = `${Math.min(100, (state.xp / 720) * 100)}%`;
  els.petSprite.className = `animal-sprite ${pet.className}`;
  els.petSprite.innerHTML = getAnimalParts(pet.className);
  els.petName.textContent = pet.name;
  els.petLevel.textContent = `Lv. ${petLevel}`;
  els.petBar.style.width = `${(state.xp % 90) / 90 * 100}%`;
}

function renderCollection() {
  els.collectionGrid.innerHTML = pets.map((pet) => {
    const unlocked = state.cleared.length >= pet.at;
    return `
      <div class="mini-pet ${unlocked ? "unlocked" : ""}" title="${unlocked ? `${pet.name}：${pet.species}` : "尚未發現"}">
        <div class="mini-animal ${pet.className}">${getAnimalParts(pet.className)}</div>
      </div>
    `;
  }).join("");
}

function renderBadges() {
  const storyBadges = lessons.slice(0, storyLessonCount).map((lesson) => {
    const cleared = state.cleared.includes(lesson.id);
    return `<span class="badge ${cleared ? "" : "locked"}">${cleared ? lesson.badge : "Locked"}</span>`;
  }).join("");
  const wordMissionTotal = lessons.length - storyLessonCount;
  const wordMissionCleared = lessons
    .slice(storyLessonCount)
    .filter((lesson) => state.cleared.includes(lesson.id)).length;
  els.badgeStrip.innerHTML = `${storyBadges}<span class="badge word-count">字庫 ${wordMissionCleared}/${wordMissionTotal}</span>`;
}

function renderMap() {
  els.completionText.textContent = `${state.cleared.length} / ${lessons.length} cleared`;
  els.questMap.innerHTML = lessons.map((lesson, index) => {
    const unlocked = isUnlocked(index);
    const cleared = state.cleared.includes(lesson.id);
    const active = state.activeLesson === lesson.id;
    return `
      <button class="quest-node ${active ? "active" : ""} ${cleared ? "cleared" : ""} ${unlocked ? "" : "locked"}" data-lesson="${lesson.id}" ${unlocked ? "" : "disabled"}>
        <span class="node-top">
          <strong>${index + 1}. ${lesson.title}</strong>
          <span class="node-kind">${lesson.kind}</span>
        </span>
        <span class="node-bottom">
          <span>${lesson.goal}</span>
          <span>${cleared ? "Cleared" : `+${lesson.reward} XP`}</span>
        </span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".quest-node").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeLesson = button.dataset.lesson;
      state.questionIndex = 0;
      state.answered = false;
      state.selectedAnswer = null;
      saveState();
      render();
    });
  });
}

function renderBattle() {
  const lesson = getActiveLesson();
  const question = getActiveQuestion();
  const cleared = state.cleared.includes(lesson.id);
  const displayOptions = getShuffledOptions(question, lesson.id, state.questionIndex);
  els.lessonType.textContent = lesson.kind;
  els.lessonTitle.textContent = lesson.title;
  els.lessonReward.textContent = cleared ? "Cleared" : `+${lesson.reward} XP`;
  els.enemyName.textContent = lesson.enemy;
  els.questionMeta.textContent = `Question ${state.questionIndex + 1} / ${lesson.questions.length}`;
  els.questionText.textContent = question.q;
  els.answerList.innerHTML = displayOptions.map((option) => {
    const answeredClass = state.answered
      ? option.correct
        ? "correct"
        : option.originalIndex === state.selectedAnswer
          ? "wrong"
          : ""
      : "";
    const explain = state.answered ? `<span class="answer-explain">${option.zh}</span>` : "";
    return `
      <button class="answer-button ${answeredClass}" data-answer="${option.originalIndex}" type="button">
        <span class="answer-main">
          <strong>${option.text}</strong>
          <span class="listen-pill" aria-hidden="true">Listen</span>
        </span>
        ${explain}
      </button>
    `;
  }).join("");
  els.feedback.textContent = state.answered ? getFeedback(question) : "點答案會朗讀英文並立刻作答；作答後可以再點任一答案重聽。";
  els.nextBtn.disabled = false;
  els.nextBtn.textContent = state.answered ? getNextLabel(lesson) : "送出答案";

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => handleAnswerClick(Number(button.dataset.answer)));
  });
}

function handleAnswerClick(index) {
  const question = getActiveQuestion();
  const option = question.options[index];
  speak(option.say || option.text);
  if (state.answered) return;
  chooseAnswer(index);
}

function chooseAnswer(index) {
  const beforeXp = state.xp;
  const beforeLevel = getPetLevel();
  const beforePet = getCurrentPet();
  state.selectedAnswer = index;
  state.answered = true;
  const question = getActiveQuestion();
  if (question.options[index].correct) {
    state.xp += 15;
  }
  const teacherFeedback = getTeacherFeedback(question, index, beforeXp, beforeLevel, beforePet);
  saveState();
  render();
  speakTeacher(teacherFeedback.lines, teacherFeedback.mood);
}

function getFeedback(question) {
  const selected = question.options[state.selectedAnswer];
  if (selected?.correct) {
    const pet = getCurrentPet();
    return `答對了！${pet.name} 開心跳跳，英文能量增加。`;
  }
  const correct = question.options[getCorrectIndex(question)];
  return `差一點點，正確答案是 ${correct.text}。再聽一次、再試一次，你會越來越強。`;
}

function getTeacherFeedback(question, selectedIndex, beforeXp, beforeLevel, beforePet) {
  const selected = question.options[selectedIndex];
  const correct = question.options[getCorrectIndex(question)];
  const currentPet = getCurrentPet();
  const currentLevel = getPetLevel();
  const gainedXp = Math.max(0, state.xp - beforeXp);
  const levelText = currentLevel > beforeLevel
    ? `太棒了，${currentPet.name} 升級到 ${currentLevel} 級了！`
    : `${currentPet.name} 現在是 ${currentLevel} 級，離下一次升級又更近一點。`;
  const petText = currentPet.name !== beforePet.name
    ? `哇，新的夥伴 ${currentPet.name} 也加入你的冒險隊伍了。`
    : "";

  if (selected?.correct) {
    return {
      mood: "happy",
      lines: [
        "答對了，做得好！",
        `你選的是 ${correct.text}。`,
        correct.zh,
        `這題得到 ${gainedXp} 點英文能量。`,
        levelText,
        petText
      ]
    };
  }

  return {
    mood: "gentle",
    lines: [
      "沒關係，這題差一點點。",
      `你剛剛選的是 ${selected.text}，正確答案是 ${correct.text}。`,
      correct.zh,
      "老師相信你再聽一次就會更熟。",
      `${currentPet.name} 也會陪你繼續練習。`
    ]
  };
}

function getNextLabel(lesson) {
  if (state.questionIndex < lesson.questions.length - 1) return "下一題";
  if (!state.cleared.includes(lesson.id)) return "完成關卡";
  return "重新挑戰";
}

function goNext() {
  const lesson = getActiveLesson();
  if (!state.answered) {
    els.feedback.textContent = "先選一個答案，小冒險家。點答案時也會幫你唸英文。";
    speakTeacher([
      "先選一個答案，小冒險家。",
      "點答案時，老師也會幫你唸英文。"
    ], "gentle");
    return;
  }

  if (state.questionIndex < lesson.questions.length - 1) {
    state.questionIndex += 1;
    state.answered = false;
    state.selectedAnswer = null;
  } else {
    const beforeLevel = getPetLevel();
    const beforePet = getCurrentPet();
    if (!state.cleared.includes(lesson.id)) {
      state.cleared.push(lesson.id);
      state.xp += lesson.reward;
      const clearFeedback = getLessonClearMessage(lesson, beforeLevel, beforePet);
      speakTeacher(clearFeedback.lines, clearFeedback.mood);
    }
    const currentIndex = lessons.findIndex((item) => item.id === lesson.id);
    const nextLesson = lessons[currentIndex + 1];
    state.activeLesson = nextLesson ? nextLesson.id : lesson.id;
    state.questionIndex = 0;
    state.answered = false;
    state.selectedAnswer = null;
  }
  saveState();
  render();
}

function getLessonClearMessage(lesson, beforeLevel, beforePet) {
  const currentPet = getCurrentPet();
  const currentLevel = getPetLevel();
  const levelText = currentLevel > beforeLevel
    ? `${currentPet.name} 升級到 ${currentLevel} 級，跳得好高。`
    : `${currentPet.name} 的英文能量裝得更滿了。`;
  const petText = currentPet.name !== beforePet.name
    ? `新的動物夥伴 ${currentPet.name} 加入了，牠會陪你去下一座島。`
    : "";
  return {
    mood: "celebrate",
    lines: [
      "關卡完成！",
      `獲得 ${lesson.badge} 徽章和 ${lesson.reward} 點英文能量。`,
      levelText,
      petText,
      "老師給你一個大大的讚。"
    ]
  };
}

function showHint() {
  const question = getActiveQuestion();
  els.feedback.textContent = `小提示：${question.hint}`;
  speakTeacher(["小提示。", question.hint], "gentle");
}

function speakQuestion() {
  const question = getActiveQuestion();
  speak(question.read || question.q);
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這台裝置暫時不支援朗讀，但你還是可以看英文和中文解釋。";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang || "en-US";
  utterance.rate = options.rate || 0.82;
  utterance.pitch = options.pitch || 1.08;
  window.speechSynthesis.speak(utterance);
}

function speakTeacher(lines, mood = "gentle") {
  const cleanLines = (Array.isArray(lines) ? lines : [lines]).filter(Boolean);
  if (!cleanLines.length) return;
  const voiceStyle = getTeacherVoiceStyle(mood);
  speakSequence(cleanLines, voiceStyle);
}

function getTeacherVoiceStyle(mood) {
  const styles = {
    happy: { lang: "zh-TW", rate: 0.98, pitch: 1.24, pause: 180 },
    celebrate: { lang: "zh-TW", rate: 0.95, pitch: 1.3, pause: 240 },
    gentle: { lang: "zh-TW", rate: 0.9, pitch: 1.12, pause: 260 }
  };
  return styles[mood] || styles.gentle;
}

function speakSequence(lines, options) {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "這台裝置暫時不支援朗讀，但你還是可以看英文和中文解釋。";
    return;
  }

  window.speechSynthesis.cancel();
  let index = 0;

  const speakNext = () => {
    const line = lines[index];
    if (!line) return;
    els.teacherCaption.textContent = line;
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.lang = options.lang;
    utterance.rate = options.rate;
    utterance.pitch = options.pitch;
    utterance.onend = () => {
      index += 1;
      if (index < lines.length) {
        window.setTimeout(speakNext, options.pause);
      }
    };
    window.speechSynthesis.speak(utterance);
  };

  speakNext();
}

function getAnimalParts(type) {
  return `
    <span class="ear left"></span>
    <span class="ear right"></span>
    <span class="face-mark"></span>
    <span class="eye left"></span>
    <span class="eye right"></span>
    <span class="nose"></span>
    <span class="mouth"></span>
    <span class="cheek left"></span>
    <span class="cheek right"></span>
    <span class="tail"></span>
    <span class="paw left"></span>
    <span class="paw right"></span>
  `;
}

els.nextBtn.addEventListener("click", goNext);
els.hintBtn.addEventListener("click", showHint);
els.speakQuestionBtn.addEventListener("click", speakQuestion);
els.resetBtn.addEventListener("click", () => {
  if (!confirm("確定要重置 POKEPIA 學習進度嗎？")) return;
  state = { ...initialState };
  saveState();
  render();
});

render();
