import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ModalContext } from '@/hooks/useModal';

import styles from './Buttons.module.scss';
import Icon from '../Icon/Icon';

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

CloseModalButton.propTypes = {
  action: PropTypes.func,
};

export default CloseModalButton;
