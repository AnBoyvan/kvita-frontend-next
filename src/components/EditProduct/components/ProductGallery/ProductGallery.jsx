import Image from 'next/image';
import styles from './ProductGallery.module.scss';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { Icon } from '@/ui/Icon/Icon';
import EditGalleryModal from './EditGalleryModal';

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
    <div className={styles.container}>
      <h2 className={styles.title}>Фото:</h2>
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
    </div>
  );
};

export default ProductGallery;
