import React, { useState } from 'react';
import './ReadingScreen.css';
import { majorArcana } from '../../data/cards';
import type { CardData } from '../../data/cards';
import { spreads } from '../../data/spreads';
import type { Spread, SpreadPosition } from '../../data/spreads';
import TarotCard from '../../components/TarotCard/TarotCard';

// 定義抽出的牌的結構，包含牌的資料、是否逆位以及其在牌陣中的位置
interface DrawnCard {
  card: CardData;
  isReversed: boolean;
  position: SpreadPosition;
}

// 定義遊戲流程的各個階段
type GameState = 'selecting_spread' | 'shuffling' | 'drawing' | 'reading';

const ReadingScreen: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('selecting_spread');
  const [selectedSpread, setSelectedSpread] = useState<Spread | null>(null);
  const [deck, setDeck] = useState<CardData[]>([]);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [areCardsFlipped, setAreCardsFlipped] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // 新增一個陣列來追蹤哪些卡片已被翻開
  const [flippedCardIndices, setFlippedCardIndices] = useState<number[]>([]);

  // 演算法：Fisher-Yates 洗牌
  const shuffleDeck = () => {
    setIsShuffling(true);
    
    // 視覺化洗牌效果
    setTimeout(() => {
      const deckToShuffle = [...majorArcana]; // 創建一個新的牌組副本
      for (let i = deckToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckToShuffle[i], deckToShuffle[j]] = [deckToShuffle[j], deckToShuffle[i]];
      }
      setDeck(deckToShuffle);
      setIsShuffling(false);
      setGameState('drawing');
    }, 1500);
  };

  const handleSelectSpread = (spread: Spread) => {
    setSelectedSpread(spread);
    setGameState('shuffling');
  };

  const handleDrawCard = () => {
    if (!selectedSpread || deck.length === 0 || drawnCards.length >= selectedSpread.cardsToDraw) {
      return;
    }

    const newDeck = [...deck];
    const drawnCardData = newDeck.pop()!; // 從牌堆頂抽一張牌
    const isReversed = Math.random() < 0.5; // 50% 機率逆位
    const position = selectedSpread.positions[drawnCards.length];

    setDeck(newDeck);
    setDrawnCards([...drawnCards, { card: drawnCardData, isReversed, position }]);
  };

    // 新增函數處理單張卡片的翻開
  const handleCardClick = (index: number) => {
    if (gameState === 'reading' && !areCardsFlipped) {
      // 如果還沒全部翻開，則將此卡片加入已翻開陣列
      if (!flippedCardIndices.includes(index)) {
        setFlippedCardIndices([...flippedCardIndices, index]);
      }
    }
  };
  
  // 翻開所有牌的處理函數
  const handleRevealAllCards = () => {
    setAreCardsFlipped(true);
    // 翻開所有牌時，清空單張翻牌的陣列，因為現在全部都翻開了
    setFlippedCardIndices([]);
  };

  const handleReset = () => {
    setGameState('selecting_spread');
    setSelectedSpread(null);
    setDeck([]);
    setDrawnCards([]);
    setAreCardsFlipped(false);
    setFlippedCardIndices([]); // 重置已翻開卡片
  };
  
  // 獲取適合當前牌陣的佈局類名
  const getSpreadLayoutClassName = () => {
    if (!selectedSpread) return '';
    
    switch (selectedSpread.name) {
      case "單張牌占卜":
        return 'single-card-spread';
      case "時間之流":
        return 'three-card-spread';
      default:
        return '';
    }
  };
  
  // 渲染 UI 的函式
  const renderContent = () => {
    switch (gameState) {
      case 'selecting_spread':
        return (
          <div className="spread-selection">
            <h2>請選擇一個牌陣</h2>
            <div className="spreads-grid">
              {spreads.map(s => (
                <div 
                  key={s.name} 
                  className="spread-card" 
                  onClick={() => handleSelectSpread(s)}
                >
                  <h3>{s.name}</h3>
                  <div className="spread-info">
                    <span className="card-count">{s.cardsToDraw}張牌</span>
                    <p className="spread-desc">{s.positions.map(p => p.name).join('、')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shuffling':
        return (
          <div className="shuffling-area">
            <div className="prompt-container">
              <h3>請專注於你的問題</h3>
              <p>冥想你想尋求指引的事項，然後點擊洗牌</p>
            </div>
            <button 
              className={`shuffle-button ${isShuffling ? 'shuffling' : ''}`} 
              onClick={shuffleDeck}
              disabled={isShuffling}
            >
              {isShuffling ? '洗牌中...' : '洗牌'}
            </button>
          </div>
        );

      case 'drawing':
        const cardsLeftToDraw = selectedSpread!.cardsToDraw - drawnCards.length;
        return (
          <div className="drawing-area">
            <div className="drawing-header">
              <h3>{selectedSpread?.name} 牌陣</h3>
              {cardsLeftToDraw > 0 && (
                <div className="instructions">
                  <p>請抽出 <span className="highlight">{cardsLeftToDraw}</span> 張牌</p>
                </div>
              )}
            </div>
            
            <div className="drawing-container">
              {cardsLeftToDraw > 0 ? (
                <div className="deck-section">
                  <div className="deck-pile" onClick={handleDrawCard}>
                    <TarotCard isFlipped={false} isReversed={false} />
                    <div className="deck-count">{deck.length}</div>
                  </div>
                  <p className="tap-instruction">點擊牌堆抽牌</p>
                </div>
              ) : (
                <div className="completion-message">
                  <p>牌已抽完，請點擊下方的按鈕來揭示結果。</p>
                  <button className="action-button" onClick={() => setGameState('reading')}>查看牌陣</button>
                </div>
              )}
              
              {/* 顯示已抽出的牌的背面 */}
              <div className="drawn-cards-preview">
                {drawnCards.map((drawnCard, index) => (
                  <div key={index} className="card-placeholder">
                    <div className="position-label">{drawnCard.position.name}</div>
                    <TarotCard 
                      isFlipped={false} 
                      isReversed={false}
                      // 不要傳遞 cardData，讓它在背面時顯示
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

  case 'reading':
    const spreadLayoutClass = getSpreadLayoutClassName();
    
    // 檢查是否所有卡片已經被單獨翻開
    const allCardsIndividuallyFlipped = selectedSpread && 
      flippedCardIndices.length === selectedSpread.cardsToDraw;

    return (
      <div className="reading-area">
        <h2>{selectedSpread?.name}</h2>
        <div className={`spread-layout ${spreadLayoutClass}`}>
          {drawnCards.map(({ card, isReversed, position }, index) => {
            // 判斷此卡片是否應該被翻開：全部翻開或該卡已被單獨翻開
            const isCardFlipped = areCardsFlipped || flippedCardIndices.includes(index);
            
            return (
              <div key={index} className={`spread-position position-${index + 1}`}>
                <div className="position-name">{position.name}</div>
                <div className="card-and-interpretation">
                  <div 
                    className="tarot-card-container" 
                    onClick={() => handleCardClick(index)}
                  >
                    <TarotCard 
                      cardData={card} 
                      isFlipped={isCardFlipped} 
                      isReversed={isReversed}
                    />
                    {!isCardFlipped && (
                      <div className="click-to-flip">點擊翻牌</div>
                    )}
                  </div>
                  {isCardFlipped && (
                    <div className="interpretation">
                      <h4>{card.name} {isReversed ? '(逆位)' : '(正位)'}</h4>
                      <p className="position-desc">
                        <span className="position-title">{position.name}:</span> {position.description}
                      </p>
                      <p className="card-meaning">{isReversed ? card.meaning.reversed : card.meaning.upright}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="action-buttons">
          {/* 只有當「不是所有卡片都已翻開」且「不是所有卡片都已單獨翻開」時才顯示此按鈕 */}
          {!areCardsFlipped && !allCardsIndividuallyFlipped && (
            <button className="action-button reveal-button" onClick={handleRevealAllCards}>
              翻開所有牌
            </button>
          )}
          <button className="action-button reset-button" onClick={handleReset}>重新占卜</button>
        </div>
      </div>
    )}};

  return (
    <div className="reading-screen">
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default ReadingScreen;