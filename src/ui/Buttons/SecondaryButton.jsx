import styles from './Buttons.module.scss';

import React from 'react';

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

export default SecondaryButton;
