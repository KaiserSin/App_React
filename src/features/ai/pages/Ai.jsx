import "./Ai.scss";

import { Dialogues } from "../components/dialogues/Dialogues";
import { AiChat } from "../components/chat/Ai-chat";
import { useEffect } from "react";

export const AiPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="ai-page__container">
      <Dialogues />
      <AiChat />
    </section>
  );
};
