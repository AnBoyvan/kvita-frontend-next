import { useContext, useState } from 'react';

import { Options } from '@/ui/Inputs';
import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';

import { ModalContext } from '@/hooks/useModal';
import { updateAdmin } from '@/services/admin';

import styles from './HeroType.module.scss';
import admin from '@/config/admin.json';

const ChangeType = () => {
  const { closeModal } = useContext(ModalContext);
  const { hero, heroTypes } = admin;
  const [currentType, setCurrentType] = useState(hero);

  const handleClick = async () => {
    const updatedConfig = {
      ...admin,
      hero: currentType,
    };
    updateAdmin(updatedConfig);
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalTitle}>Тип головної сторінки:</div>
      <div className={styles.modalOptions}>
        {heroTypes.map(({ type, title }) => (
          <Options
            key={type}
            action={() => setCurrentType(type)}
            name="heroTypes"
            value={type}
            title={title}
            checked={type == currentType}
          />
        ))}
      </div>
      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>Змінити</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

export default ChangeType;
