import foolImage from '../assets/Major/Tarot_0_Fool.jpg';
import magicianImage from '../assets/Major/Tarot_01_Magician.jpg';
import highPriestessImage from '../assets/Major/Tarot_02_High_Priestess.jpg';
import empressImage from '../assets/Major/Tarot_03_Empress.jpg';
import emperorImage from '../assets/Major/Tarot_04_Emperor.jpg';
import hierophantImage from '../assets/Major/Tarot_05_Hierophant.jpg';
import loversImage from '../assets/Major/Tarot_06_Lovers.jpg';
import chariotImage from '../assets/Major/Tarot_07_Chariot.jpg';
import strengthImage from '../assets/Major/Tarot_08_Strength.jpg';
import hermitImage from '../assets/Major/Tarot_09_Hermit.jpg';
import wheelOfFortuneImage from '../assets/Major/Tarot_10_Wheel_of_Fortune.jpg';
import justiceImage from '../assets/Major/Tarot_11_Justice.jpg';
import hangedManImage from '../assets/Major/Tarot_12_Hanged_Man.jpg';
import deathImage from '../assets/Major/Tarot_13_Death.jpg';
import temperanceImage from '../assets/Major/Tarot_14_Temperance.jpg';
import devilImage from '../assets/Major/Tarot_15_Devil.jpg';
import towerImage from '../assets/Major/Tarot_16_Tower.jpg';
import starImage from '../assets/Major/Tarot_17_Star.jpg';
import moonImage from '../assets/Major/Tarot_18_Moon.jpg';
import sunImage from '../assets/Major/Tarot_19_Sun.jpg';
import judgementImage from '../assets/Major/Tarot_20_Judgement.jpg';
import worldImage from '../assets/Major/Tarot_21_World.jpg';


// 定義單張卡牌的資料結構
export interface CardData {
    id: number;
    name: string;
    name_en: string;
    type: string;
    image: string; // This will now hold the imported image module
    meaning: {
        upright: string;
        reversed: string;
    };
    keywords: object;
}

// 導出卡牌資料陣列

