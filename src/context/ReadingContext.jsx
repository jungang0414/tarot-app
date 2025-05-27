// 狀態 (State) 管理

// currentScreen: 當前在哪個頁面 (welcome, spread_selection, reading, result)。
// selectedSpread: 使用者選擇了哪個牌陣。
// deck: 當前的牌組狀態（例如，洗牌後的順序）。
// drawnCards: 使用者抽出的牌的陣列。
// isShuffling: 是否正在顯示洗牌動畫。
// currentStep: 在 ReadingScreen 中的步驟，例如 'shuffling', 'drawing', 'revealing'。

// 核心邏輯演算法

// 洗牌 (Shuffle)： Fisher-Yates Shuffle (費雪-耶茲洗牌演算法)
// 抽牌 (Draw)：從洗好的牌組陣列中，依序取出（例如用 array.slice()）牌陣所需的牌數。
// 決定正逆位： 在洗牌或抽牌的過程中，隨機為每一張牌決定是正位還是逆位（例如，產生一個 0 或 1 的隨機數）。
