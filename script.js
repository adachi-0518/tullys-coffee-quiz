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
// tagline = 結果画面で豆の特徴をひと言で伝えるキャッチコピー
// =====================================================
const BEANS = [
  // ---------- ブレンド ----------
  {
    name: "ブラック スリー",
    category: "ブレンド",
    tagline: "ブラックで飲みたい、カラメルの甘い余韻",
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
    tagline: "毎日飲める、タリーズの定番の味",
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
    tagline: "ワインのような、ちょっと個性派",
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
    tagline: "いちばん深煎り。スモーキーで力強い",
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
    tagline: "朝にぴったり、軽やかキャラメル",
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
    tagline: "ラテにすると本領発揮の濃厚さ",
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
    tagline: "ミルクと相性抜群のカフェオレ向き",
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
    tagline: "シトラス香る、森の澄んだ味わい",
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
    tagline: "太陽で干した、すっきりマイルド",
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
    tagline: "コクと酸味の、ちょうどいいバランス",
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
    tagline: "完熟チェリーのような、やさしい甘み",
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
    tagline: "花のような香りと、柑橘の爽やかさ",
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
    tagline: "ダークチョコのような、重厚なコク",
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
    tagline: "紅茶みたいな香りと、はちみつの甘み",
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
    tagline: "フローラルで、するする飲めるクリーンさ",
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
    tagline: "夜でも安心、カフェイン95%オフ",
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
    tagline: "ラズベリーやピーチのような華やかさ",
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
//   picks[i] = 質問iで選んだ選択肢のindex（0 or 1）
//   配点そのもの（各choiceのscore関数）は変更していない。回答を picks に
//   記録しておき、結果画面で毎回まとめて合算する方式にすることで、
//   「ひとつ前にもどる」で直前の回答分をそのまま差し引ける。
//   → 採点結果・同点時の並び順は従来と完全に同一。
// =====================================================
let currentQuestion = 0; // いま何問目か
let picks = [];          // 回答した選択肢のindexを問題順に記録
let fading = false;      // フェード遷移中フラグ（多重タップ防止）

const $ = (id) => document.getElementById(id);

// =====================================================
// 画面の切り替え
// =====================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
}

// =====================================================
// スタート画面のダイヤル（17個の丸を円状に配置）を組み立てる
// =====================================================
function buildDial() {
  const ring = $("dial-ring");
  if (!ring) return;
  let svg = "";
  for (let i = 0; i < BEANS.length; i++) {
    const a = (i / BEANS.length) * Math.PI * 2 - Math.PI / 2;
    const cx = 86 + 78 * Math.cos(a) + 12;
    const cy = 86 + 78 * Math.sin(a) + 12;
    const r = i % 3 === 0 ? 8 : 6;
    const fill =
      i % 3 === 0 ? "var(--color-accent-500)"
      : i % 3 === 1 ? "var(--color-accent-2-500)"
      : "var(--color-accent-300)";
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"></circle>`;
  }
  ring.innerHTML = svg;
}

// =====================================================
// 診断スタート / もう一度診断する
// =====================================================
function startQuiz() {
  currentQuestion = 0;
  picks = [];
  fading = false;
  $("q-body").classList.remove("fading");
  showScreen("screen-quiz");
  renderQuestion();
}

function restart() {
  startQuiz();
}

// =====================================================
// 質問を表示する
// =====================================================
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  $("question-text").textContent = q.text;
  $("choice-a").textContent = q.choices[0].label;
  $("choice-b").textContent = q.choices[1].label;

  // 番号（01 / 05）と右側のヒント
  $("q-num").textContent = String(currentQuestion + 1).padStart(2, "0");
  $("q-hint").textContent =
    currentQuestion === 0
      ? "直感でどうぞ"
      : "あと" + (QUESTIONS.length - currentQuestion) + "問";

  // カップ型の進捗（回答済みの数 ÷ 全問）
  $("cup-fill").style.height = (currentQuestion / QUESTIONS.length) * 100 + "%";

  // Q1では戻る先がないので隠す
  $("back-btn").style.visibility = currentQuestion === 0 ? "hidden" : "visible";
}

