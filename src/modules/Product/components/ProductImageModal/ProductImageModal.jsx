import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';

import Icon from '@/ui/Icon/Icon';
import { CloseModalButton } from '@/ui/Buttons';

import styles from './ProductImageModal.module.scss';

const ProductImageModal = ({ title, images, currentImage }) => {
  const [shownImage, setShownImage] = useState(currentImage);
  const [startTouch, setStartTouch] = useState();

  const goToPreviousImage = () => {
    const currentIndex = images.indexOf(shownImage);
    const previousIndex =
      (currentIndex - 1 + images.length) % images.length;
    setShownImage(images[previousIndex]);
  };

  const goToNextImage = () => {
    const currentIndex = images.indexOf(shownImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setShownImage(images[nextIndex]);
  };

  const handleSwipe = e => {
    const endTouch = e.changedTouches[0].clientX;
    const delta = startTouch - endTouch;
    if (delta > 50) {
      goToNextImage();
      return;
    }

    if (delta < -50) {
      goToPreviousImage();
      return;
    }
    return;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        onTouchStart={e => setStartTouch(e.touches[0].clientX)}
        onTouchEnd={handleSwipe}
      >
        <Image
          src={shownImage}
          alt={title || 'sweets'}
          fill={true}
          sizes="(max-width: 600px)"
          style={{
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
        />
        {title && <p className={styles.title}>{title}</p>}
      </div>
      <button onClick={goToPreviousImage} className={styles.prevBtn}>
        <Icon id="prev" />
      </button>
      <button onClick={goToNextImage} className={styles.nextBtn}>
        <Icon id="next" />
      </button>
      <CloseModalButton />
    </div>
  );
};

ProductImageModal.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.string.isRequired,
};

export default ProductImageModal;
