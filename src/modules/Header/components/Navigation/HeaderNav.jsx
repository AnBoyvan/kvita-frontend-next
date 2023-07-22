import styles from './HeaderNav.module.scss';
import navList from '@/data/navigation.json';
import { Icon } from '@/ui/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderNav = () => {
  const { pathname } = useRouter();

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
  return (
    <ul className={styles.navList}>
      {links}
      <li>
        <button type="button" className={styles.navBtn}>
          <Icon id="search" />
        </button>
      </li>
      <li>
        <button type="button" className={styles.navBtn}>
          <Icon id="cart" />
        </button>
      </li>
    </ul>
  );
};

export default HeaderNav;
