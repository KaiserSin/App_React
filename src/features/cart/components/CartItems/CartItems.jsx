import cartItems from "@api/cartItems.json";
import CartItem from "../CartItem/CartItem";

const CartItems = () => {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items__column">
          {cartItems.map((item, index) => (
            <CartItem {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItems;
