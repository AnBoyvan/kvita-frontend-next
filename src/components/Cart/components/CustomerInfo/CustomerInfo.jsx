import PropTypes from 'prop-types';
import Link from 'next/link';
import { Formik, Form } from 'formik';

import { AuthInput } from '@/ui/Inputs';
import { SubmitButton } from '@/ui/Buttons';

import { newOrderSchema } from '@/utils/validation/orderSchemas';

import styles from './CustomerInfo.module.scss';

const CustomerInfo = ({
  isLoggedIn,
  user,
  setOwnerName,
  setOwnerEmail,
  setOwnerPhone,
  closeModal,
  onSubmit,
  orderSum,
}) => {
  const initialValues = {
    name: isLoggedIn ? user.name : '',
    email: isLoggedIn ? user.email : '',
    phone: isLoggedIn ? user.phone : '',
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setOwnerName(target.value);
        break;

      case 'email':
        setOwnerEmail(target.value);
        break;

      case 'phone':
        setOwnerPhone(target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h3 className={styles.title}>Контактна інформація</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={newOrderSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={styles.form} onChange={handleChange}>
            <AuthInput label="Ім’я" name="name" type="text" />
            <AuthInput label="Телефон" name="phone" type="text" />
            <AuthInput label="Пошта" name="email" type="email" />
            <div className={styles.actionWrapper}>
              <Link
                href="/products"
                onClick={closeModal}
                className={styles.continue}
              >
                Продовжити покупки
              </Link>
              <div className={styles.sumWrapper}>
                <span className={styles.sumText}>
                  Вартість замовлення
                </span>
                <div className={styles.sumCount}>
                  &#8372; {orderSum}
                </div>
              </div>
              <SubmitButton>Оформити замовлення</SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

CustomerInfo.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object,
  setOwnerName: PropTypes.func.isRequired,
  setOwnerEmail: PropTypes.func.isRequired,
  setOwnerPhone: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  orderSum: PropTypes.number.isRequired,
};

export default CustomerInfo;
