import { useContext } from 'react';

import AdministrationSection from '../AdministrationSection/AdministrationSection';
import AnnouncementOption from './AnnouncementOption';
import ChangeType from './ChangeType';
import HeroOption from './HeroOption';
import ProductOption from './ProductOption';

import { ModalContext } from '@/hooks/useModal';

import admin from '@/config/admin.json';

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
