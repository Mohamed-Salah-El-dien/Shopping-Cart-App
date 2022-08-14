import { useSelector } from 'react-redux';
import Auth from './Auth/Auth';
import Layout from './Layout/Layout';

function shoppingCart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default shoppingCart;
