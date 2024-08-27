import React from 'react';
import cartItems from '@features/cart/constants/CartItems.json';
import greenbox from '@assets/images/cartImages/greenbox.svg';
import redtrashbin from '@assets/images/cartImages/redtrashbin.svg';
import crown from '@assets/images/cartImages/crown.svg'; 
import plane from '@assets/images/cartImages/plane.svg';
import razer from '@assets/images/cartImages/razer.svg';
import sellout from '@assets/images/cartImages/sellout.svg';
import heart from '@assets/images/cartImages/heart.svg';
import lightning from '@assets/images/cartImages/lightning.svg';
import search from '@assets/images/cartImages/search.svg';
import refresh from '@assets/images/cartImages/refresh.svg';
import './CartItems.scss';

const CartItems = () => {
  return (
    <>
    <div className="cart-items">
      <div className="cart-items__column">
        {cartItems.map(item => (
          <div 
            key={item.id} 
            className={`cart-items__product ${item.status === 'Закончился' ? 'cart-items__product--out-of-stock' : ''}`}
          >

              <div className="cart-items__controls">
                <img src={greenbox} alt="Select Icon" className="cart-items__icon" />
                <img src={redtrashbin} alt="Delete Icon" className="cart-items__icon" />
              </div>
            
              
              <img src={item.image_url} alt={item.name} className="cart-items__image" />

              <div className='third-column'>
                  <div className="cart-items__details">
                          <div className="cart-items__info">
                            <h3 className="cart-items__name">{item.name}</h3>
                            <p className="cart-items__subtitle">Топ пингвин</p>
                              <div className='brend-sellout'>
                              {item.brend && <img src={razer} alt="Razer Logo" className="cart-items__brend" />}
                              {item.sellout && <img src={sellout} alt="Sellout Icon" className="cart-items__sellout" />}
                              </div>
                          </div>
                  </div>
                    <div className="cart-items__actions">
                          <img src={heart} alt="Heart Icon" className="cart-items__action-icon" />
                          <div>
                          <img src={lightning} alt="Heart Icon" className="cart-items__action-icon" />
                          <button className="cart-items__order-button">Заказать</button>
                          </div>
                          <p className={`cart-items__status ${item.status === 'Осталось меньше' ? 'cart-items__status--red' : ''}`}>
                          {item.status}
                          </p>
                    </div> 
              </div>



                <div className='fourth-column'>
                        <div className="cart-items__pricing">
                          <p 
                            className={`cart-items__price ${item.sellout ? 'cart-items__price--red' : 'cart-items__price--green'}`}
                          >
                            {item.price}
                          </p>
                        </div>

                          <div className="cart-items__quantity-rating">
                            <button className="cart-items__quantity-btn"> - </button>
                            <span>{item.quantity}</span>
                            <button className="cart-items__quantity-btn"> + </button>
                          </div>

                          <div>
                            <span className="cart-items__rating">⭐ {item.rating}</span>
                          </div>
                </div>
          </div>
        ))}

        <div className='commodity-info'>
          
          <div>
            <img src={crown} alt="Select Icon" className="cart-items__icon" />
            <span className='commodity-text'>Начислим 150 бонусов магазина</span>
          </div>

           <div>
            <img src={plane} alt="Delete Icon" className="cart-items__icon" />
            <span className='commodity-text'>Товар из-за рубежа</span>
           </div> 
        </div>


        <div className='commodity-info'>

        <div>
          <img src={search} alt="Select Icon" className="cart-items__icon1" />
          <span className='commodity-text'>Найти такой же / аналогичный</span>
        </div>

        <div> 
          <img src={refresh} alt="Delete Icon" className="cart-items__icon" />
          <span className='commodity-text'>Заменить автоматически</span>
        </div>  

        </div>

      </div>
      
    </div>

  </>
  );
};

export default CartItems;


              {/* {(item.bonus || item.abroad) && (
                <div className="cart-items__extra-info">
                  {item.bonus && (
                    <div className="cart-items__bonus">
                      <img src={crown} alt="Bonus Icon" />
                      <span>Начислим 150 бонусов магазина</span>
                    </div>
                  )}
                  {item.abroad && (
                    <div className="cart-items__abroad">
                      <img src={plane} alt="Abroad Icon" />
                      <span>Товар из-за рубежа</span>
                    </div>
                  )}
                </div>
              )} */}

