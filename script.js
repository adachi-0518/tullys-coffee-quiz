// =====================================================
// コーヒー豆のデータ（全17種）
// 出典: タリーズ公式サイト https://www.tullys.co.jp/menu/beans/
//       （2026年7月時点・期間限定商品は除外）
//
// kire = 公式の「すっきり感」(10段階)
// body = 公式の「ボディ」(10段階)
// drink = 公式ページの「おすすめの飲み方」
// flavor = 説明文から分類: fruity(華やか・フルーティー) /
//          roasty(香ばしい・チョコ系) / balanced(バランス型)
// =====================================================
const BEANS = [
  // ---------- ブレンド ----------
  {
    name: "ブラック スリー",
    category: "ブレンド",
    emoji: "⚫",
    origin: "コロンビア、ペルー",
    kire: 5, body: 7,
    flavor: "roasty",
    drink: ["ブラック"],
    price: "200g ￥1,430（税込）",
    desc: "心地よいアロマとなめらかな舌ざわり、深いボディとカラメルのような甘い余韻が印象的な味わい。ぜひブラックでどうぞ。",
    url: "https://www.tullys.co.jp/menu/beans/blend/blackthree.html",
  },
  {
    name: "ハウスブレンド",
    category: "ブレンド",
    emoji: "🌿",
    origin: "コロンビア、グァテマラ 他",
    kire: 6, body: 5,
    flavor: "balanced",
    classic: true, // 公式説明で唯一「タリーズコーヒーの定番の味わい」と書かれている豆
    drink: ["ブラック"],
    price: "200g ￥1,320（税込）",
    desc: "ほどよいボディとすっきりとした酸味、スムースな飲み口が特徴。バランスがよく飲みやすい、タリーズコーヒーの定番の味わいです。",
    url: "https://www.tullys.co.jp/menu/beans/blend/house_blend.html",
  },
  {
    name: "モカジャバ",
    category: "ブレンド",
    emoji: "🍷",
    origin: "インドネシア、エチオピア",
    kire: 5, body: 6,
    flavor: "fruity",
    drink: ["ブラック", "シュガー"],
    price: "200g ￥1,480（税込）",
    desc: "エチオピアモカの華やかなアロマとワイニーな口あたりが特徴。タリーズの豆の中でも、特にユニークな風味を持つブレンドです。",
    url: "https://www.tullys.co.jp/menu/beans/blend/mocha_java.html",
  },
  {
    name: "フレンチロースト",
    category: "ブレンド",
    emoji: "🔥",
    origin: "グァテマラ、タンザニア",
    kire: 2, body: 9,
    flavor: "roasty",
    drink: ["シュガー"],
    price: "200g ￥1,320（税込）",
    desc: "タリーズの中で最も深くローストされたコーヒー。リッチでスモーキーな香りが口いっぱいに広がります。アイスコーヒー用の豆としてもおすすめ。",
    url: "https://www.tullys.co.jp/menu/beans/blend/french_roast.html",
  },
  {
    name: "ピッコロバンビーノ",
    category: "ブレンド",
    emoji: "🌅",
    origin: "グァテマラ、パプアニューギニア 他",
    kire: 6, body: 4,
    flavor: "roasty",
    drink: ["ブラック", "はちみつ"],
    price: "200g ￥1,320（税込）",
    desc: "すっきりとマイルドな口あたりで飲みやすいコーヒー。後味にはキャラメルのような香ばしい風味が感じられます。朝のコーヒーにもぴったり！",
    url: "https://www.tullys.co.jp/menu/beans/blend/piccolo_bambino.html",
  },
  {
    name: "エスプレッソクラシコ",
    category: "ブレンド",
    emoji: "⚡",
    origin: "グァテマラ、コスタリカ 他",
    kire: 2, body: 8,
    flavor: "roasty",
    drink: ["ミルク"],
    price: "200g ￥1,380（税込）",
    desc: "リッチなボディと甘く華やかな香りが印象的。そのままエスプレッソではもちろん、ラテやカプチーノのベースにも。ミルクをたっぷり入れてどうぞ。",
    url: "https://www.tullys.co.jp/menu/beans/blend/espresso_classico.html",
  },
  {
    name: "カフェオレ モナーレ",
    category: "ブレンド",
    emoji: "🥛",
    origin: "グァテマラ、コロンビア 他",
    kire: 6, body: 7,
    flavor: "balanced",
    drink: ["ブラック", "ミルク"],
    price: "200g ￥1,530（税込）",
    desc: "ミルクを入れてコーヒーを楽しみたい方へおすすめの豆。ミルクとあわせて甘みやまろやかな風味を楽しめて、ブラックでも美味しくいただけます。",
    url: "https://www.tullys.co.jp/menu/beans/blend/cafe_au_lait_monire.html",
  },

  // ---------- シングルオリジン（バライエタル） ----------
  {
    name: "ホンジュラス 森のエランディケ",
    category: "シングルオリジン",
    emoji: "🌲",
    origin: "ホンジュラス レンピラ県 エランディケ",
    kire: 7, body: 6,
    flavor: "fruity",
    drink: ["ブラック"],
    price: "150g ￥1,680（税込）",
    desc: "標高1,500mを超える深い森に囲まれたエランディケ産。シトラスのような爽やかなフレーバーと、澄んだ飲み心地が特徴です。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/26honduras_erandique.html",
  },
  {
    name: "タリーズ ブラジル バウ イエローブルボン",
    category: "シングルオリジン",
    emoji: "🌻",
    origin: "ブラジル",
    kire: 8, body: 4,
    flavor: "balanced",
    drink: ["ブラック", "シュガー"],
    price: "200g ￥1,430（税込）",
    desc: "黄色に熟するイエローブルボン種のみを使用し、太陽のもとでじっくり天日乾燥。すっきり飲みやすいマイルドな味わいです。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/26brazil_yellow_bourbon.html",
  },
  {
    name: "タリーズ ブラジル バウ",
    category: "シングルオリジン",
    emoji: "☀️",
    origin: "ブラジル",
    kire: 5, body: 6,
    flavor: "balanced",
    drink: ["ブラック", "はちみつ"],
    price: "200g ￥1,430（税込）",
    desc: "豊かなアロマ、しっかりとしたボディと酸味がバランスよく調和し、後味に広がる甘みが楽しめます。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/tullys_brazil_bau.html",
  },
  {
    name: "タリーズ ブラジル ファゼンダ バレ ド クリスタル",
    category: "シングルオリジン",
    emoji: "🍒",
    origin: "ブラジル",
    kire: 8, body: 6,
    flavor: "fruity",
    drink: ["ブラック"],
    price: "200g ￥1,720（税込）",
    desc: "寒暖差のある環境でゆっくり成熟したコーヒーチェリーの華やかな香りと、完熟チェリーを思わせるやさしい甘みが特徴です。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/26brazil_vare_do_cristal.html",
  },
  {
    name: "エチオピア シダモG1 シャキッソウォッシュド",
    category: "シングルオリジン",
    emoji: "💐",
    origin: "エチオピア",
    kire: 9, body: 6,
    flavor: "fruity",
    drink: ["ブラック"],
    price: "150g ￥1,870（税込）",
    desc: "花のように上品な香りと柑橘系の爽やかな風味が調和したバランスの良い味わい。小規模生産者が一粒ずつ手摘みしたトップグレードです。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/26_ethiopia_sidamo_g1.html",
  },
  {
    name: "スマトラ マンデリン G1 リントンニフタ",
    category: "シングルオリジン",
    emoji: "🍫",
    origin: "インドネシア 北スマトラ リントンニフタ地区",
    kire: 5, body: 7,
    flavor: "roasty",
    drink: ["ブラック"],
    price: "150g ￥1,870（税込）",
    desc: "マンデリン最高等級のG1ならではの、力強いコクとダークチョコレートのような重厚感が特徴。深い余韻をまずはブラックで。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/26mandeheling_g1.html",
  },
  {
    name: "キリマンジャロ KIBO タリメ スイートウォッシュド",
    category: "シングルオリジン",
    emoji: "🏔️",
    origin: "タンザニア マラ州 タリメエリア",
    kire: 7, body: 6,
    flavor: "fruity",
    drink: ["ブラック", "はちみつ"],
    price: "200g ￥1,530（税込）",
    desc: "シトラスや紅茶を感じさせる華やかな香り。なめらかな口あたりで、はちみつやカラメルのような豊かな甘みが広がります。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/kilimanjaro_kibosw.html",
  },
  {
    name: "コスタリカ ラ ミニータ ウェットミル スイートウォッシュド",
    category: "シングルオリジン",
    emoji: "🌺",
    origin: "コスタリカ タラス ロス サントス",
    kire: 6, body: 4,
    flavor: "fruity",
    drink: ["ブラック", "シュガー"],
    price: "200g ￥1,530（税込）",
    desc: "フローラルなアロマが際立つ、クリーンで飲みやすい味わい。なめらかな口あたりでフルーティ感のある明るさが続きます。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/costarica_laminita.html",
  },
  {
    name: "デカフェ ブラジル IP農園",
    category: "シングルオリジン",
    emoji: "🌙",
    origin: "ブラジル ミナスジェライス州 カルモ デ ミナス IP農園",
    kire: 4, body: 4,
    flavor: "roasty",
    drink: ["ブラック", "シュガー"],
    decaf: true,
    price: "200g ￥1,580（税込）",
    desc: "マウンテンウォーター製法でカフェインを95%以上除去したデカフェ。チョコレートやカラメルを思わせる香りと、まろやかな口あたりが楽しめます。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/decafe_bra.html",
  },
  {
    name: "エチオピアモカ G1 ウラガ ナチュラル",
    category: "シングルオリジン",
    emoji: "🍑",
    origin: "エチオピア オロミア州 シダモ グジ ウラガ地区",
    kire: 9, body: 6,
    flavor: "fruity",
    drink: ["ブラック", "はちみつ"],
    price: "200g ￥1,580（税込）",
    desc: "芳醇で鮮やかなモカフレーバー。ラズベリーやピーチのような爽やかさがあり、すっきりとした飲み口とフルーティ感が楽しめます。",
    url: "https://www.tullys.co.jp/menu/beans/varietal/ethiopia_uraga.html",
  },
];

