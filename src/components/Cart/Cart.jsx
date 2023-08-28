import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { customAlphabet } from 'nanoid';

import { CloseModalButton } from '@/ui/Buttons';
import {
  CartItem,
  Comment,
  CustomerInfo,
  Delivery,
} from './components';

import { useAuth } from '@/hooks/useAuth';
import { ModalContext } from '@/hooks/useModal';
import { useOrders } from '@/hooks/useOrders';
import { getCart, getUser } from '@/redux/auth/auth-selectors';
import { getLocalCart } from '@/redux/localCart/localCart-selectors';

import styles from './Cart.module.scss';

const Cart = () => {
  const nanoid = customAlphabet('1234567890', 7);
  const { addNewOrder } = useOrders();
  const { closeModal } = useContext(ModalContext);

  const user = useSelector(getUser);
  const userCart = useSelector(getCart);
  const localCart = useSelector(getLocalCart);
  const { isLoggedIn } = useAuth();
  const currentCart = isLoggedIn ? userCart : localCart;

  const [orderSum, setOrderSum] = useState(0);
  const [delivery, setDelivery] = useState(false);
  const [deliveryAdress, setDeliveryAdress] = useState('');
  const [addComment, setAddComment] = useState(false);
  const [comment, setComment] = useState('');

  const [ownerName, setOwnerName] = useState(
    isLoggedIn ? user.name : ''
  );
  const [ownerEmail, setOwnerEmail] = useState(
    isLoggedIn ? user.email : ''
  );
  const [ownerPhone, setOwnerPhone] = useState(
    isLoggedIn ? user.phone : ''
  );

  const cartList = currentCart.map(item => (
    <CartItem key={item.productId} item={item} />
  ));

  const addOrder = () => {
    const newOrder = {
      items: currentCart,
      orderNumber: nanoid(),
      total: orderSum,
      discount: Number(user.discount),
      ownerId: isLoggedIn ? user._id : ownerPhone,
      ownerName,
      ownerEmail,
      ownerPhone,
      comment,
      delivery,
      deliveryAdress,
    };

    addNewOrder(newOrder);
    closeModal();
  };

  useEffect(() => {
    let sum = currentCart.reduce(
      (total, item) => total + item.sum,
      0
    );
    if (user && user.discount > 0) {
      const discountAmount = (sum * user.discount) / 100;
      sum -= discountAmount;
    }
    setOrderSum(sum);
  }, [currentCart, user]);

  return (
    <div className={styles.container}>
      <CloseModalButton />
      <h2 className={styles.title}>Корзина</h2>
      {currentCart && currentCart.length > 0 ? (
        <div>
          <ul>{cartList}</ul>
          <Delivery
            delivery={delivery}
            setDelivery={setDelivery}
            deliveryAdress={deliveryAdress}
            setDeliveryAdress={setDeliveryAdress}
          />
          <Comment
            addComment={addComment}
            setAddComment={setAddComment}
            comment={comment}
            setComment={setComment}
          />
          {user && user.discount > 0 && (
            <div className={styles.discount}>
              Знижка:&#10240;
              <span className={styles.discountCount}>
                {user.discount}%
              </span>
            </div>
          )}
          <CustomerInfo
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
            setOwnerPhone={setOwnerPhone}
            isLoggedIn={isLoggedIn}
            user={user}
            closeModal={closeModal}
            onSubmit={addOrder}
            orderSum={orderSum}
          />
        </div>
      ) : (
        <span className={styles.message}>Корзина порожня</span>
      )}
    </div>
  );
};

export default Cart;
