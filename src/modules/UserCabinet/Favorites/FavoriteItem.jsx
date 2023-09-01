import PropTypes from 'prop-types';
import Image from 'next/image';

import Icon from '@/ui/Icon/Icon';
import { MainLinkButton } from '@/ui/Buttons';

import { useMutateProducts } from '@/hooks/useProducts';

import styles from './Favorites.module.scss';

const FavoriteItem = ({ product }) => {
  const { _id, imageURL, name, description } = product;

  const { updFavorites } = useMutateProducts();

  const removeFromFavorites = () => {
    updFavorites(_id);
  };
  return (
    <li key={_id} className={styles.item}>
      <div className={styles.imgWrapper}>
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
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.link}>
          <MainLinkButton link={`/products/${_id}`}>
            <Icon id="arrowRight" />
          </MainLinkButton>
        </div>
      </div>
      <button
        type="button"
        className={styles.removeBtn}
        onClick={removeFromFavorites}
      >
        <Icon id="delete" />
      </button>
    </li>
  );
};

FavoriteItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteItem;
