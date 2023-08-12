import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { MainButton } from '@/ui/Buttons';
import ReviewItem from './ReviewItem';
import ReviewModal from './ReviewModal';

import {
  useFetchReviews,
  useMutateReviews,
} from '@/hooks/useReviews';
import { ModalContext } from '@/hooks/useModal';
import { useAuth } from '@/hooks/useAuth';

import styles from './Reviews.module.scss';

const Reviews = ({ id }) => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { user } = useAuth();
  const { reviews, refetchReviews } = useFetchReviews({
    productId: id,
  });

  const { addNewReview } = useMutateReviews();

  const [reviewText, setReviewText] = useState('');

  const addReview = text => {
    if (!user) {
      Notiflix.Report.failure(
        '',
        'Тільки для зареєстрованих користувачів',
        'Ok'
      );
      return;
    }
    if (!text || text === '') {
      Notiflix.Report.failure('', 'Додайте коментар', 'Ok');
      return;
    }
    const newReview = {
      productId: id,
      ownerName: user.name,
      comment: text,
    };
    addNewReview(newReview);
    setReviewText('');
    closeModal();
  };

  const createReview = () => {
    openModal(
      <ReviewModal button="Додати відгук" onSubmit={addReview} />
    );
  };

  const reviewsList = reviews
    ? reviews.map(item => <ReviewItem key={item._id} review={item} />)
    : null;

  useEffect(() => {
    refetchReviews();
  }, [id, refetchReviews]);
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Відгуки</h3>
      <div className={styles.addBtn}>
        <MainButton onClick={createReview}>Додати відгук</MainButton>
      </div>
      <div className={styles.listWrapper}>
        {reviewsList && reviewsList.length > 0 ? (
          <ul className={styles.list}>{reviewsList}</ul>
        ) : (
          <span>Поки немає відгуків</span>
        )}
        <div className={styles.reviewFormWrapper}>
          <div className={styles.reviewForm}>
            <h2 className={styles.reviewFormTitle}>
              Написати відгук
            </h2>
            <textarea
              type="textarea"
              name="review"
              className={styles.reviewFormText}
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              placeholder="Відгук..."
            />
            <MainButton onClick={() => addReview(reviewText)}>
              Додати відгук
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