export const majorArcana: CardData[] = [
  {
    "id": 0,
    "name": "愚者 (The Fool)",
    "name_en": "The Fool",
    "image": foolImage,
    "type": "major",
    "meaning": {
      "upright": "開始、天真、自由、無限的可能性",
      "reversed": "魯莽、冒險、不負責任、天真過頭"
    },
    "keywords": ["開始", "純真", "流浪"]
  },
  {
    "id": 1,
    "name": "魔術師 (The Magician)",
    "name_en": "The Magician",
    "image": magicianImage,
    "type": "major",
    "meaning": {
      "upright": "創造力、意志力、實現潛能",
      "reversed": "欺騙、操縱、潛力浪費"
    },
    "keywords": ["創造", "專注", "潛能"]
  },
  {
    "id": 2,
    "name": "女祭司 (The High Priestess)",
    "name_en": "The High Priestess",
    "image": highPriestessImage,
    "type": "major",
    "meaning": {
      "upright": "直覺、潛意識、神秘",
      "reversed": "秘密揭露、表面化、不信任直覺"
    },
    "keywords": ["直覺", "神秘", "內在智慧"]
  },
  {
    "id": 3,
    "name": "皇后 (The Empress)",
    "name_en": "The Empress",
    "image": empressImage,
    "type": "major",
    "meaning": {
      "upright": "豐饒、母性、創造",
      "reversed": "依賴、情感過度、創造力阻塞"
    },
    "keywords": ["豐盛", "滋養", "母性"]
  },
  {
    "id": 4,
    "name": "皇帝 (The Emperor)",
    "name_en": "The Emperor",
    "image": emperorImage,
    "type": "major",
    "meaning": {
      "upright": "穩定、權威、結構",
      "reversed": "專制、控制欲、僵化"
    },
    "keywords": ["權力", "保護", "規則"]
  },
  {
    "id": 5,
    "name": "教皇 (The Hierophant)",
    "name_en": "The Hierophant",
    "image": hierophantImage,
    "type": "major",
    "meaning": {
      "upright": "傳統、精神導師、信仰",
      "reversed": "叛逆、非傳統、質疑信仰"
    },
    "keywords": ["信仰", "學習", "儀式"]
  },
  {
    "id": 6,
    "name": "戀人 (The Lovers)",
    "name_en": "The Lovers",
    "image": loversImage,
    "type": "major",
    "meaning": {
      "upright": "愛情、選擇、和諧",
      "reversed": "不合、失衡、困難選擇"
    },
    "keywords": ["愛", "聯結", "選擇"]
  },
  {
    "id": 7,
    "name": "戰車 (The Chariot)",
    "name_en": "The Chariot",
    "image": chariotImage,
    "type": "major",
    "meaning": {
      "upright": "勝利、意志力、掌控",
      "reversed": "失控、障礙、意志薄弱"
    },
    "keywords": ["決心", "掌握", "行動"]
  },
  {
    "id": 8,
    "name": "力量 (Strength)",
    "name_en": "Strength",
    "image": strengthImage,
    "type": "major",
    "meaning": {
      "upright": "勇氣、內在力量、耐心",
      "reversed": "脆弱、恐懼、控制欲"
    },
    "keywords": ["勇氣", "自律", "慈悲"]
  },
  {
    "id": 9,
    "name": "隱士 (The Hermit)",
    "name_en": "The Hermit",
    "image": hermitImage,
    "type": "major",
    "meaning": {
      "upright": "內省、孤獨、尋求真理",
      "reversed": "孤立、逃避、失去方向"
    },
    "keywords": ["智慧", "沉思", "尋找"]
  },
  {
    "id": 10,
    "name": "命運之輪 (Wheel of Fortune)",
    "name_en": "Wheel of Fortune",
    "image": wheelOfFortuneImage,
    "type": "major",
    "meaning": {
      "upright": "命運、變化、週期",
      "reversed": "倒霉、抗拒改變、延遲"
    },
    "keywords": ["命運", "機會", "轉變"]
  },
  {
    "id": 11,
    "name": "正義 (Justice)",
    "name_en": "Justice",
    "image": justiceImage,
    "type": "major",
    "meaning": {
      "upright": "公平、真理、因果",
      "reversed": "不公、不誠實、逃避責任"
    },
    "keywords": ["平衡", "誠實", "法律"]
  },
  {
    "id": 12,
    "name": "倒吊人 (The Hanged Man)",
    "name_en": "The Hanged Man",
    "image": hangedManImage,
    "type": "major",
    "meaning": {
      "upright": "犧牲、等待、轉變視角",
      "reversed": "拖延、固執、無法放下"
    },
    "keywords": ["放下", "轉變", "靜止"]
  },
  {
    "id": 13,
    "name": "死神 (Death)",
    "name_en": "Death",
    "image": deathImage,
    "type": "major",
    "meaning": {
      "upright": "結束、轉變、重生",
      "reversed": "抗拒改變、停滯、無法放下過去"
    },
    "keywords": ["轉化", "結束", "重生"]
  },
  {
    "id": 14,
    "name": "節制 (Temperance)",
    "name_en": "Temperance",
    "image": temperanceImage,
    "type": "major",
    "meaning": {
      "upright": "平衡、節制、融合",
      "reversed": "極端、失衡、不協調"
    },
    "keywords": ["平和", "中庸", "協調"]
  },
  {
    "id": 15,
    "name": "惡魔 (The Devil)",
    "name_en": "The Devil",
    "image": devilImage,
    "type": "major",
    "meaning": {
      "upright": "束縛、誘惑、成癮",
      "reversed": "解放、覺醒、擺脫壓迫"
    },
    "keywords": ["執著", "誘惑", "控制"]
  },
  {
    "id": 16,
    "name": "高塔 (The Tower)",
    "name_en": "The Tower",
    "image": towerImage,
    "type": "major",
    "meaning": {
      "upright": "突發變故、崩壞、覺醒",
      "reversed": "避免改變、災難延遲、內部崩潰"
    },
    "keywords": ["破壞", "重建", "真相揭露"]
  },
  {
    "id": 17,
    "name": "星星 (The Star)",
    "name_en": "The Star",
    "image": starImage,
    "type": "major",
    "meaning": {
      "upright": "希望、靈感、療癒",
      "reversed": "失望、缺乏信心、迷失方向"
    },
    "keywords": ["希望", "信念", "啟發"]
  },
  {
    "id": 18,
    "name": "月亮 (The Moon)",
    "name_en": "The Moon",
    "image": moonImage,
    "type": "major",
    "meaning": {
      "upright": "幻覺、直覺、潛意識",
      "reversed": "困惑解除、秘密揭露、真相出現"
    },
    "keywords": ["幻想", "感受", "潛藏"]
  },
  {
    "id": 19,
    "name": "太陽 (The Sun)",
    "name_en": "The Sun",
    "image": sunImage,
    "type": "major",
    "meaning": {
      "upright": "快樂、成功、光明",
      "reversed": "短暫快樂、自負、延遲成功"
    },
    "keywords": ["正能量", "快樂", "成長"]
  },
  {
    "id": 20,
    "name": "審判 (Judgement)",
    "name_en": "Judgement",
    "image": judgementImage,
    "type": "major",
    "meaning": {
      "upright": "覺醒、反省、重生",
      "reversed": "否認、懼怕改變、未完成的事"
    },
    "keywords": ["評估", "清算", "覺醒"]
  },
  {
    "id": 21,
    "name": "世界 (The World)",
    "name_en": "The World",
    "image": worldImage,
    "type": "major",
    "meaning": {
      "upright": "完成、整合、圓滿",
      "reversed": "延遲、未完成、缺乏結束感"
    },
    "keywords": ["成就", "圓滿", "旅行"]
  }
]