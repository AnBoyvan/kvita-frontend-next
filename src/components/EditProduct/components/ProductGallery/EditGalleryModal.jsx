import { useContext, useState } from 'react';
import styles from './ProductGallery.module.scss';
import { Icon } from '@/ui/Icon/Icon';
import Image from 'next/image';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';
import MainButton from '@/ui/Buttons/MainButton';
import { ModalContext } from '@/hooks/useModal';

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

export default EditGalleryModal;
