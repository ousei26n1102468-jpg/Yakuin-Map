const spots = [
  {
    name: "薬院駅",
    area: "渡辺通",
    walk: "0分",
    type: "街歩き",
    filters: ["walk"],
    tags: ["集合", "西鉄", "地下鉄七隈線"],
    summary: "西鉄天神大牟田線と地下鉄七隈線の乗換駅。天神、今泉、白金、浄水通り方面へ歩き出しやすい起点です。",
    query: "薬院駅 福岡",
    route: false
  },
  {
    name: "三角市場",
    area: "渡辺通",
    walk: "3分",
    type: "街歩き",
    filters: ["walk", "night"],
    tags: ["昭和レトロ", "路地", "夜ごはん"],
    summary: "小さな飲食店が並ぶレトロな路地。駅近で、薬院らしいローカル感を短時間で味わえます。",
    query: "三角市場 福岡 薬院",
    featured: true
  },
  {
    name: "今泉エリア",
    area: "今泉",
    walk: "7分",
    type: "街歩き",
    filters: ["walk", "cafe", "night"],
    tags: ["路地", "ショップ", "カフェ"],
    summary: "カフェや小さなショップが増えている注目エリア。天神へ抜ける寄り道としても使いやすい場所です。",
    query: "今泉 福岡 カフェ"
  },
  {
    name: "警固神社・警固公園",
    area: "天神",
    walk: "14分",
    type: "観光",
    filters: ["walk"],
    tags: ["神社", "公園", "休憩"],
    summary: "天神中心部の神社と公園。買い物や今泉散策と組み合わせて、短い参拝や休憩に向いています。",
    query: "警固神社 警固公園 福岡",
    featured: true
  },
  {
    name: "浄水通り・松風園方面",
    area: "浄水通",
    walk: "18分",
    type: "観光",
    filters: ["walk", "cafe"],
    tags: ["庭園", "散策", "静か"],
    summary: "薬院大通から少し足をのばす落ち着いた散歩コース。緑や住宅街の空気を楽しみたい日に。",
    query: "松風園 福岡 浄水通り"
  },
  {
    name: "田中田式海鮮食堂 魚忠",
    area: "今泉寄り",
    walk: "7分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["海鮮", "定食", "人気店"],
    summary: "魚の定食候補として見つけやすい人気店。昼にしっかり食べたい時の候補に。",
    query: "田中田式海鮮食堂 魚忠"
  },
  {
    name: "だしいなり海木 本店",
    area: "渡辺通",
    walk: "6分",
    type: "ランチ",
    filters: ["lunch"],
    tags: ["いなり寿司", "手土産", "軽め"],
    summary: "だしを含んだいなり寿司が知られるお店。移動前の軽食や持ち帰り候補にもなります。",
    query: "だしいなり海木 本店"
  },
  {
    name: "GARAM",
    area: "渡辺通",
    walk: "7分",
    type: "ランチ",
    filters: ["lunch"],
    tags: ["カレー", "行列", "昼"],
    summary: "スパイスカレー好きに候補入りしやすい店。営業日や行列状況は事前確認がおすすめです。",
    query: "GARAM 福岡 薬院 カレー"
  },
  {
    name: "福新楼",
    area: "今泉",
    walk: "8分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["中華", "老舗", "皿うどん"],
    summary: "福岡の中華の定番候補。天神・今泉方面の散策と合わせやすい位置です。",
    query: "福新楼 福岡 今泉"
  },
  {
    name: "蕎麦おざき",
    area: "薬院大通",
    walk: "9分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["そば", "天ぷら", "落ち着く"],
    summary: "薬院大通方面のそば候補。静かな昼食や、少しゆっくりした夜にも合います。",
    query: "蕎麦おざき 福岡 薬院"
  },
  {
    name: "餃子李",
    area: "薬院",
    walk: "3分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["餃子", "中華", "駅近"],
    summary: "薬院駅近くの餃子・中華候補。昼でも夜でも、しっかり食べたい時に便利です。",
    query: "餃子李 薬院"
  },
  {
    name: "プティ ジュール",
    area: "薬院",
    walk: "4分",
    type: "カフェ",
    filters: ["cafe", "lunch"],
    tags: ["スイーツ", "パスタ", "喫茶"],
    summary: "スイーツや軽食の候補。薬院駅近くでひと休みしたい時に見ておきたいお店です。",
    query: "プティ ジュール 薬院"
  },
  {
    name: "めんくいや本店",
    area: "薬院",
    walk: "5分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["ラーメン", "豚骨", "気軽"],
    summary: "薬院でラーメンをさっと食べたい時の候補。駅周辺で動きやすい距離感です。",
    query: "めんくいや本店 薬院"
  },
  {
    name: "ピッツェリア・ダ・ガエターノ",
    area: "薬院",
    walk: "2分",
    type: "ランチ",
    filters: ["lunch", "night"],
    tags: ["ピザ", "イタリアン", "駅近"],
    summary: "薬院駅そばのイタリアン候補。ランチにも夜ごはんにも組み込みやすい立地です。",
    query: "ピッツェリア ダ ガエターノ 薬院"
  },
  {
    name: "スタンドうみねこ yoca",
    area: "今泉",
    walk: "8分",
    type: "夜",
    filters: ["night"],
    tags: ["クラフトビール", "今泉", "一杯"],
    summary: "クラフトビールを楽しめる今泉のスタンド。夕方以降のよりみち候補に。",
    query: "スタンドうみねこ yoca 今泉"
  }
];

