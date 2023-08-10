import styles from './ProductImages.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/ui/Icon/Icon';

export const ProductImages = ({ images, name, action }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const visibleImages =
    images.length >= 3
      ? [
          images[currentIndex],
          images[(currentIndex + 1) % images.length],
          images[(currentIndex + 2) % images.length],
        ]
      : images;

  const gallery = visibleImages.map((imageURL, index) => (
    <li key={index} className={styles.image}>
      <Image
        src={imageURL}
        alt={name}
        fill={true}
        sizes="(max-width: 300px)"
        style={{
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
        onClick={() => action(imageURL)}
      />
    </li>
  ));

  return (
    <ul className={styles.gallery}>
      {images.length > 3 && (
        <div onClick={handlePrev} className={styles.navigationBtn}>
          <Icon id="prev" />
        </div>
      )}
      {gallery}
      {images.length > 3 && (
        <div onClick={handleNext} className={styles.navigationBtn}>
          <Icon id="next" />
        </div>
      )}
    </ul>
  );
};
