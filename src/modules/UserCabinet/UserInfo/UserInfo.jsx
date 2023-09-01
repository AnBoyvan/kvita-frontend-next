import { useContext } from 'react';

import Icon from '@/ui/Icon/Icon';
import UserInfoModal from './UserInfoModal';

import { ModalContext } from '@/hooks/useModal';
import { useAuth } from '@/hooks/useAuth';

import styles from './UserInfo.module.scss';

const UserInfo = () => {
  const { user } = useAuth();
  const { openModal } = useContext(ModalContext);

  const { _id, name, email, phone, discount } = user;

  const handleChange = () => {
    openModal(<UserInfoModal _id={_id} name={name} phone={phone} />);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <span>Ім’я:</span>
        <span>{name}</span>
        <button
          type="button"
          className={styles.changeBtn}
          onClick={handleChange}
        >
          <Icon id="pencil" />
        </button>
      </div>
      <div className={styles.infoWrapper}>
        <span>Телефон:</span>
        <span>{phone}</span>
        <button
          type="button"
          className={styles.changeBtn}
          onClick={handleChange}
        >
          <Icon id="pencil" />
        </button>
      </div>
      <div className={styles.infoWrapper}>
        <span>Пошта:</span>
        <span>{email}</span>
      </div>

      <div className={styles.infoWrapper}>
        <span>Знижка:</span>
        <span>{discount}%</span>
      </div>
    </div>
  );
};

export default UserInfo;
