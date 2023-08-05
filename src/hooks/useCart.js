import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getCart } from '@/redux/auth/auth-selectors';
import { update } from '@/redux/auth/auth-operations';
import { setLocalCart } from '@/redux/localCart/localCart-slice';
import { useAuth } from './useAuth';
import { getLocalCart } from '@/redux/localCart/localCart-selectors';

export const useCart = () => {
  const dispatch = useDispatch();
  const userCart = useSelector(getCart);
  const localCart = useSelector(getLocalCart);
  const { isLoggedIn } = useAuth();
  const currentCart = isLoggedIn ? userCart : localCart;

  const addToCart = product => {
    const { productId, productName } = product;
    const productExists = currentCart.find(
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
    const newCart = [...currentCart, product];
    dispatch(
      isLoggedIn
        ? update({ cart: newCart })
        : setLocalCart({ items: newCart })
    );
    Notiflix.Report.success(
      '',
      `${productName} додано в корзину`,
      'Ok'
    );
  };

  const removeFromCart = id => {
    const newCart = currentCart.filter(item => item.productId !== id);
    dispatch(
      isLoggedIn
        ? update({ cart: newCart })
        : setLocalCart({ items: newCart })
    );
  };

  // const updateCart = updatedItem => {
  //   const filteredCart = currentCart.filter(
  //     item => item.productId !== updatedItem.productId
  //   );
  //   const newCart = [...filteredCart, updatedItem];
  //   dispatch(
  //     isLoggedIn
  //       ? update({ cart: newCart })
  //       : setLocalCart({ items: newCart })
  //   );
  // };

  const updateCart = updatedItem => {
    const itemIndex = currentCart.findIndex(
      item => item.productId === updatedItem.productId
    );

    if (itemIndex !== -1) {
      const newCart = [...currentCart];
      newCart[itemIndex] = updatedItem;

      dispatch(
        isLoggedIn
          ? update({ cart: newCart })
          : setLocalCart({ items: newCart })
      );
    }
  };

  const clearUserCart = () => {
    dispatch(update({ cart: [] }));
  };

  const clearLocalCart = () => {
    dispatch(setLocalCart({ items: [] }));
  };

  return {
    addToCart,
    removeFromCart,
    updateCart,
    clearUserCart,
    clearLocalCart,
  };
};
