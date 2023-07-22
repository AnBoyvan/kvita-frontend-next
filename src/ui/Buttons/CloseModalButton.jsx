import { ModalContext } from '@/hooks/useModal';
import { Icon } from '../Icon/Icon';
import styles from './Buttons.module.scss';
import { useContext } from 'react';

const CloseModalButton = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <button
      type="button"
      onClick={closeModal}
      className={styles.closeModalBtn}
    >
      <Icon id="close" />
    </button>
  );
};

export default CloseModalButton;
