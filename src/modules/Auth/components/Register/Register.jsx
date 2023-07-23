import styles from './Register.module.scss';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { register } from '@/redux/auth/auth-operations';
import { registerSchema } from '@/utils/validation/userSchemas';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import AuthInput from '@/ui/Inputs/AuthInput/AuthInput';
import SubmitBtn from '@/ui/Buttons/SubmitBtn';
import RevalidationRequest from '../RevalidationRequest/RevalidationRequest';

const Register = () => {
  const dispatch = useDispatch();
  const { openModal, closeModal } = useContext(ModalContext);

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone, email, password } = values;
    dispatch(register({ name, phone, email, password }));
    resetForm();
    closeModal();
  };

  const handleRevalidation = () => {
    openModal(<RevalidationRequest />);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Вхід</span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {() => (
          <Form className={styles.form}>
            <AuthInput label="Ім’я" name="name" type="text" />
            <AuthInput label="Телефон" name="phone" type="text" />
            <AuthInput label="Пошта" name="email" type="email" />
            <AuthInput
              label="Пароль"
              name="password"
              type="password"
            />
            <AuthInput
              label="Підтвердіть пароль"
              name="confirmPassword"
              type="password"
            />
            <button
              type="button"
              className={styles.reqBtn}
              onClick={handleRevalidation}
            >
              Повторна верифікація
            </button>
            <SubmitBtn>Зареєструватись</SubmitBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
