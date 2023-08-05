import { Icon } from '../Icon/Icon';
import styles from './Buttons.module.scss';
import { useCart } from '@/hooks/useCart';

const CartButton = ({ product }) => {
  const { _id, name, price } = product;
  const { addToCart } = useCart();

  const addProductToCart = () => {
    const addedProduct = {
      productId: _id,
      productName: name,
      quantity: 1,
      price,
      sum: price * 1,
    };
    addToCart(addedProduct);
  };

  return (
    <button
      type="button"
      className={styles.cartBtn}
      onClick={addProductToCart}
    >
      <Icon id="cart" />
    </button>
  );
};

export default CartButton;