const categoryColors = {
  "街歩き": "walk",
  "観光": "walk",
  "ランチ": "lunch",
  "カフェ": "cafe",
  "夜": "night"
};

const spotGrid = document.querySelector("#spotGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const mapFrame = document.querySelector("#googleMap");
const mapTitle = document.querySelector("#mapTitle");
const mapOpenLink = document.querySelector("#mapOpenLink");
const planList = document.querySelector("#planList");
const plannerEmpty = document.querySelector("#plannerEmpty");
const planRoute = document.querySelector("#planRoute");
const planClear = document.querySelector("#planClear");

let activeFilter = "all";
const origin = "薬院駅 福岡";
const savedStorageKey = "yakuin-guide-saved-spots";
let savedSpots = loadSavedSpots();

function mapEmbedSearchUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function mapEmbedRouteUrl(destination, waypoints = "") {
  const waypointPart = waypoints ? `${waypoints} to:` : "";
  return `https://www.google.com/maps?f=d&saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(`${waypointPart}${destination}`)}&dirflg=w&output=embed`;
}

function mapOpenSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapOpenRouteUrl(destination, waypoints = "") {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "walking"
  });

  if (waypoints) {
    params.set("waypoints", waypoints);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function loadSavedSpots() {
  try {
    const parsed = JSON.parse(localStorage.getItem(savedStorageKey) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item?.name && item?.query) : [];
  } catch {
    return [];
  }
}

function saveStoredSpots() {
  try {
    localStorage.setItem(savedStorageKey, JSON.stringify(savedSpots));
  } catch {
    // The planner still works during the session when storage is unavailable.
  }
}

function isSaved(query) {
  return savedSpots.some((spot) => spot.query === query);
}

function routeForSavedSpots() {
  if (savedSpots.length === 0) {
    return mapOpenSearchUrl(origin);
  }

  if (savedSpots.length === 1) {
    return mapOpenRouteUrl(savedSpots[0].query);
  }

  const destination = savedSpots[savedSpots.length - 1].query;
  const waypoints = savedSpots.slice(0, -1).map((spot) => spot.query).join("|");
  return mapOpenRouteUrl(destination, waypoints);
}

function renderPlanner() {
  const hasSaved = savedSpots.length > 0;
  plannerEmpty.hidden = hasSaved;
  planList.innerHTML = savedSpots
    .map(
      (spot, index) => `
        <li>
          <span>${index + 1}. ${spot.name}</span>
          <button type="button" data-remove-query="${spot.query}" aria-label="${spot.name}をリストから外す">外す</button>
        </li>
      `
    )
    .join("");
  planRoute.href = routeForSavedSpots();
  planRoute.classList.toggle("disabled", !hasSaved);
  planRoute.setAttribute("aria-disabled", hasSaved ? "false" : "true");
}

function setMap(query, label, mode = "route", waypoints = "") {
  const showRoute = mode === "route";
  mapFrame.src = showRoute ? mapEmbedRouteUrl(query, waypoints) : mapEmbedSearchUrl(query);
  mapTitle.textContent = label;
  mapOpenLink.href = showRoute ? mapOpenRouteUrl(query, waypoints) : mapOpenSearchUrl(query);
}

function iconPath(kind) {
  if (kind === "save") {
    return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/></svg>';
  }

  if (kind === "open") {
    return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>';
  }
  return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
}

function spotCard(spot, index) {
  const tags = spot.tags.map((tag) => `<span>${tag}</span>`).join("");
  const featureClass = spot.featured ? " is-featured" : "";
  const category = categoryColors[spot.type] || "walk";
  const routeMode = spot.route === false ? "search" : "route";
  const primaryText = routeMode === "route" ? "経路を見る" : "周辺を見る";
  const number = String(index + 1).padStart(2, "0");
  const saved = isSaved(spot.query);
  const savedText = saved ? "保存済み" : "保存";

  return `
    <article class="spot-card${featureClass}" data-filters="${spot.filters.join(" ")}">
      <div class="spot-number" aria-hidden="true">${number}</div>
      <div class="spot-top">
        <div>
          <p class="spot-kicker">${spot.area} / ${spot.walk}</p>
          <h3>${spot.name}</h3>
        </div>
        <span class="badge" data-kind="${category}">${spot.type}</span>
      </div>
      <div class="spot-body">
        <p>${spot.summary}</p>
        <div class="tag-row">${tags}</div>
        <div class="spot-actions">
          <button class="spot-action primary" type="button" data-map-query="${spot.query}" data-map-label="${spot.name}" data-map-mode="${routeMode}">
            ${iconPath("pin")} ${primaryText}
          </button>
          <a class="spot-action" href="${mapOpenSearchUrl(spot.query)}" target="_blank" rel="noreferrer">
            ${iconPath("open")} 詳細
          </a>
          <button class="spot-action save-action${saved ? " saved" : ""}" type="button" data-save-name="${spot.name}" data-save-query="${spot.query}" aria-pressed="${saved ? "true" : "false"}">
            ${iconPath("save")} ${savedText}
          </button>
        </div>
      </div>
    </article>
  `;
}

function matchesSearch(spot, keyword) {
  if (!keyword) return true;
  const haystack = [spot.name, spot.area, spot.type, spot.summary, ...spot.tags].join(" ").toLowerCase();
  return haystack.includes(keyword.toLowerCase());
}

function renderSpots() {
  const keyword = searchInput.value.trim();
  const visible = spots.filter((spot) => {
    const filterOk = activeFilter === "all" || spot.filters.includes(activeFilter);
    return filterOk && matchesSearch(spot, keyword);
  });

  spotGrid.innerHTML = visible.length
    ? visible.map(spotCard).join("")
    : '<div class="empty-state">条件に合うスポットがありません。キーワードを変えてみてください。</div>';
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    renderSpots();
  });
});

