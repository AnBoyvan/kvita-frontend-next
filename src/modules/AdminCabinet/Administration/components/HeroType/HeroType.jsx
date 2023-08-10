import { useContext, useState } from 'react';
import AdministrationSection from '../AdministrationSection/AdministrationSection';
import styles from './HeroType.module.scss';
import { ModalContext } from '@/hooks/useModal';
import admin from '@/config/admin.json';
import ProductOption from './ProductOption';
import HeroOption from './HeroOption';
import AnnouncementOption from './AnnouncementOption';
import ChangeType from './ChangeType';

const HeroType = () => {
  const { openModal } = useContext(ModalContext);
  const { hero } = admin;

  const changeType = () => {
    openModal(<ChangeType />);
  };

  return (
    <AdministrationSection title="Домашня сторінка">
      {hero === 'product' && <ProductOption action={changeType} />}
      {hero === 'hero' && <HeroOption action={changeType} />}
      {hero === 'announcement' && (
        <AnnouncementOption action={changeType} />
      )}
    </AdministrationSection>
  );
};

export default HeroType;
