import { DialoguesHeader } from "../dialogues-header/Dialogues-header";
import "./Dialogues.scss";

import { dialogues } from "../../../constants/dialogues-constants";
import { useState } from "react";

export const Dialogues = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="dialogues">
      <DialoguesHeader />
      <div className="dialogues__body">
        <section className="dialogues__section">
          <h2>Сегодня</h2>
          <div className="section__items">
            {dialogues.map((dialog) => {
              if (dialog.date === "Today") {
                return (
                  <div
                    key={dialog.text}
                    className={`section__item ${
                      activeId === dialog.id ? "active" : ""
                    }`}
                    onClick={() => setActiveId(dialog.id)}
                  >
                    <span>{dialog.text}</span>
                    {activeId === dialog.id ? (
                      <button>
                        <div className="button__item"></div>
                        <div className="button__item"></div>
                        <div className="button__item"></div>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section className="dialogues__section">
          <h2>Вчера</h2>
          <div className="section__items">
            {dialogues.map((dialog) => {
              if (dialog.date === "Yesterday") {
                return (
                  <div
                    className={`section__item ${
                      activeId === dialog.id ? "active" : ""
                    }`}
                    key={dialog.text}
                    onClick={() => setActiveId(dialog.id)}
                  >
                    <span>{dialog.text}</span>
                    {activeId === dialog.id ? (
                      <button>
                        <div className="button__item"></div>
                        <div className="button__item"></div>
                        <div className="button__item"></div>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                );
              }
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
