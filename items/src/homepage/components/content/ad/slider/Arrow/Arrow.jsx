import "./Arrow.scss";
export const Arrow = ({ className, children }) => {
  return (
    <div className={`arrow ${className}`}>
      <div className="arrow__icon">{children}</div>
    </div>
  );
};