// =====================================================
// 設問の切り替え：今の設問をフェードアウト(200ms)してから
// 中身を差し替える（同じ枠のテキストを入れ替えるだけなので、
// 前の設問がDOMに二重で残らない）
// =====================================================
function swap(update) {
  if (fading) return;
  fading = true;
  const body = $("q-body");
  body.classList.add("fading");
  setTimeout(() => {
    update();
    renderQuestion();
    body.classList.remove("fading");
    fading = false;
  }, 200);
}

// =====================================================
// 回答したとき
// =====================================================
function answer(choiceIndex) {
  if (fading) return;
  picks[currentQuestion] = choiceIndex; // この設問の回答を記録
  const next = currentQuestion + 1;
  if (next < QUESTIONS.length) {
    swap(() => { currentQuestion = next; });
  } else {
    showResult();
  }
}

// =====================================================
// ひとつ前にもどる（直前の回答を取り消してから戻す）
// =====================================================
function goBack() {
  if (currentQuestion === 0 || fading) return;
  swap(() => {
    picks.pop();          // 直前の回答分を配点から除外
    currentQuestion -= 1;
  });
}

// =====================================================
// 味の10段階を「ピップ」で表示し、左から順に点灯させる
// =====================================================
function renderPips(id, value, litClass) {
  const box = $(id);
  box.innerHTML = "";
  const pips = [];
  for (let i = 0; i < 10; i++) {
    const pip = document.createElement("span");
    pip.className = "pip";
    pip.style.transitionDelay = 350 + i * 45 + "ms"; // 左から順に光らせる
    box.appendChild(pip);
    pips.push(pip);
  }
  // まず消灯状態を確定させる（reflow）→ その後クラスで点灯させると
  // transition が「グレー→色」で流れる（transition-delay で左から順に）
  void box.offsetWidth;
  pips.forEach((pip, i) => {
    if (i < value) pip.classList.add(litClass);
  });
}

// =====================================================
// 結果を表示する
// =====================================================
function showResult() {
  // picks から全豆のスコアを合算（各choiceのscore関数は変更なし）
  const scores = BEANS.map((bean) =>
    picks.reduce((sum, pick, qi) => sum + QUESTIONS[qi].choices[pick].score(bean), 0)
  );

  // スコアの高い順に並べ替え（同点はBEANSの並び順が優先）
  const ranking = BEANS
    .map((bean, i) => ({ bean, score: scores[i] }))
    .sort((a, b) => b.score - a.score);
  const winner = ranking[0].bean;
  const second = ranking[1].bean;

  const FLAVOR = {
    fruity: "華やか・フルーティー",
    roasty: "香ばしいチョコ系",
    balanced: "バランス型",
  };

  $("result-category").textContent = winner.decaf ? "デカフェ" : winner.category;
  $("result-flavor").textContent = FLAVOR[winner.flavor];
  $("result-name").textContent = winner.name;
  $("result-tagline").textContent = winner.tagline;
  $("result-origin").textContent = "原産地　" + winner.origin;
  $("result-desc").textContent = winner.desc;
  $("result-pairing").textContent = "公式おすすめの飲み方：" + winner.drink.join("、");
  $("result-price").textContent = winner.price + "　※2026年7月時点";
  $("result-link").href = winner.url;
  $("value-kire").textContent = winner.kire + "/10";
  $("value-body").textContent = winner.body + "/10";
  $("runner-up-name").textContent = second.name;

  showScreen("screen-result");

  // 味の10段階評価をピップで表示
  renderPips("pips-kire", winner.kire, "is-lit-kire");
  renderPips("pips-body", winner.body, "is-lit-body");
}

// =====================================================
// 初期化
// =====================================================
buildDial();
