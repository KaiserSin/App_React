import { useState } from "react";
import "./Ai-chat.scss";
import { ChatWindow } from "../chat-window/Chat-window";
import { useInputChange } from "../../../../../hooks/useInputChange";

const items = [
  {
    from: "Alex",
    text: "Привет, подскажи качественную игровую мышку до 6 тысяч руб.",
  },
  {
    from: "Ai",
    text: "Привет! Конечно, вот несколько вариантов:",
    variants: [
      { text: "Logitech G102 - 2132 руб.", seller: "(продавец)" },
      { text: "SteelSeries Rival 5 - 4652 руб.", seller: "(продавец)" },
      { text: "Razer Basilisk V3 - 5100 руб.", seller: "(продавец)" },
    ],
  },
];

export const AiChat = () => {
  const [messages, setMessages] = useState(items);
  const input = useInputChange("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value) {
      setMessages((prev) => [...prev, { text: input.value, from: "Alex" }]);
      input.reset();
    }
  };

  return (
    <div className="chat">
      <ChatWindow messages={messages} />
      <form className="chat__form" onSubmit={handleSubmit}>
        <button>
          <img src="/ai/add.png" alt="add button" />
        </button>
        <input
          type="text"
          className="chat__input"
          placeholder="Спросите что вас интересует"
          value={input.value}
          onChange={input.onChange}
        />
        <button type="submit">
          <img src="/ai/send.png" alt="send button" />
        </button>
      </form>
    </div>
  );
};
