import PropTypes from 'prop-types';

import styles from './Buttons.module.scss';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.secondaryBtn}
    >
      {children}
    </button>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
