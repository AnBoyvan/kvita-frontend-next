import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { AuthInput } from '@/ui/Inputs';
import { SubmitButton } from '@/ui/Buttons';
import { ChangePasswordRequest } from '..';

import { ModalContext } from '@/hooks/useModal';
import { logIn } from '@/redux/auth/auth-operations';
import { loginSchema } from '@/utils/validation/userSchemas';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { openModal, closeModal } = useContext(ModalContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    closeModal();
  };

  const handleChangePassword = () => {
    openModal(<ChangePasswordRequest />);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Вхід</span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {() => (
          <Form className={styles.form}>
            <AuthInput label="Пошта" name="email" type="email" />
            <AuthInput
              label="Пароль"
              name="password"
              type="password"
            />
            <button
              type="button"
              className={styles.reqBtn}
              onClick={handleChangePassword}
            >
              Забули пароль?
            </button>
            <SubmitButton>Увійти</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
