import "./Arrow.scss";
export const Arrow = ({ className, children, onClick }) => {
  return (
    <div className={`arrow ${className}`} onClick={onClick}>
      <div className="arrow__icon">{children}</div>
    </div>
  );
};
