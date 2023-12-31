import { useContext } from 'react';

import { ModalContext } from '@/hooks/useModal';

import styles from './Modal.module.scss';

const Modal = () => {
  const { modalContent, closeModal } = useContext(ModalContext);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {modalContent}
    </div>
  );
};

export default Modal;
