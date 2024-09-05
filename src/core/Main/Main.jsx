import "./Main.scss";
import classNames from "classnames";

const Main = ({ children, className }) => {
  return <main className={classNames("main", className)}>{children}</main>;
};

export default Main;
