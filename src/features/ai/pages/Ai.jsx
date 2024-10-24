import "./Ai.scss";
import { AiChat } from "./components/chat/Ai-chat";
import { Dialogues } from "./components/dialogues/Dialogues";

export const AiPage = () => {
  return (
    <section className="ai-page__container">
      <Dialogues />
      <AiChat />
    </section>
  );
};
