import PropTypes from 'prop-types';

import { useCart } from '@/hooks/useCart';

import styles from './Buttons.module.scss';
import Icon from '../Icon/Icon';

const CartButton = ({ product, quantity = 1 }) => {
  const { _id, name, price, imageURL } = product;
  const { addToCart } = useCart();

  const addProductToCart = () => {
    const addedProduct = {
      productId: _id,
      productName: name,
      productImage: imageURL,
      quantity: quantity,
      price,
      sum: price * quantity,
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

CartButton.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number,
};

export default CartButton;
