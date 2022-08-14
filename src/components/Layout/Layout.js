import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import CartItems from '../CartItems/CartItems';
import { useSelector } from 'react-redux';
import './Layout.css';

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
      </div>
    </React.Fragment>
  );
};

export default Layout;