searchInput.addEventListener("input", renderSpots);

spotGrid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-query]");
  if (saveButton) {
    const query = saveButton.dataset.saveQuery;
    const name = saveButton.dataset.saveName;
    if (isSaved(query)) {
      savedSpots = savedSpots.filter((spot) => spot.query !== query);
    } else {
      savedSpots = [...savedSpots, { name, query }];
    }
    saveStoredSpots();
    renderPlanner();
    renderSpots();
    return;
  }

  const button = event.target.closest("[data-map-query]");
  if (!button) return;
  setMap(button.dataset.mapQuery, button.dataset.mapLabel, button.dataset.mapMode);
  document.querySelector(".map-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".route-link").forEach((button) => {
  button.addEventListener("click", () => {
    setMap(button.dataset.destination, button.dataset.label || "よりみちコース", "route", button.dataset.waypoints || "");
    document.querySelector(".map-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

planList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-query]");
  if (!removeButton) return;
  savedSpots = savedSpots.filter((spot) => spot.query !== removeButton.dataset.removeQuery);
  saveStoredSpots();
  renderPlanner();
  renderSpots();
});

planClear.addEventListener("click", () => {
  savedSpots = [];
  saveStoredSpots();
  renderPlanner();
  renderSpots();
});

planRoute.addEventListener("click", (event) => {
  if (savedSpots.length === 0) {
    event.preventDefault();
  }
});

renderPlanner();
renderSpots();
