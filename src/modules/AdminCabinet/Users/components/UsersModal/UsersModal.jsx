import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';

import { ModalContext } from '@/hooks/useModal';
import { useUsers } from '@/hooks/useUsers';
import { formatDate } from '@/utils/helpers/formatDate';
import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

import styles from './UsersModal.module.scss';
import admin from '@/config/admin.json';

const UsersModal = ({ user }) => {
  const { closeModal } = useContext(ModalContext);
  const { editUser } = useUsers();

  const {
    _id,
    name,
    phone,
    email,
    discount,
    role,
    createdAt,
    verify,
  } = user;

  const [currentRole, setCurrentRole] = useState(role);
  const [currentDiscount, setCurrentDiscount] = useState(discount);

  const handleChange = e => {
    setCurrentRole(toEnglish(e.target.value));
  };

  const optionsList = admin.roles.map(({ value, title }) => (
    <option key={value} value={title} className={styles.option}>
      {title}
    </option>
  ));

  const handleClick = () => {
    const editedUser = {
      _id,
      data: { role: currentRole, discount: currentDiscount },
    };
    editUser(editedUser);
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.userName}>{name}</h2>
      <div className={styles.userInfo}>
        <div className={styles.userInfoWrapper}>
          <span>Телефон:</span>
          <span>{phone}</span>
        </div>
        <div className={styles.userInfoWrapper}>
          <span>Пошта:</span>
          <span>{email}</span>
        </div>
        <div className={styles.userInfoWrapper}>
          <span>Дата реєстрації:</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className={styles.userInfoWrapper}>
          <span>Верифікація:</span>
          <span>{verify ? 'Так' : 'Ні'}</span>
        </div>
        <div className={styles.userInfoWrapper}>
          <span>Тип:</span>
          <select
            className={styles.roles}
            value={toUkrainian(currentRole)}
            onChange={handleChange}
          >
            {optionsList}
          </select>
        </div>
        <div className={styles.userInfoWrapper}>
          <span>Знижка:</span>
          <label htmlFor="">
            <input
              type="number"
              value={currentDiscount}
              min={0}
              max={100}
              step={1}
              className={styles.discount}
              onChange={e => setCurrentDiscount(e.target.value)}
            />
            &nbsp;%
          </label>
        </div>
      </div>
      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>Готово</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

UsersModal.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string.isRequired,
    discount: PropTypes.number,
    role: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    verify: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UsersModal;
