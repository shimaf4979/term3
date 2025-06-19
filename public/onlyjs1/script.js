// 定数とカウンターの状態を管理
const ORIGINAL_REMAIN_COUNT = 10;
let count = 0;

// DOM要素の取得
const elements = {
  count: document.getElementById("count"),
  doubleCount: document.getElementById("double-count"),
  remainCount: document.getElementById("remain-count"),
};

// 描画処理
const render = () => {
  elements.doubleCount.textContent = count * 2;
  elements.count.textContent = count;
  elements.remainCount.textContent = ORIGINAL_REMAIN_COUNT - count;
};

// ボタンクリック時の処理
const handleButtonClick = () => {
  if (count >= ORIGINAL_REMAIN_COUNT) return;
  count += 1;
  render();
};

// すべてのボタンにクリックイベントを追加
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
