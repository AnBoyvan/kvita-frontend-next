import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { SearcModal } from '@/components';
import Icon from '@/ui/Icon/Icon';

import { ModalContext } from '@/hooks/useModal';

import styles from './HeaderNav.module.scss';
import navList from '@/config/navigation.json';

const HeaderNav = () => {
  const { pathname } = useRouter();

  const { openModal } = useContext(ModalContext);

  const links = navList.map(({ title, link }, index) => (
    <li key={index}>
      <Link
        href={link}
        className={
          pathname === link
            ? `${styles.navLink} active`
            : styles.navLink
        }
      >
        {title}
      </Link>
    </li>
  ));

  const handleSearchClick = () => {
    openModal(<SearcModal />);
  };

  return (
    <ul className={styles.navList}>
      {links}
      <li>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handleSearchClick}
        >
          <Icon id="search" />
        </button>
      </li>
    </ul>
  );
};

export default HeaderNav;