// =====================================================
// 質問データ
// score(bean) が「その豆に何点入るか」を返す
// =====================================================
const QUESTIONS = [
  {
    text: "コーヒーはどうやって飲むことが多い？",
    choices: [
      {
        label: "ブラックでそのまま",
        // 公式が「ブラック」をおすすめしている豆に加点
        score: (bean) => (bean.drink.includes("ブラック") ? 2 : 0),
      },
      {
        label: "ミルクや甘みをプラス",
        // 公式が「ミルク」「シュガー」「はちみつ」をおすすめしている豆に加点
        score: (bean) =>
          (bean.drink.includes("ミルク") ? 4 : 0) +
          (bean.drink.includes("シュガー") ? 2 : 0) +
          (bean.drink.includes("はちみつ") ? 2 : 0),
      },
    ],
  },
  {
    text: "飲み口の好みは？",
    choices: [
      {
        label: "すっきり軽やか",
        // 公式の「すっきり感」(10段階) をそのまま得点化（最大5点）
        score: (bean) => bean.kire / 2,
      },
      {
        label: "どっしり濃厚",
        // 公式の「ボディ」(10段階) をそのまま得点化（最大5点）
        score: (bean) => bean.body / 2,
      },
    ],
  },
  {
    text: "どんな香りに惹かれる？",
    choices: [
      {
        label: "華やか・フルーティー系",
        // バランス型の豆はどちらを選んでも少し加点
        score: (bean) =>
          bean.flavor === "fruity" ? 3 : bean.flavor === "balanced" ? 2 : 0,
      },
      {
        label: "香ばしいチョコ・カラメル系",
        score: (bean) =>
          bean.flavor === "roasty" ? 3 : bean.flavor === "balanced" ? 2 : 0,
      },
    ],
  },
  {
    text: "豆を選ぶならどっち？",
    choices: [
      {
        label: "毎日飲める定番ブレンド",
        // 公式が「定番」と説明するハウスブレンドには+1のボーナス
        score: (bean) =>
          bean.category === "ブレンド" ? (bean.classic ? 3 : 2) : 0,
      },
      {
        label: "産地の個性が光るシングルオリジン",
        score: (bean) => (bean.category === "シングルオリジン" ? 2 : 0),
      },
    ],
  },
  {
    text: "夜のカフェイン、気になる？",
    choices: [
      {
        label: "ぜんぜん気にしない",
        score: (bean) => (bean.decaf ? 0 : 1),
      },
      {
        label: "夜は控えたい…",
        // デカフェに大きく加点して、必ず上位に来るようにする
        score: (bean) => (bean.decaf ? 10 : 0),
      },
    ],
  },
];

