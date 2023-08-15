import PropTypes from 'prop-types';

import Icon from '@/ui/Icon/Icon';

import { useAuth } from '@/hooks/useAuth';

import styles from './Buttons.module.scss';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import EditPictureModal from '@/components/EditPictureModal/EditPictureModal';
import { ApproveModal } from '@/components';
import { usePictures } from '@/hooks/usePictures';

const EditPictureButtons = ({ picture }) => {
  const { managerAccess } = useAuth();
  const { openModal, closeModal } = useContext(ModalContext);
  const { deletePicture } = usePictures();

  const handleChange = () => {
    openModal(<EditPictureModal picture={picture} />);
  };

  const removePicture = () => {
    deletePicture(picture._id);
    closeModal();
  };

  const handleDelete = () => {
    openModal(
      <ApproveModal
        message={'Видалити фото?'}
        approveButton="Так"
        approveAction={removePicture}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };
  return (
    <>
      {managerAccess && (
        <div className={styles.editPictureBtnWrapper}>
          <button
            type="button"
            className={styles.editPictureBtn}
            onClick={e => {
              e.stopPropagation();
              handleChange();
            }}
          >
            <Icon id="pencil" />
          </button>
          <button
            type="button"
            className={styles.deletePictureBtn}
            onClick={e => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <Icon id="delete" />
          </button>
        </div>
      )}
    </>
  );
};

EditPictureButtons.propTypes = {
  picture: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EditPictureButtons;
