import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';

import { SearcModal } from '@/components';
import Logo from '@/ui/Logo/Logo';
import Icon from '@/ui/Icon/Icon';
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher';

import { ModalContext } from '@/hooks/useModal';

import styles from './DropdownMenu.module.scss';
import navList from '@/config/navigation.json';

const DropdownMenu = () => {
  const { pathname } = useRouter();

  const { closeModal, openModal } = useContext(ModalContext);

  const handleSearchClick = () => {
    openModal(<SearcModal />);
  };

  const links = navList.map(({ title, link }, index) => (
    <li
      key={index}
      className={
        pathname === link
          ? `${styles.navLink} active`
          : styles.navLink
      }
    >
      <Link href={link} onClick={closeModal}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo styles={{ display: 'flex', flexDirection: 'row' }} />
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeBtn}
        >
          <Icon id="close" />
        </button>
      </div>
      <ul className={styles.navList}>
        {links}
        <li>
          <button
            type="button"
            className={styles.navBtn}
            onClick={handleSearchClick}
          >
            <Icon id="search" />
            <span>Пошук</span>
          </button>
        </li>
      </ul>
      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default DropdownMenu;
