import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./Chat-window.scss";

export const ChatWindow = (props) => {
  const chatWindowRef = useRef(null);

  const scrollToBottom = () => {
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  return (
    <div className="chat-window" ref={chatWindowRef}>
      {props.messages.map((message) => {
        if (message.from === "Ai") {
          return (
            <div key={message.text} className="message ai">
              <div>
                <img width={42} src="/ai/ai-image.png" alt="ai image" />
              </div>
              <div className="message__content">
                <header className="message__header">Swift Mart AI</header>
                <div className="message__body">
                  <h2>{message.text}</h2>
                  <div className="message__variants">
                    {message.variants.map((variant) => (
                      <div key={variant.text}>
                        <span>{variant.text}</span>
                        <Link href="/catalog" className="message__link">
                          {variant.seller}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <span>Обращайтесь, если возникнут вопросы!</span>
                </div>
                <button className="message__button">
                  <img src="/ai/ai-cart.svg" alt="ai cart" width={17} />
                  <span>Добавить в корзину</span>
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div key={message.text} className="message user">
              <div className="message__content">
                <header className="message__header">
                  <span>{message.from}</span>
                </header>
                <p>{message.text}</p>
              </div>
              <img width={42} src="/ai/user-photo.png" alt="user photo" />
            </div>
          );
        }
      })}
    </div>
  );
};
