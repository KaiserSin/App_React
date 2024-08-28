import React from "react";
import TextButton from "@shared/components/Buttons/TextButton/TextButton";
import "./SwiftMartAIBlock.scss";
const SwiftMartAIBlock = (props) => {
  const { title, classes, children } = props;
  return (
    <div className={`ai-block ${classes?.root ? classes.root : ""}`}>
      <header className="ai-block__header">
        <div className="ai-block__label">
          <img src="/icons/swiftMartAI.svg" alt="AI icon" /> Нейросеть SwiftMart
        </div>
        <div className="ai-block__title">{title}</div>
        <TextButton className="ai-block__copy">
          <img src="/icons/copy.svg" alt="" />
          Скопировать
        </TextButton>
      </header>
      <div className="ai-block__body">{children}</div>
      <div className="ai-block__actions">
        <TextButton>
          <img src="/icons/dialog.svg" alt="" />
          Открыть диалог с GPT
        </TextButton>
        <TextButton>
          <img src="/icons/retry.svg" alt="" />
          Сгенерировать заново
        </TextButton>
      </div>
    </div>
  );
};

export default SwiftMartAIBlock;
