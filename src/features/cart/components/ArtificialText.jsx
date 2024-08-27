import React from 'react';
import './ArtificialText.scss';
import artificialEmblem from '@assets/images/cartImages/artificialEmblem.svg';
import copy from '@assets/images/cartImages/copy.svg';
import message from '@assets/images/cartImages/message.svg';
import update from '@assets/images/cartImages/update.svg';

const ArtificialText = () => {
  return (
    <div className="gpt-summary">
      <div className="gpt-summary__header">
        <div className="gpt-summary__header-left">
          <img src={artificialEmblem} alt="SwiftMart Icon" className="gpt-summary__icon" />
          <span className="gpt-summary__header-text">Нейросеть SwiftMart</span>
        </div>
        <div className="gpt-summary__header-right">
          <img src={copy} alt="Copy Icon" className="gpt-summary__icon" />
          <span className="gpt-summary__header-copy-text">Скопировать</span>
        </div>
      </div>
      <h1 className="gpt-summary__title">Сводка от GPT</h1>
      <p className="gpt-summary__description">
        Компьютерная мышь в корзине, на первый взгляд, выглядит неплохо, но имеет ряд недостатков, например некачественный кабель, что делает её недолговечной. Предлагаю рассмотреть этот вариант: 
        <a href="#" className="gpt-summary__link">Компьютерная мышь Razer Mamba Elite</a>
      </p>
      <div className="gpt-summary__footer">
        <div className="gpt-summary__footer-left">
          <img src={message} alt="Message Icon" className="gpt-summary__icon" />
          <span className="gpt-summary__footer-text">Открыть диалог с GPT</span>
        </div>
        <div className="gpt-summary__footer-right">
          <img src={update} alt="Refresh Icon" className="gpt-summary__icon" />
          <span className="gpt-summary__footer-text">Сгенерировать заново</span>
        </div>
      </div>
    </div>
  );
};

export default ArtificialText;
