import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ImageItem.module.scss';
import EditPictureButtons from '@/ui/Buttons/EditPictureButtons';

const ImageItem = ({ image, action }) => {
  const { _id, title, imageURL } = image;
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
      <EditPictureButtons picture={image} />
    </li>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default ImageItem;
