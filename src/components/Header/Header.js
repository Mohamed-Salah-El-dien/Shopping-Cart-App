import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/cart slices/auth-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid';

import Cart from '../Cart/Cart';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className="header-nav">
      <ul className="header-ul">
        <li>
          <h2 className="header-h2">Shopping App</h2>
        </li>

        <li className="quantity">
          <Cart />
        </li>

        <li>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className="logout-btn"
            onClick={logoutHandler}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
