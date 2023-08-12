import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Image from 'next/image';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';

import { ModalContext } from '@/hooks/useModal';

import styles from './ProductGallery.module.scss';

const EditGalleryModal = ({ id }) => {
  const { closeModal } = useContext(ModalContext);
  const [currentImages, setCurrentImages] = useState([]);

  const addImage = e => {
    const selectedFiles = Array.from(e.target.files);
    const newImages = selectedFiles.map(file =>
      URL.createObjectURL(file)
    );
    setCurrentImages([...currentImages, ...newImages]);
    console.log(selectedFiles);
  };

  const handleRemove = item => {
    const newList = currentImages.filter(img => img !== item);
    setCurrentImages(newList);
  };

  const list = currentImages?.map((image, index) => (
    <li
      key={index}
      className={styles.item}
      onClick={() => setMainImage(image)}
    >
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
      <button
        className={styles.removeBtn}
        onClick={e => {
          e.stopPropagation();
          handleRemove(image);
        }}
      >
        <Icon id="delete" />
      </button>
    </li>
  ));

  const handleSubmit = () => {};

  return (
    <div>
      <div className={styles.modalContainer}>
        <h2 className={styles.title}>Додайте фото</h2>
        <ul className={styles.list}>
          {list}
          <label
            className={styles.item}
            style={{ cursor: 'pointer' }}
          >
            <Icon id="camera" />
            <input
              type="file"
              accept="image/*"
              onChange={addImage}
              className={styles.input}
              multiple
            />
          </label>
        </ul>
        <div className={styles.modalBtnWrapper}>
          <MainButton onClick={handleSubmit}>Готово</MainButton>
          <SecondaryButton onClick={closeModal}>
            Назад
          </SecondaryButton>
        </div>
        <CloseModalButton />
      </div>
    </div>
  );
};

EditGalleryModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditGalleryModal;
