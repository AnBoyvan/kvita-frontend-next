import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import { CartButton, LikeButton } from '@/ui/Buttons';

import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { _id, name, imageURL, price, favorite } = product;
  return (
    <li className={styles.card}>
      <Link href={`/products/${_id}`} className={styles.link}>
        <Image
          src={imageURL}
          alt={name}
          fill={true}
          sizes="(max-width: 300px)"
          style={{
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
        />
      </Link>
      <div className={styles.infoWrapper}>
        <Link href={`/products/${_id}`} className={styles.title}>
          {name}
        </Link>
        <div className={styles.cart}>
          <p className={styles.price}>&#8372; {price}</p>
          <CartButton product={product} />
        </div>
      </div>
      <div className={styles.like}>
        <LikeButton id={_id} likes={favorite} />
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
