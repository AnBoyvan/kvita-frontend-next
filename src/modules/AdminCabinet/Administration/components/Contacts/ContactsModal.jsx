import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';

import { ModalContext } from '@/hooks/useModal';
import { updateContacts } from '@/services/admin';

import styles from './Contacts.module.scss';
import contacts from '@/config/contacts.json';

const ContactsModal = ({ contact }) => {
  const fieldName = Object.keys(contact)[0];
  const { closeModal } = useContext(ModalContext);
  const [newValue, setNewValue] = useState(contact[fieldName] || '');

  const changeContacts = () => {
    const newContacts = {
      ...contacts,
      [fieldName]: newValue,
    };
    updateContacts(newContacts);
    closeModal();
  };

  const setTitle = field => {
    switch (field) {
      case 'phone':
        return 'Телефон';
      case 'email':
        return 'Пошта';
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
      case 'telegram':
        return 'Telegram';
      default:
        return 'Контакт';
    }
  };

  const pageTiitle = setTitle(fieldName);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalTitle}>{pageTiitle}</div>
      <input
        type="text"
        value={newValue}
        className={styles.modalInput}
        onChange={e => setNewValue(e.target.value)}
      />
      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={changeContacts}>Змінити</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

ContactsModal.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsModal;
