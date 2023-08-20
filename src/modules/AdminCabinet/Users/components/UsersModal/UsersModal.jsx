import PropTypes from 'prop-types';

import styles from './UsersModal.module.scss';
import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { formatDate } from '@/utils/helpers/formatDate';
import admin from '@/config/admin.json';
import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

const UsersModal = ({ user }) => {
  const { closeModal } = useContext(ModalContext);

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

  const handleClick = () => {};

  const handleChange = e => {
    console.log(toEnglish(e.target.value));
  };

  const optionsList = admin.roles.map(({ value, title }) => (
    <option key={value} value={title} className={styles.option}>
      {title}
    </option>
  ));

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
            className={styles.input}
            value={toUkrainian(role)}
            onChange={handleChange}
          >
            {optionsList}
          </select>
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

UsersModal.propTypes = {};

export default UsersModal;
