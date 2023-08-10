import styles from './Comment.module.scss';

const Comment = ({
  addComment,
  setAddComment,
  comment,
  setComment,
}) => {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={addComment ? true : false}
            onChange={() => setAddComment(!addComment)}
          />
          <span className={styles.checkmark}></span>
        </label>
        Додати коментар
      </div>
      {addComment && (
        <textarea
          type="textarea"
          name="comment"
          className={styles.commentInput}
          value={comment}
          rows="5"
          onChange={e => setComment(e.target.value)}
          placeholder="Коментар..."
        />
      )}
    </div>
  );
};

export default Comment;
