import PropTypes from 'prop-types';

import styles from './Buttons.module.scss';

const SubmitButton = ({ children }) => {
  return (
    <button type="submit" className={styles.submitBtn}>
      {children}
    </button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
