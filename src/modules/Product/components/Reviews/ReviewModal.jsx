import PropTypes from 'prop-types';
import { useState } from 'react';

import { CloseModalButton, MainButton } from '@/ui/Buttons';

import styles from './Reviews.module.scss';

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

ReviewModal.propTypes = {
  button: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialText: PropTypes.string,
};

export default ReviewModal;
