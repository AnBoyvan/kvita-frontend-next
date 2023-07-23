import styles from './HeaderNav.module.scss';
import navList from '@/data/navigation.json';
import { Icon } from '@/ui/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchModal from '@/modules/Header/components/SearchModal/SearchModal';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';

const HeaderNav = () => {
  const { pathname } = useRouter();

  const { closeModal, openModal } = useContext(ModalContext);

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
    openModal(<SearchModal action={closeModal} />);
  };

  const handleCartClick = () => {
    closeModal();
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
      <li>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handleCartClick}
        >
          <Icon id="cart" />
        </button>
      </li>
    </ul>
  );
};

export default HeaderNav;
