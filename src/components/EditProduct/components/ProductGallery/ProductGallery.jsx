import PropTypes from 'prop-types';
import Image from 'next/image';
import { useContext } from 'react';

import { ApproveModal } from '@/components';
import Icon from '@/ui/Icon/Icon';
import { EditContainer } from '..';

import { ModalContext } from '@/hooks/useModal';

import styles from './ProductGallery.module.scss';

const ProductGallery = ({
  images,
  setMainImage,
  setProductImageGallery,
  addedToGallery,
  setAddedToGallery,
  newImages,
  setNewImages,
}) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const showImages = [...images, ...newImages];

  const addImage = e => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles) {
      const imagesUrl = selectedFiles.map(file =>
        URL.createObjectURL(file)
      );
      setNewImages([...newImages, ...imagesUrl]);
      setAddedToGallery([...addedToGallery, ...selectedFiles]);
    }
  };
  const deleteImage = image => {
    const isExistedImage = images.includes(image);
    if (isExistedImage) {
      const editedGallery = images.filter(i => i !== image);
      setProductImageGallery(editedGallery);
      closeModal();
      return;
    }

    const imageIndex = newImages.indexOf(image);
    if (imageIndex !== -1) {
      const editedAddedToGallery = [...addedToGallery];
      editedAddedToGallery.splice(imageIndex, 1);
      setAddedToGallery(editedAddedToGallery);

      const editedNewImages = [...newImages];
      editedNewImages.splice(imageIndex, 1);
      setNewImages(editedNewImages);
    }

    closeModal();
    return;
  };

  const handleRemove = image => {
    openModal(
      <ApproveModal
        message="Видалити фото?"
        approveButton="Так"
        approveAction={() => deleteImage(image)}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  const list = showImages.map((image, index) => (
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
  return (
    <EditContainer>
      <ul className={styles.list}>
        {list}
        <label className={styles.item} style={{ cursor: 'pointer' }}>
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
    </EditContainer>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMainImage: PropTypes.func.isRequired,
  setProductImageGallery: PropTypes.func.isRequired,
  addedToGallery: PropTypes.arrayOf(
    typeof window !== 'undefined'
      ? PropTypes.instanceOf(File)
      : PropTypes.string
  ),
  setAddedToGallery: PropTypes.func.isRequired,
  newImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  setNewImages: PropTypes.func.isRequired,
};

export default ProductGallery;
