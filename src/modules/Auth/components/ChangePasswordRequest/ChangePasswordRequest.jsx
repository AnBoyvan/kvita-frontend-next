import styles from './ChangePasswordRequest.module.scss';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import AuthInput from '@/ui/Inputs/AuthInput/AuthInput';
import { Formik, Form } from 'formik';
import { requestSchema } from '@/utils/validation/userSchemas';
import { changePasswordEmail } from '@/redux/auth/auth-operations';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import SubmitBtn from '@/ui/Buttons/SubmitBtn';
import { useDispatch } from 'react-redux';

const ChangePasswordRequest = () => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const initialValues = {
    email: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    dispatch(changePasswordEmail(value));
    resetForm();
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <CloseModalButton />
      <span className={styles.title}>Змінити пароль</span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={requestSchema}
      >
        {() => (
          <Form className={styles.form}>
            <AuthInput label="Пошта" name="email" type="email" />
            <SubmitBtn>Змінити пароль</SubmitBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordRequest;
