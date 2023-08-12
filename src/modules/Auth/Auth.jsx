import { useState } from 'react';

import { Login, Register } from './components';
import { CloseModalButton } from '@/ui/Buttons';

import styles from './Auth.module.scss';

const Auth = () => {
  const [authToggle, setAuthToggle] = useState('login');
  return (
    <div className={styles.auth}>
      <CloseModalButton />
      {authToggle === 'login' ? <Login /> : <Register />}
      {authToggle === 'login' ? (
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setAuthToggle('register')}
        >
          Реєстрація
        </button>
      ) : (
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setAuthToggle('login')}
        >
          Вхід
        </button>
      )}
    </div>
  );
};

export default Auth;
