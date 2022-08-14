/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/cart slices/auth-slice';

import './Auth.css';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="id">
          Id
        </label>
        <input className="input" type="text" name="id" id="id" />

        <label className="label" htmlFor="pssword">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
        />

        <div className="flex">
          <div className="remember">
            <input type="checkbox" name="" id="remember-me" className="check" />
            <label for="remember-me">remember me</label>
          </div>

          <a href="#" className="forget">
            forgot password?
          </a>
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
