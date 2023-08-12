import { useField } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AuthInput.module.scss';
import Icon from '@/ui/Icon/Icon';

const AuthInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.inputWrapper}>
      <input
        {...field}
        {...props}
        type={showPassword ? 'text' : props.type}
        className={`${styles.input}
        ${meta.value && !meta.error ? styles.inputValid : ''}
        ${meta.touched && meta.error ? styles.inputError : ''}`}
      />
      <label
        className={`${styles.label}
        ${meta.value && !meta.error ? styles.labelValid : ''}
        ${meta.touched && meta.error ? styles.labelError : ''}`}
      >
        {label}
      </label>
      {meta.touched && meta.error && (
        <div className={styles.error}>*{meta.error}</div>
      )}
      {props.type === 'password' && (
        <button
          type="button"
          className={styles.passwordToggle}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <Icon id="hide" /> : <Icon id="show" />}
        </button>
      )}
    </div>
  );
};

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthInput;
