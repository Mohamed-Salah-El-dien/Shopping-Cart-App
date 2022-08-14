import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart slices/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cart-block">
      <h3 onClick={showCart}>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> :{' '}
        {quantity}
      </h3>
    </div>
  );
};

export default Cart;
