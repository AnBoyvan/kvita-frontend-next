import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ImageItem.module.scss';

const ImageItem = ({ image, action }) => {
  const { title, imageURL } = image;
  return (
    <li className={styles.item} onClick={() => action(image)}>
      <Image
        src={imageURL}
        alt={title || 'sweets'}
        fill={true}
        sizes="(max-width: 400px)"
        style={{
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      />
    </li>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default ImageItem;
