import styles from './Buttons.module.scss';

const SubmitBtn = ({ children }) => {
  return (
    <button type="submit" className={styles.submitBtn}>
      {children}
    </button>
  );
};

export default SubmitBtn;
