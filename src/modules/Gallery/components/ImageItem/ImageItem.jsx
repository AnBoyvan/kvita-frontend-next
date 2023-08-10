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

export default ImageItem;
