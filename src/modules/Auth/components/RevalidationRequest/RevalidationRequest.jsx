import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { CloseModalButton, SubmitButton } from '@/ui/Buttons';
import { AuthInput } from '@/ui/Inputs';

import { ModalContext } from '@/hooks/useModal';
import { requestSchema } from '@/utils/validation/userSchemas';
import { resendVerificationEmail } from '@/redux/auth/auth-operations';

import styles from './RevalidationRequest.module.scss';

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
            <SubmitButton>Надіслати запит</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RevalidationRequest;
