import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';
import { EditContainer } from '../EditProduct/components';

import { ModalContext } from '@/hooks/useModal';
import { useValidate } from '@/hooks/useValidate';

import styles from './EditPictureModal.module.scss';
import tagsList from '@/config/tags.json';
import { usePictures } from '@/hooks/usePictures';

const EditPictureModal = ({ picture }) => {
  const { closeModal } = useContext(ModalContext);
  const { validatePictureUpdate } = useValidate();
  const { updatePicture } = usePictures();

  const [updatedPicture, setUpdatedPicture] = useState({
    title: picture.title,
    description: picture.description,
    tags: picture.tags,
  });

  const editPicture = async () => {
    const isValid = await validatePictureUpdate(updatedPicture);
    if (isValid === true) {
      await updatePicture({
        updatedPicture,
        _id: picture._id,
      });
    } else {
      const errors = isValid;
      errors.forEach(error => {
        Notiflix.Notify.failure(error);
      });
      return;
    }
    closeModal();
  };

  const handleChangeTags = e => {
    let newTags;
    const clickedTag = e.target.value;

    if (updatedPicture.tags.includes(clickedTag)) {
      newTags = updatedPicture.tags.filter(
        item => item !== clickedTag
      );
    } else {
      newTags = [...updatedPicture.tags, clickedTag];
    }
    setUpdatedPicture({
      ...updatedPicture,
      tags: newTags,
    });
  };

  const tags = tagsList.map(tag => (
    <li
      key={tag}
      className={
        updatedPicture.tags.includes(tag)
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
          checked={updatedPicture.tags.includes(tag)}
        />
        {tag}
      </label>
    </li>
  ));

  return (
    <div className={styles.container}>
      <EditContainer title="Назва">
        <input
          name="name"
          type="text"
          value={updatedPicture.title}
          className={styles.titleInput}
          onChange={e =>
            setUpdatedPicture({
              ...updatedPicture,
              title: e.target.value,
            })
          }
        />
      </EditContainer>
      <EditContainer title="Опис">
        <textarea
          type="text"
          value={updatedPicture.description}
          className={styles.descriptionInput}
          rows="10"
          onChange={e =>
            setUpdatedPicture({
              ...updatedPicture,
              description: e.target.value,
            })
          }
        />
      </EditContainer>
      <EditContainer title="Теги">
        <ul className={styles.tagsList}>{tags}</ul>
      </EditContainer>
      <div className={styles.btnWrapper}>
        <MainButton onClick={editPicture}>Готово</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

EditPictureModal.propTypes = {
  picture: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EditPictureModal;
