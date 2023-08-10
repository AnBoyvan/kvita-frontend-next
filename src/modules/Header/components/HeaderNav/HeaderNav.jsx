import styles from './HeaderNav.module.scss';
import navList from '@/config/navigation.json';
import { Icon } from '@/ui/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchForm from '@/components/SearchModal/SearcModal';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';

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
    openModal(<SearchForm />);
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
