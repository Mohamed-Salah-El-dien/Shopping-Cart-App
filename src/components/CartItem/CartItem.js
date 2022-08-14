import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart slices/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/fontawesome-free-solid';

import './CartItem.css';

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cart-item">
      <div className="item-info">
        <h2 className="item-name">{name}</h2>

        <p className="item-text">${price}</p>

        <p className="item-text">{quantity}</p>

        <article className="item-text">Total ${total}</article>
      </div>

      <div className="item-btns">
        <FontAwesomeIcon
          icon={faMinusCircle}
          className="cart-actions"
          onClick={decrementCartItem}
        />

        <FontAwesomeIcon
          icon={faPlusCircle}
          className="cart-actions"
          onClick={incrementCartItem}
        />
      </div>
    </div>
  );
};

export default CartItem;
