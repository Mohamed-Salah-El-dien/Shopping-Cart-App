import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="app">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
