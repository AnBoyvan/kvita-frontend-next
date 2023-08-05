import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getCart } from '@/redux/auth/auth-selectors';
import { update } from '@/redux/auth/auth-operations';
import { setLocalCart } from '@/redux/localCart/localCart-slice';
import { useAuth } from './useAuth';

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const userCart = useSelector(getCart);
  const localCart = useSelector(getCart);
  const { isLoggedIn } = useAuth();

  const addProduct = product => {
    const { productId, productName } = product;

    if (isLoggedIn) {
      const productExists = userCart.find(
        item => item.productId === productId
      );
      if (productExists) {
        Notiflix.Report.failure(
          '',
          `${productName} вже додано в корзину`,
          'Ok'
        );
        return;
      }

      const newCart = [...userCart, product];
      dispatch(update({ cart: newCart }));

      Notiflix.Report.success(
        '',
        `${productName} додано в корзину`,
        'Ok'
      );
    } else {
      const productExists = localCart.find(
        item => item.productId === productId
      );
      if (productExists) {
        Notiflix.Report.failure(
          '',
          `${productName} вже додано в корзину`,
          'Ok'
        );
        return;
      }

      const newCart = [...localCart, product];
      dispatch(setLocalCart(newCart));

      Notiflix.Report.success(
        '',
        `${productName} додано в корзину`,
        'Ok'
      );
    }
  };

  return { addProduct };
};
