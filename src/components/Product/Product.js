import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart slices/cart-slice';

import './Product.css';

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img className="image" src={imgURL} alt={name} />

      <div className="info">
        <div className="name-price">
          <h2 className="name">{name}</h2>
          <h3 className="price">${price}</h3>
        </div>

        <button className="addtocart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
