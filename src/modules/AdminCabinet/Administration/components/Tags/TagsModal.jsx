import MainButton from '@/ui/Buttons/MainButton';
import styles from './Tags.module.scss';
import tags from '@/config/tags.json';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import { ModalContext } from '@/hooks/useModal';
import { useContext, useState } from 'react';
import Notiflix from 'notiflix';
import { updateTags } from '@/services/admin';

const TagsModal = ({ tag, approveButton }) => {
  const { closeModal } = useContext(ModalContext);
  const [tagText, setTagText] = useState(tag || '');

  const handleClick = () => {
    if (tagText.trim() === '') {
      Notiflix.Notify.failure('Введіть тег');
      return;
    }
    const isTag = tags.includes(tag);

    if (isTag) {
      const updatedTags = tags.map(t => (t === tag ? tagText : t));
      updateTags(updatedTags);
    } else {
      const updatedTags = [...tags, tagText];
      updateTags(updatedTags);
    }
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalTitle}>Тег</div>
      <input
        type="text"
        value={tagText}
        className={styles.modalInput}
        onChange={e => setTagText(e.target.value)}
      />
      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>{approveButton}</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

export default TagsModal;
