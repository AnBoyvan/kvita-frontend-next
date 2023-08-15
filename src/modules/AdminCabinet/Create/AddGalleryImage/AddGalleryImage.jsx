import Image from 'next/image';
import { useContext, useState } from 'react';
import Notiflix from 'notiflix';

import { ApproveModal } from '@/components';
import { MainButton, SecondaryButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';
import { EditContainer } from '@/components/EditProduct/components';

import { ModalContext } from '@/hooks/useModal';
import { usePictures } from '@/hooks/usePictures';
import { useValidate } from '@/hooks/useValidate';
import { newPictureFormData } from '@/utils/helpers/formDataFormating';

import styles from './AddGalleryImage.module.scss';
import tagsList from '@/config/tags.json';

const AddGalleryImage = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { validateNewPicture } = useValidate();
  const { addNewPicture } = usePictures();
  const [showImage, setShowImage] = useState('');
  const [newImage, setNewImage] = useState({
    image: null,
    title: '',
    description: '',
    tags: [],
  });

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setNewImage({
        ...newImage,
        image: selectedFile,
      });
      setShowImage(imageUrl);
    }
  };

  const handleImageRemove = () => {
    setNewImage({
      ...newImage,
      image: null,
    });
    setShowImage('');
  };

  const handleChangeTags = e => {
    let newTags;
    const clickedTag = e.target.value;

    if (newImage.tags.includes(clickedTag)) {
      newTags = newImage.tags.filter(item => item !== clickedTag);
    } else {
      newTags = [...newImage.tags, clickedTag];
    }
    setNewImage({
      ...newImage,
      tags: newTags,
    });
  };

  const handleClear = () => {
    setNewImage({
      image: null,
      title: '',
      description: '',
      tags: [],
    });
    setShowImage('');
  };

  const submitPicture = async () => {
    const isValid = await validateNewPicture(newImage);
    if (isValid === true) {
      const data = await newPictureFormData(newImage);
      await addNewPicture(data);
    } else {
      const errors = isValid;
      errors.forEach(error => {
        Notiflix.Notify.failure(error);
      });
      return;
    }
    handleClear();
    closeModal();
  };

  const handleSubmit = () => {
    openModal(
      <ApproveModal
        message="Додати фото?"
        approveButton="Так"
        approveAction={submitPicture}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  const tags = tagsList.map(tag => (
    <li
      key={tag}
      className={
        newImage.tags.includes(tag)
          ? `${styles.tagItem} ${styles.checked}`
          : styles.tagItem
      }
    >
      <label className={styles.tagLabel}>
        <input
          type="checkbox"
          value={tag}
          onChange={handleChangeTags}
          className={styles.tagInput}
          checked={newImage.tags.includes(tag)}
        />
        {tag}
      </label>
    </li>
  ));

  return (
    // <div>
    <div className={styles.container}>
      {showImage ? (
        <div className={styles.imageWrapper}>
          <Image
            src={showImage}
            alt="product image"
            fill={true}
            sizes="(max-width: 300px)"
            style={{
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
          />

          <button
            className={styles.imageRemove}
            onClick={handleImageRemove}
          >
            <Icon id="delete" />
          </button>
        </div>
      ) : (
        <label
          className={styles.imageWrapper}
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
      <EditContainer title="Назва">
        <input
          name="name"
          type="text"
          value={newImage.title}
          className={styles.titleInput}
          onChange={e =>
            setNewImage({ ...newImage, title: e.target.value })
          }
        />
      </EditContainer>
      <EditContainer title="Опис">
        <textarea
          type="text"
          value={newImage.description}
          className={styles.descriptionInput}
          rows="10"
          onChange={e =>
            setNewImage({
              ...newImage,
              description: e.target.value,
            })
          }
        />
      </EditContainer>
      <EditContainer title="Теги">
        <ul className={styles.tagsList}>{tags}</ul>
      </EditContainer>

      <div className={styles.btnWrapper}>
        <MainButton onClick={handleSubmit}>Готово</MainButton>
        <SecondaryButton onClick={handleClear}>
          Очистити
        </SecondaryButton>
      </div>
    </div>
    // </div>
  );
};

export default AddGalleryImage;
