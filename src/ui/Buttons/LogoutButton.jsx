import { useDispatch } from 'react-redux';
import { useContext } from 'react';

import { ApproveModal } from '@/components';
import Icon from '@/ui/Icon/Icon';

import { ModalContext } from '@/hooks/useModal';
import { logOut } from '@/redux/auth/auth-operations';

import styles from './Buttons.module.scss';

const LogoutButton = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
    closeModal();
  };
  const handleLogOut = () => {
    openModal(
      <ApproveModal
        message="Вийти?"
        approveButton="Так"
        approveAction={onLogOut}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  return (
    <button
      type="button"
      onClick={handleLogOut}
      className={styles.logoutBtn}
    >
      <Icon id="logout" />
      <span className={styles.logoutBtnText}>Вийти</span>
    </button>
  );
};

export default LogoutButton;
