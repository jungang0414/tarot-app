import React from 'react';
import './TarotCard.css';
import type { CardData } from '../../data/cards';

interface TarotCardProps {
  cardData?: CardData;
  isFlipped: boolean;
  isReversed: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({ cardData, isFlipped, isReversed }) => {
  // 卡片背面的圖片
  const cardBackImage = '/card-back.jpg'; // 請確保此路徑正確指向您的卡片背面圖片

  return (
    <div className={`tarot-card ${isFlipped ? 'flipped' : ''} ${isReversed ? 'reversed' : ''}`}>
      <div className="card-inner">
        <div className="card-back">
          <img src={cardBackImage} alt="卡片背面" />
        </div>
        <div className="card-front">
          {cardData ? (
            <img 
              src={cardData.image} 
              alt={cardData.name} 
            />
          ) : (
            <div className="placeholder-card">
              <span>?</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;