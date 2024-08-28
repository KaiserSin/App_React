import "./Subcategory.scss";

export const Subcategory = ({ items, name }) => {
  return (
    <div className="subcategory__block">
      <h2>{name}</h2>
      {items.map((item, itemIndex) => (
        <div key={itemIndex} className="subcategory__item">
          <button>{item}</button>
        </div>
      ))}
      <button className="subcategory__button">Заказать еще</button>
    </div>
  );
};
