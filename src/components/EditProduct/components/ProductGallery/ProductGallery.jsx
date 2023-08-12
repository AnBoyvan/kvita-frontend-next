import PropTypes from 'prop-types';
import Image from 'next/image';
import { useContext } from 'react';

import Icon from '@/ui/Icon/Icon';
import { EditContainer } from '..';
import EditGalleryModal from './EditGalleryModal';

import { ModalContext } from '@/hooks/useModal';

import styles from './ProductGallery.module.scss';

const ProductGallery = ({ images, setMainImage, id }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const addImage = () => {
    openModal(<EditGalleryModal id={id} />);
  };

  const handleRemove = () => {};

  const list = images.map((image, index) => (
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
          handleRemove();
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
        <button
          type="button"
          className={styles.item}
          onClick={addImage}
        >
          <Icon id="camera" />
        </button>
      </ul>
    </EditContainer>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMainImage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductGallery;
