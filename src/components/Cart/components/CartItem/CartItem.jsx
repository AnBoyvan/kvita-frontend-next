import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import Icon from '@/ui/Icon/Icon';

import { ModalContext } from '@/hooks/useModal';
import { useCart } from '@/hooks/useCart';
import { getProductById } from '@/services/kvita-API/products';

import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const { closeModal } = useContext(ModalContext);
  const { removeFromCart, updateCart } = useCart();
  const [product, setProduct] = useState({});

  const { productId, productName, quantity, sum } = item;

  const onChangeQuantity = value => {
    const newQuantity = quantity + value;
    const changeSum = product.price * value;
    const newSum = sum + changeSum;
    const updatedItem = {
      productId,
      productName,
      quantity: newQuantity,
      price: product.price,
      sum: newSum,
    };
    updateCart(updatedItem);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
      {product.name && (
        <li className={styles.item}>
          <div className={styles.linksWrapper}>
            <Link
              href={`/products/${product._id}`}
              className={styles.itemImage}
              onClick={closeModal}
            >
              <Image
                src={product.imageURL}
                alt={product.name}
                fill={true}
                sizes="(max-width: 300px)"
                style={{
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                }}
              />
            </Link>
            <Link
              href={`/products/${product._id}`}
              className={styles.itemName}
              onClick={closeModal}
            >
              {product.name}
            </Link>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>
                <span className={styles.priceTitle}>Ціна</span>
                <span className={styles.priceNumber}>
                  &#8372; {product.price}
                </span>
              </div>
              <div className={styles.quantity}>
                <button
                  type="button"
                  disabled={quantity < 2}
                  onClick={() => onChangeQuantity(-1)}
                  className={styles.quantityBtn}
                >
                  <Icon id="decrease" />
                </button>
                <span className={styles.quantityNumber}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onChangeQuantity(1)}
                  className={styles.quantityBtn}
                >
                  <Icon id="increase" />
                </button>
              </div>
            </div>
            <div className={styles.sumWrapper}>
              <div className={styles.sum}>&#8372; {sum}</div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeFromCart(productId)}
              >
                <Icon id="delete" />
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
