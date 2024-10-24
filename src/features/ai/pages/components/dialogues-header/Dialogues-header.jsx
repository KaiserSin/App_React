import "./Dialogues-header.scss";
export const DialoguesHeader = () => {
  return (
    <header className="dialogues__header">
      <div className="dialogues__title">
        <div>
          <img src="/ai/human.png" alt="ai-icon" />
        </div>
        <span>SWIFT MART AI</span>
      </div>
      <button className="dialogues__button">Очистить диалоги</button>
    </header>
  );
};
