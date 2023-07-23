import { ModalContext } from '@/hooks/useModal';
import { Icon } from '../Icon/Icon';
import styles from './Buttons.module.scss';
import { useContext } from 'react';

const CloseModalButton = ({ action }) => {
  const { closeModal } = useContext(ModalContext);

  const handleClick = () => {
    closeModal();
    action();
  };

  return (
    <button
      type="button"
      onClick={!action ? closeModal : handleClick}
      className={styles.closeModalBtn}
    >
      <Icon id="close" />
    </button>
  );
};

export default CloseModalButton;
