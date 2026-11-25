export const personRegions = ["國際人物", "臺灣在地人物"] as const;
export const personKinds = ["社區工作者", "運動員", "科學家", "藝術家", "公益行動者"] as const;

type RoleModelStory = {
  id: string;
  person: string;
  title: string;
  region: typeof personRegions[number];
  kind: typeof personKinds[number];
  color: string;
  symbol: string;
  paragraphs: string[];
  prompts: string[];
  activity: string;
  source: { label: string; url: string };
};

// Original reading summaries and discussion prompts; source links cover biographical facts.
export const roleModelStories: RoleModelStory[] = [
  {
    id: "jane-addams", person: "珍・亞當斯", title: "讓社區成為彼此的依靠",
    region: "國際人物", kind: "社區工作者", color: "#dce6d5", symbol: "伴",
    paragraphs: [
      "珍・亞當斯在芝加哥創辦赫爾之家，為社區居民及移民提供教育與社會服務。她關心的，是人們在日常生活中需要哪些支持。",
      "一個社區裡，每個人的語言、經驗和需要可能不同。一起學習、交流與獲得協助的空間，可以讓原本不熟悉的鄰居有機會認識彼此。",
      "讀完這段人物故事，我們也可以觀察身邊：有誰剛搬來、還不熟悉環境？先聽聽對方的需要，再想想自己能提供哪一點幫助。",
    ],
    prompts: ["新搬來的鄰居可能需要什麼幫助？", "如果設計一個社區活動，你希望邀請誰一起參加？"],
    activity: "和家人畫出一張社區支持地圖，標出圖書館、活動中心，以及遇到困難時可以求助的地方。",
    source: { label: "美國國會圖書館｜珍・亞當斯", url: "https://guides.loc.gov/jane-addams" },
  },
  {
    id: "tai-tzu-ying", person: "戴資穎", title: "比獎牌更長的練習",
    region: "臺灣在地人物", kind: "運動員", color: "#eedfc9", symbol: "毅",
    paragraphs: [
      "羽球選手戴資穎在東京奧運獲得女子單打銀牌。觀眾看到的是比賽結果，而認識運動，也可以從每一次揮拍、移動與練習開始。",
      "練習一項技能時，我們不一定每次都成功。記下還不熟悉的地方、請人協助，並安排合適的休息，是每個學習者都可以嘗試的方法。",
      "和孩子聊運動時，可以把目光放在努力與學習：今天學會了什麼？哪一個動作比昨天更熟悉？欣賞別人的成績，也能找到自己的下一小步。",
    ],
    prompts: ["除了得獎，你還會怎麼肯定一位運動員？", "有哪件事是你想慢慢練好的？"],
    activity: "選一個安全的小練習，與家人各自設定能做到的目標，結束後說出一個自己的進步。",
    source: { label: "中華奧林匹克委員會｜東京奧運羽球銀牌", url: "https://www.tpenoc.net/news/badminton-silver/" },
  },
  {
    id: "marie-curie", person: "瑪麗・居禮", title: "從好奇開始的探索",
    region: "國際人物", kind: "科學家", color: "#d6e6eb", symbol: "探",
    paragraphs: [
      "瑪麗・居禮研究放射現象，曾獲得諾貝爾物理學獎與化學獎。她的研究讓人們對物質有了更多認識。",
      "認識科學家的工作，可以從提問、觀察與記錄開始。同一個問題，可能需要不同的實驗與許多人的合作，才逐漸找到更清楚的解釋。",
      "在生活裡，我們也能練習好奇：為什麼影子會移動？哪些物品會浮在水上？不用急著猜對答案，先留下觀察，再一起查找可靠的資料。",
    ],
    prompts: ["你最近對什麼事情感到好奇？", "猜測和實際觀察不一樣時，可以怎麼做？"],
    activity: "挑一個安全的日常現象，畫下你的猜測與觀察結果，再和家人比較有哪些不同。",
    source: { label: "諾貝爾獎官網｜獎項與得獎者資料", url: "https://www.nobelprize.org/prizes/list/nobel-prize-facts/" },
  },
  {
    id: "chen-cheng-po", person: "陳澄波", title: "把家鄉畫進故事裡",
    region: "臺灣在地人物", kind: "藝術家", color: "#eed6df", symbol: "畫",
    paragraphs: [
      "畫家陳澄波曾以嘉義的街道與風景作為創作題材。他的畫作留下了家鄉不同角度的樣貌，也讓後來的人有機會透過畫面認識當時的環境。",
      "每天走過的街角，看起來也許很平常。換個角度停下來看，房子的顏色、樹的影子與遠方的山，都可能成為創作的起點。",
      "藝術不只有畫得像不像。我們可以練習說出自己的感受，聽聽別人看到了什麼，也尊重同一個地方可以有許多不同的畫法。",
    ],
    prompts: ["家附近有哪個地方是你很想畫下來的？", "你和家人看到同一幅畫時，注意到的地方一樣嗎？"],
    activity: "與家人各畫一張熟悉的街景，分享你選的顏色，以及你最想留下的細節。",
    source: { label: "陳澄波文化基金會｜望向山林", url: "https://chengpo.org/museum/望向山林──陳澄波戶外美術館-2019-3-25/" },
  },
  {
    id: "chen-shu-chu", person: "陳樹菊", title: "把日常變成幫助",
    region: "臺灣在地人物", kind: "公益行動者", color: "#e3dccf", symbol: "善",
    paragraphs: [
      "臺東菜販陳樹菊長期投入公益。她獲得麥格塞塞獎後，將獎金捐給馬偕醫院臺東分院，支持在地醫療。",
      "認識她的行動，讓我們有機會討論：生活裡有哪些需要幫助的人？公益可以是捐款，也可以是分享時間、參與志工或照顧共同使用的空間。",
      "每個家庭能付出的方式不同。先照顧好自己的需要，再選擇能力範圍內、讓對方也感到被尊重的幫助，就是值得練習的一步。",
    ],
    prompts: ["除了金錢，還有哪些幫助別人的方式？", "在幫忙之前，可以先問對方什麼？"],
    activity: "全家一起挑一件做得到的小行動，例如整理可分享的書籍，並先確認接收單位需要什麼。",
    source: { label: "公視新聞｜陳樹菊捐贈獎金", url: "https://news.pts.org.tw/article/220127" },
  },
];
export type { RoleModelStory };
