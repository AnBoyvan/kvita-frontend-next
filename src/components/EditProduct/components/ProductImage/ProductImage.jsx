import PropTypes from 'prop-types';
import Image from 'next/image';

import Icon from '@/ui/Icon/Icon';

import styles from './ProductImage.module.scss';

const ProductImage = ({
  image,
  setImageURL,
  setImage,
  addedToGallery,
  setAddedToGallery,
  newImages,
  setNewImages,
  isNew,
}) => {
  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(selectedFile);
      setImageURL(imageUrl);
      setNewImages([...newImages, imageUrl]);
      setAddedToGallery([...addedToGallery, selectedFile]);
    }
  };

  const handleImageRemove = () => {
    setImageURL('');
    setImage(null);
  };

  return (
    <div className={styles.container}>
      {image ? (
        <div className={styles.productImageWrapper}>
          <Image
            src={image}
            alt="product image"
            fill={true}
            sizes="(max-width: 300px)"
            style={{
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
          />
          {isNew && (
            <button
              className={styles.productImageRemove}
              onClick={handleImageRemove}
            >
              <Icon id="delete" />
            </button>
          )}
        </div>
      ) : (
        <label
          className={styles.productImageWrapper}
          style={{ cursor: 'pointer' }}
        >
          <Icon id="camera" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.imageInput}
          />
        </label>
      )}
    </div>
  );
};

ProductImage.propTypes = {
  image: PropTypes.string,
  setImageURL: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default ProductImage;
