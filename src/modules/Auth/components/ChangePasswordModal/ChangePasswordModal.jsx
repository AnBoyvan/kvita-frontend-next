import { ModalContext } from '@/hooks/useModal';
import { changePassword } from '@/redux/auth/auth-operations';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import SubmitBtn from '@/ui/Buttons/SubmitBtn';
import AuthInput from '@/ui/Inputs/AuthInput/AuthInput';
import { passwordChangeSchema } from '@/utils/validation/userSchemas';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ChangePasswordModal.module.scss';

const ChangePasswordModal = () => {
  const router = useRouter();
  const { passwordToken } = router.query;
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
    dispatch(changePassword({ password, passwordToken }));
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
