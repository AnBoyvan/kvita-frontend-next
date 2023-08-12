import PropTypes from 'prop-types';
import { useContext } from 'react';

import { MainButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';
import ChangeAnnouncement from './ChangeAnnouncement';

import { ModalContext } from '@/hooks/useModal';

import styles from './HeroType.module.scss';
import announcement from '@/config/announcement.json';

const AnnouncementOption = ({ action }) => {
  const { openModal } = useContext(ModalContext);
  const { title, message } = announcement;

  const handleClick = () => {
    openModal(<ChangeAnnouncement />);
  };
  return (
    <div className={styles.contaier}>
      <div className={styles.type}>
        <span className={styles.typeTitle}>Тип:</span>
        <span className={styles.typeOption}>Оголошення</span>
        <button
          type="button"
          className={styles.typeBtn}
          onClick={action}
        >
          <Icon id="pencil" />
        </button>
      </div>
      <div className={styles.typeContent}>
        <span className={styles.typeTitle}>Заголовок:</span>
        <span className={styles.typeOption}>{title}</span>
      </div>
      <div className={styles.typeContent}>
        <span className={styles.typeTitle}>Повідомлення:</span>
        <span className={styles.typeOption}>{message}</span>
      </div>
      <MainButton onClick={handleClick}>
        Змінити оголошення
      </MainButton>
    </div>
  );
};

AnnouncementOption.propTypes = {
  action: PropTypes.func.isRequired,
};

export default AnnouncementOption;
