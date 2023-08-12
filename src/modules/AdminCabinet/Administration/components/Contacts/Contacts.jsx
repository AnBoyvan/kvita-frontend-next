import { useContext } from 'react';

import { MainButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';
import AdministrationSection from '../AdministrationSection/AdministrationSection';
import ContactsModal from './ContactsModal';

import { ModalContext } from '@/hooks/useModal';

import styles from './Contacts.module.scss';
import contacts from '@/config/contacts.json';

const Contacts = () => {
  const { phone, email, facebook, instagram, telegram } = contacts;

  const { openModal, closeModal } = useContext(ModalContext);

  const handleUpdate = item => {
    openModal(<ContactsModal contact={item} />);
  };

  return (
    <AdministrationSection title="Контакти">
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id="mobile" />
          </span>
          <span className={styles.text}>{phone}</span>
          <button
            type="button"
            className={styles.change}
            onClick={() => handleUpdate({ phone })}
          >
            <Icon id="pencil" />
          </button>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id="mail" />
          </span>
          <span className={styles.text}>{email}</span>
          <button
            type="button"
            className={styles.change}
            onClick={() => handleUpdate({ email })}
          >
            <Icon id="pencil" />
          </button>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id="facebook" />
          </span>
          <span className={styles.text}>{facebook}</span>
          <button
            type="button"
            className={styles.change}
            onClick={() => handleUpdate({ facebook })}
          >
            <Icon id="pencil" />
          </button>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id="instagram" />
          </span>
          <span className={styles.text}>{instagram}</span>
          <button
            type="button"
            className={styles.change}
            onClick={() => handleUpdate({ instagram })}
          >
            <Icon id="pencil" />
          </button>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id="telegram" />
          </span>
          <span className={styles.text}>{telegram}</span>
          <button
            type="button"
            className={styles.change}
            onClick={() => handleUpdate({ telegram })}
          >
            <Icon id="pencil" />
          </button>
        </li>
      </ul>
      <div className={styles.add}>
        <MainButton onClick={handleUpdate}>Редагувати</MainButton>
      </div>
    </AdministrationSection>
  );
};

export default Contacts;
