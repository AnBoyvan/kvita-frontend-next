import Image from 'next/image';
import styles from './ProductCard.module.scss';
import Link from 'next/link';
import LikeButton from '@/ui/Buttons/LikeButton';
import CartButton from '@/ui/Buttons/CartButton';

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

export default ProductCard;
