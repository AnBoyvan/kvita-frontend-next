import styles from './RevalidationRequest.module.scss';
import CloseModalButton from '@/ui/Buttons/CloseModalButton';
import AuthInput from '@/ui/Inputs/AuthInput/AuthInput';
import { Formik, Form } from 'formik';
import { requestSchema } from '@/utils/validation/userSchemas';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import SubmitBtn from '@/ui/Buttons/SubmitButton';
import { useDispatch } from 'react-redux';
import { resendVerificationEmail } from '@/redux/auth/auth-operations';

const RevalidationRequest = () => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const initialValues = {
    email: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    dispatch(resendVerificationEmail(value));
    resetForm();
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <CloseModalButton />
      <span className={styles.title}>Повторна верифікація</span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={requestSchema}
      >
        {() => (
          <Form className={styles.form}>
            <AuthInput label="Пошта" name="email" type="email" />
            <SubmitBtn>Надіслати запит</SubmitBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RevalidationRequest;
