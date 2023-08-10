import { formatDate } from '@/utils/helpers/formatDate';
import styles from './Reviews.module.scss';
import { Icon } from '@/ui/Icon/Icon';
import { ModalContext } from '@/hooks/useModal';
import { useContext } from 'react';
import ReviewModal from './ReviewModal';
import { useMutateReviews } from '@/hooks/useReviews';
import Notiflix from 'notiflix';
import { useAuth } from '@/hooks/useAuth';
import ApproveModal from '@/components/ApproveModal/ApproveModal';

const ReviewItem = ({ review }) => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { user } = useAuth();
  const { editReview, removeReview } = useMutateReviews();
  const { _id, ownerId, ownerName, comment, createdAt } = review;

  const created = formatDate(createdAt);

  const checkEdit = Boolean(ownerId === user._id);
  const checkDelete = Boolean(
    ownerId === user._id || user.role === 'superuser'
  );

  const changeReview = text => {
    if (text.trim() === '') {
      Notiflix.Report.failure('', 'Додайте коментар', 'Ok');
      return;
    }

    editReview({ comment: text, _id });
    closeModal();
  };

  const handleChange = () => {
    openModal(
      <ReviewModal
        button="Змінити відгук"
        onSubmit={changeReview}
        initialText={comment}
      />
    );
  };

  const deleteReviev = () => {
    removeReview(_id);
    closeModal();
  };

  const handleDelete = () => {
    openModal(
      <ApproveModal
        message="Видалити відгук?"
        approveButton="Так"
        approveAction={deleteReviev}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <span className={styles.owner}>{ownerName}</span>
        <div className={styles.dateWrapper}>
          <span className={styles.date}>{created}</span>
          {checkEdit && (
            <button
              type="button"
              className={styles.changeBtn}
              onClick={handleChange}
            >
              <Icon id="pencil" />
            </button>
          )}
          {checkDelete && (
            <button
              type="button"
              className={styles.removeBtn}
              onClick={handleDelete}
            >
              <Icon id="delete" />
            </button>
          )}
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </li>
  );
};

export default ReviewItem;