// =====================================================
// アプリの状態
// =====================================================
let currentQuestion = 0; // いま何問目か
let scores = [];         // BEANSと同じ並び順の合計点

// =====================================================
// 画面の切り替え
// =====================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// =====================================================
// 診断スタート
// =====================================================
function startQuiz() {
  currentQuestion = 0;
  scores = BEANS.map(() => 0); // 全部の豆のスコアを0にリセット
  showScreen("screen-quiz");
  renderQuestion();
}

// =====================================================
// 質問を表示する
// =====================================================
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  document.getElementById("question-text").textContent = q.text;
  document.getElementById("choice-a").textContent = q.choices[0].label;
  document.getElementById("choice-b").textContent = q.choices[1].label;

  // 進捗バーの更新
  const progress = (currentQuestion / QUESTIONS.length) * 100;
  document.getElementById("progress-fill").style.width = progress + "%";
  document.getElementById("progress-text").textContent =
    `Q${currentQuestion + 1} / ${QUESTIONS.length}`;
}

// =====================================================
// 回答したとき
// =====================================================
function answer(choiceIndex) {
  const choice = QUESTIONS[currentQuestion].choices[choiceIndex];

  // 選んだ選択肢のscore関数で、全豆にポイントを加算
  BEANS.forEach((bean, i) => {
    scores[i] += choice.score(bean);
  });

  currentQuestion++;
  if (currentQuestion < QUESTIONS.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// =====================================================
// 結果を表示する
// =====================================================
function showResult() {
  // スコアの高い順に並べ替え（同点はBEANSの並び順が優先）
  const ranking = BEANS
    .map((bean, i) => ({ bean, score: scores[i] }))
    .sort((a, b) => b.score - a.score);
  const winner = ranking[0].bean;
  const second = ranking[1].bean;

  document.getElementById("result-emoji").textContent = winner.emoji;
  document.getElementById("result-name").textContent = winner.name;
  document.getElementById("result-category").textContent =
    winner.decaf ? "デカフェ（カフェインレス）" : winner.category;
  document.getElementById("result-origin").textContent = "原産地：" + winner.origin;
  document.getElementById("result-desc").textContent = winner.desc;
  document.getElementById("result-pairing").textContent =
    "☕ 公式おすすめの飲み方：" + winner.drink.join("、");
  document.getElementById("result-price").textContent =
    winner.price + " ※2026年7月時点";
  document.getElementById("result-link").href = winner.url;
  document.getElementById("runner-up-name").textContent =
    `${second.emoji} ${second.name}`;

  showScreen("screen-result");

  // 公式の10段階評価をバーで表示（値 × 10%）
  document.getElementById("value-kire").textContent = winner.kire + "/10";
  document.getElementById("value-body").textContent = winner.body + "/10";
  requestAnimationFrame(() => {
    document.getElementById("bar-kire").style.width = winner.kire * 10 + "%";
    document.getElementById("bar-body").style.width = winner.body * 10 + "%";
  });
}

// =====================================================
// もう一度診断する
// =====================================================
function restart() {
  // 味のバーをリセット
  ["bar-kire", "bar-body"].forEach((id) => {
    document.getElementById(id).style.width = "0%";
  });
  startQuiz();
}
