import React from "react";

import Label from "@shared/components/Label/Label";
import { Link } from "react-router-dom";
import "./DeliveryBlock.scss";

const DeliveryBlock = (props) => {
  const { classes } = props;
  return (
    <div className={`delivery-block ${classes?.root ? classes.root : ""}`}>
      <div className="delivery-block__item">
        <div className="delivery-block__inner-item">
          <div className="delivery-block__date">25 августа</div> ·{" "}
          <div className="delivery-block__method">курьером</div> ·<div className="delivery-block__cost">0р</div>
        </div>
        <div className="delivery-block__inner-item">
          <div className="delivery-block__date">26 августа</div> ·{" "}
          <div className="delivery-block__method">в пункт выдачи</div> ·<div className="delivery-block__cost">0р</div>
        </div>
      </div>
      <div className="delivery-block__item">
        <div className="delivery-block__inner-item">
          <div className="delivery-block__date">сегодня</div>
          <span>·</span>
          <div className="delivery-block__method">курьером supreme</div>
          <span>·</span>
          <div className="delivery-block__cost">
            <Link to={"#"}>
              <Label className="delivery-block__label">
                <img src="/icons/crown.svg" alt="" />
                Оформить премиум
              </Label>
            </Link>
          </div>
        </div>
        <div className="delivery-block__inner-item">
          <div className="delivery-block__date">за час</div>
          <span>·</span>
          <div className="delivery-block__method">SwiftMart Speedy</div>
          <span>·</span>
          <div className="delivery-block__cost">350р</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBlock;
