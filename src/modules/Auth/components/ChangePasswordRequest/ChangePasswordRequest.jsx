import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { CloseModalButton, SubmitButton } from '@/ui/Buttons';
import { AuthInput } from '@/ui/Inputs';

import { ModalContext } from '@/hooks/useModal';
import { changePasswordEmail } from '@/redux/auth/auth-operations';
import { requestSchema } from '@/utils/validation/userSchemas';

import styles from './ChangePasswordRequest.module.scss';

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
            <SubmitButton>Змінити пароль</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordRequest;
