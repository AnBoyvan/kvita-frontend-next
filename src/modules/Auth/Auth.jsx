import { useState } from 'react';
import styles from './Auth.module.scss';

const Auth = () => {
  const [authToggle, setAuthToggle] = useState('login');
  return <div className={styles.auth}></div>;
};

export default Auth;
