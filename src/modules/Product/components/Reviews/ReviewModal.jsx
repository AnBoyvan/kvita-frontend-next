import { useState } from 'react';
import styles from './Reviews.module.scss';
import MainButton from '@/ui/Buttons/MainButton';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';

const ReviewModal = ({ button, onSubmit, initialText }) => {
  const [text, setText] = useState(initialText || '');
  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <div className={styles.reviewModal}>
      <CloseModalButton />
      <div className={styles.reviewForm}>
        <h2 className={styles.reviewFormTitle}>Відгук</h2>
        <textarea
          type="textarea"
          name="review"
          className={styles.reviewFormText}
          value={text}
          onChange={handleChange}
          placeholder="Відгук..."
        />
        <MainButton onClick={() => onSubmit(text)}>
          {button}
        </MainButton>
      </div>
    </div>
  );
};

export default ReviewModal;
