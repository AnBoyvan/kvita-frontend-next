import styles from './Buttons.module.scss';

const SubmitButton = ({ children }) => {
  return (
    <button type="submit" className={styles.submitBtn}>
      {children}
    </button>
  );
};

export default SubmitButton;
