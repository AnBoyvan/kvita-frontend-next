import { update } from '@/redux/auth/auth-operations';
import { getCart } from '@/redux/auth/auth-selectors';
import { getLocalCart } from '@/redux/localCart/localCart-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from './useCart';
import { useAuth } from './useAuth';

const useCartItemsTransfer = () => {
  const { clearLocalCart } = useCart();
  const dispatch = useDispatch();
  const userCart = useSelector(getCart);
  const localCart = useSelector(getLocalCart);
  const { isLoggedIn } = useAuth();

  const transferItems = () => {
    if (!isLoggedIn || localCart.lenght < 1) {
      return;
    }

    const checkList = userCart.map(item => item.productId);

    const checked = localCart.filter(
      item => !checkList.includes(item.productId)
    );

    const newUserCart = [...userCart, ...checked];

    dispatch(update({ cart: newUserCart }));
    clearLocalCart();
  };

  return { transferItems };
};

export default useCartItemsTransfer;
