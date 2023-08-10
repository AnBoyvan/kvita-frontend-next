import MainButton from '@/ui/Buttons/MainButton';
import styles from './ApproveModal.module.scss';

import React from 'react';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';

const ApproveModal = ({
  message,
  approveButton,
  approveAction,
  rejectButton,
  rejectaction,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{message}</h2>
      <div className={styles.btnWrapper}>
        <MainButton onClick={approveAction}>
          {approveButton}
        </MainButton>
        <SecondaryButton onClick={rejectaction}>
          {rejectButton}
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ApproveModal;
