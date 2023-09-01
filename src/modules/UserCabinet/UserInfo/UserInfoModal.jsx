import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { CloseModalButton, SubmitButton } from '@/ui/Buttons';
import { AuthInput } from '@/ui/Inputs';

import { ModalContext } from '@/hooks/useModal';
import { update } from '@/redux/auth/auth-operations';
import { updateByUserShema } from '@/utils/validation/userSchemas';

import styles from './UserInfo.module.scss';

const UserInfoModal = ({ name, phone }) => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);
  const initialValues = {
    name,
    phone,
  };

  const handleSubmit = ({ name, phone }) => {
    dispatch(update({ name, phone }));
    closeModal();
  };
  return (
    <div className={styles.modalContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={updateByUserShema}
      >
        {() => (
          <Form className={styles.modalForm}>
            <AuthInput label="Ім’я" name="name" type="text" />
            <AuthInput label="Телефон" name="phone" type="text" />
            <SubmitButton>Змінити</SubmitButton>
          </Form>
        )}
      </Formik>
      <CloseModalButton />
    </div>
  );
};

UserInfoModal.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default UserInfoModal;
