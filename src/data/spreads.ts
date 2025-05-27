// 定義排陣資料結構

// 定義牌陣中單一位置的結構
export interface SpreadPosition {
  name: string;
  description: string;
}

// 定義整個牌陣的結構
export interface Spread {
  name: "單張牌占卜" | "時間之流"; // 使用字串常數，方便類型檢查
  cardsToDraw: number;
  positions: SpreadPosition[];
}

// 牌陣資料陣列
export const spreads: Spread[] = [
  {
    name: "單張牌占卜",
    cardsToDraw: 1,
    positions: [
      { name: "核心指引", description: "代表你目前狀況的核心或整體的能量。" }
    ]
  },
  {
    name: "時間之流",
    cardsToDraw: 3,
    positions: [
      { name: "過去", description: "影響你目前狀況的過去事件或能量。" },
      { name: "現在", description: "你目前的處境、挑戰或心態。" },
      { name: "未來", description: "此狀況可能發展的方向或潛在結果。" }
    ]
  }
  // 未來可以在這裡輕鬆加入更多牌陣，例如「聖三角」、「關係牌陣」等
];