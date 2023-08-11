import { useState } from 'react';
import styles from './EditContainer.module.scss';

const EditContainer = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div></div>
      {children}
    </div>
  );
};

export default EditContainer;
