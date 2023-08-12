import PropTypes from 'prop-types';

import { MainButton, SecondaryButton } from '@/ui/Buttons';

import styles from './ApproveModal.module.scss';

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

ApproveModal.propTypes = {
  message: PropTypes.string.isRequired,
  approveButton: PropTypes.string.isRequired,
  approveAction: PropTypes.func.isRequired,
  rejectButton: PropTypes.string.isRequired,
  rejectaction: PropTypes.func.isRequired,
};

export default ApproveModal;
