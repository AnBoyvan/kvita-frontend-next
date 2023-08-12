import PropTypes from 'prop-types';

import styles from './Buttons.module.scss';

const MainButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.mainBtn}
    >
      {children}
    </button>
  );
};

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainButton;
