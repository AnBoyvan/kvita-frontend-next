import styles from './Buttons.module.scss';

import React from 'react';

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

export default MainButton;
