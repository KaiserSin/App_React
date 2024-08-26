import React from 'react';
import './ArtificialText.scss';

const ArtificialText = () => {
  return (
    <div className="artificial-text">
      <div className="artificial-text__header">
        <span className="artificial-text__network">Нейросеть SwiftMart</span>
        <h2 className="artificial-text__title">Сводка от GPT</h2>
        <button className="artificial-text__copy">Скопировать</button>
      </div>
      <div className="artificial-text__body">
        <p>
          Компьютерная мышь в корзине, на первый взгляд, выглядит неплохо, но имеет ряд недостатков, например некачественный кабель, что делает её недолговечной. Предлагаю рассмотреть этот вариант: <a href="#" className="artificial-text__link">Компьютерная мышь Razer Mamba Elite</a>
        </p>
      </div>
      <div className="artificial-text__footer">
        <button className="artificial-text__button">Открыть диалог с GPT</button>
        <button className="artificial-text__button">Сгенерировать заново</button>
      </div>
    </div>
  );
};

export default ArtificialText;
