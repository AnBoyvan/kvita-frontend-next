import { useState } from 'react';
import styles from './ProductImage.module.scss';
import Image from 'next/image';
import { Icon } from '@/ui/Icon/Icon';

const ProductImage = ({ image, setImage, isNew }) => {
  const [selectedImage, setSelectedImage] = useState(image);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImage(null);
  };

  return (
    <div className={styles.container}>
      {selectedImage ? (
        <div className={styles.productImageWrapper}>
          <Image
            src={isNew ? selectedImage : image}
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

export default ProductImage;
