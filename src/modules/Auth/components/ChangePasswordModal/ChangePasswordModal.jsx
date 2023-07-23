import styles from './ChangePasswordModal.module.scss';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import AuthInput from '@/ui/Inputs/AuthInput/AuthInput';
import { Formik, Form } from 'formik';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import SubmitBtn from '@/ui/Buttons/SubmitBtn';
import { useDispatch } from 'react-redux';
import { changePassword } from '@/redux/auth/auth-operations';
import { passwordChangeSchema } from '@/utils/validation/userSchemas';
import { useRouter } from 'next/router';

const ChangePasswordModal = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const handleClose = () => {
    router.replace('/');
  };

  const handleSubmit = (values, { resetForm }) => {
    const password = values.password;
    dispatch(changePassword({ password, passwordToken: token }));
    resetForm();
    router.replace('/');
    closeModal();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <CloseModalButton action={handleClose} />
        <span className={styles.title}>Новий пароль</span>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={passwordChangeSchema}
        >
          {() => (
            <Form className={styles.form}>
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
              <SubmitBtn>Змінити пароль</SubmitBtn>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
