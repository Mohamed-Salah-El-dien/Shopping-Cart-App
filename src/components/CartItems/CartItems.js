import React from 'react';
import CartItem from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart slices/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { useSelector } from 'react-redux';

import './CartItems.css';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);

  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div className="cart-container">
      <FontAwesomeIcon
        icon={faTimes}
        className="close-cart"
        onClick={showCart}
      />
      <h2 className="cart-title"> Your Cart</h2>
      <ul className="list-container">
        {cartItems.map((item) => (
          <li key={item.id} className="mycart-li">
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />
          </li>
        ))}
      </ul>
      <div className="total-price">
        <h3>Total: ${total}</h3>
        <button className="order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default CartItems;
