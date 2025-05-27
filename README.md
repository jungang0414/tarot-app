# 塔羅牌 APP

Vite + React + TypeScript
Github Copilot

## 第一階段:核心概念與功能定義

「最小可行性產品 (MVP, Minimum Viable Product)」

1. 目標使用者：

   - 初學者(側重於引導與易用性)

2. 核心功能：

   - 牌組數據：包含 78 張塔羅牌（22 張大阿爾克那、56 張小阿爾克那）的資料，每張牌至少要有：名稱、圖片、正位牌義、逆位牌義。
   - 選擇牌陣：
     - 單張牌占卜 (每日指引)
     - 三張牌陣 (過去、現在、未來)
     - 時間之流 (過去、現在、未來)
     - 聖三角 (身、心、靈)
   - 洗牌與抽牌：互動式的洗牌動畫，讓使用者從牌堆中選取指定數量的牌。
   - 展示結果：將抽出的牌依據牌陣的位置擺放好，並顯示每張牌的圖片
   - 查看牌義：使用者點擊單張牌後，可以清楚看到該牌的正位或逆位（根據抽出時的狀態決定）以及對應的詳細解釋。

3. 進階功能 (未來可以擴充的)
   - 使用者系統： 讓使用者可以註冊登入。
   - 占卜日誌： 儲存每一次的占卜紀錄（問題、牌陣、抽出的牌、當時的想法）。
   - 多種牌組： 不只傳統的偉特塔羅，未來可以擴充其他風格的牌組。
   - 自訂牌陣： 讓高階使用者可以自創牌陣。
   - 每日一牌推送通知。
   - 更華麗的動畫效果。

## 第二階段：技術架構與組件設計

1. 專案初始化：

   - 使用 Vite + React 來建立專案
   - `npm create vite@latest tarot-app -- --template react-ts`

2. 資料結構設計： - 建立物件陣列`cards.json`存放卡牌資料 - 結構可能如以下範例:`{
  "id": 0,
  "name": "愚者 (The Fool)",
  "name_en": "The Fool",
  "image": "images/maj00.jpg",
  "type": "major", // 'major' 或 'minor'
  "meaning": {
    "upright": "開始、天真、自由、無限的可能性...",
    "reversed": "魯莽、冒險、不負責任、天真過頭..."
  },
  "keywords": ["開始", "純真", "流浪"]
}`

3. 組件 (Component) 拆解:
   - App.tsx: 整個應用的根組件，負責管理整體的路由或頁面切換。
   - screens/ 或 pages/ (資料夾)：存放主要的頁面。
     - WelcomeScreen.tsx: 歡迎頁面，包含一個「開始占卜」的按鈕。
     - SpreadSelectionScreen.tsx: 讓使用者選擇牌陣的頁面。
     - ReadingScreen.tsx: 占卜主畫面，這是最複雜的頁面。它會包含洗牌、抽牌、展示牌陣的邏輯。
     - ResultScreen.tsx: 顯示最終占卜結果與所有牌義的頁面。
   - components/ (資料夾)：存放可複用的 UI 零件。
     - TarotCard.tsx: 非常核心的組件。用來顯示一張塔羅牌。它可以接收 props (如卡牌資料、是否翻開、是否逆位) 來決定顯示正面還是背面、是否上下顛倒。
     - CardSpread.tsx: 用於佈局抽出的牌，根據不同的牌陣（如聖三角、時間之流）排列 TarotCard 組件。
     - InterpretationModal.tsx: 當使用者點擊一張牌時，彈出一個視窗顯示詳細牌義。
     - Button.tsx: 統一風格的按鈕。

## 第三階段：狀態管理與核心邏輯 (App 的大腦)

1. 狀態 (State) 管理：
   - 哪些資訊需要被追蹤？
     - currentScreen: 當前在哪個頁面 (welcome, spread_selection, reading, result)。
     - selectedSpread: 使用者選擇了哪個牌陣。
     - deck: 當前的牌組狀態（例如，洗牌後的順序）。
     - drawnCards: 使用者抽出的牌的陣列。
     - isShuffling: 是否正在顯示洗牌動畫。
     - currentStep: 在 ReadingScreen 中的步驟，例如 'shuffling', 'drawing', 'revealing'。
   - 用什麼工具管理？
     - 初期： 對於這個規模的 App，React 內建的 useState, useReducer, useContext 已經完全足夠。可以建立一個 ReadingContext 來跨組件共享占卜相關的狀態 (如 drawnCards)，避免 props-drilling (屬性逐層傳遞)。
     - 未來擴充： 如果功能變得非常複雜（例如加入使用者系統、日誌），可以考慮引入 Zustand 或 Redux Toolkit。但初期絕對沒必要。
2. 核心邏輯演算法：
   - 洗牌 (Shuffle)： 這是核心演算法。當使用者點擊洗牌時，你需要將儲存 78 張牌的陣列進行亂序。最經典的演算法是 Fisher-Yates Shuffle (費雪-耶茲洗牌演算法)。
   - 抽牌 (Draw)： 從洗好的牌組陣列中，依序取出（例如用 array.slice()）牌陣所需的牌數。
   - 決定正逆位： 在洗牌或抽牌的過程中，隨機為每一張牌決定是正位還是逆位（例如，產生一個 0 或 1 的隨機數）。

## 第四階段：使用者流程與體驗 (UX/UI)

1. 使用者流程 (User Flow)：
   - 開啟 App -> 看到歡迎畫面 -> 點擊「開始占卜」-> 進入選擇牌陣頁面 -> 選擇「時間之流」牌陣 -> 進入占卜主畫面 -> 畫面提示「請專心默念你的問題，然後點擊洗牌」-> 使用者點擊，看到洗牌動畫 -> 動畫結束，牌堆呈現在畫面上 -> 畫面提示「請抽出 3 張牌」 -> 使用者點擊牌堆 3 次 -> 抽出的牌被放置到牌陣對應的位置（背面朝上） -> 所有牌抽完後，牌自動（或由使用者點擊）翻開，並顯示正逆位 -> 使用者可以點擊任一張牌，查看詳細牌義。
2. 視覺與動畫： - 資源： 你需要準備塔羅牌的圖片資源。Rider-Waite-Smith (偉特塔羅) 牌組的 1909 年版本已經進入公有領域，是很好的免費資源。 - 動畫： 簡單的 CSS transition 和 transform 就能做出很好的效果。
   卡牌翻開：transform: rotateY(180deg)
   卡牌飛入牌陣：position + transform: translate()
   淡入淡出：opacity
