import React from "react";
import { Link } from "react-router-dom";

import Button from "../Buttons/Button/Button";
import "./InstallmentPlan.scss";

const InstallmentPlan = (props) => {
  const { to, classes } = props;
  return (
    <Link to={to} className={`installment-plan ${classes?.root ? classes.root : ""}`}>
      <Button color="yellow" className="installment-plan__button">
        Рассрочка
      </Button>
      <div className="installment-plan-text">
        <div className="installment-plan-text__large">Без переплат</div>
        <div className="installment-plan-text__small">На льготный период</div>
      </div>
      <div className="installment-plan__arrow"></div>
    </Link>
  );
};

export default InstallmentPlan;
