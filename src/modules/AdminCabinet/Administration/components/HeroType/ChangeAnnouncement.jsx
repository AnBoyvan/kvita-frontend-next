import { useContext, useState } from 'react';
import styles from './HeroType.module.scss';
import { ModalContext } from '@/hooks/useModal';
import announcement from '@/config/announcement.json';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import MainButton from '@/ui/Buttons/MainButton';
import { updateAnnouncement } from '@/services/admin';

const ChangeAnnouncement = () => {
  const { closeModal } = useContext(ModalContext);
  const { title, message } = announcement;
  const [newTitle, setNewTitle] = useState(title);
  const [newMessage, setNewMessage] = useState(message);

  const handleClick = () => {
    const updatedConfig = {
      ...announcement,
      title: newTitle,
      message: newMessage,
    };
    updateAnnouncement(updatedConfig);
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalTitle}>Оголошення</div>
      <div className={styles.modalTextWrapper}>
        <span className={styles.modalTextTitle}>Заголовок:</span>
        <textarea
          type="textarea"
          className={styles.modalText}
          value={newTitle}
          rows="2"
          onChange={e => setNewTitle(e.target.value)}
          placeholder="Заголовок..."
        />
      </div>
      <div className={styles.modalTextWrapper}>
        <span className={styles.modalTextTitle}>Повідомлення:</span>
        <textarea
          type="textarea"
          className={styles.modalText}
          value={newMessage}
          rows="7"
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Повідомлення..."
        />
      </div>
      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>Змінити</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

export default ChangeAnnouncement;
