import { useRouter } from 'next/router';
import Link from 'next/link';

import Icon from '@/ui/Icon/Icon';

import styles from '../CabinetLayout.module.scss';

const UserNav = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.userNav}>
      <Link
        href="/cabinet/info"
        className={
          pathname === '/cabinet/info'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="user" />
        </div>
        <div className={styles.navText}>Особисті&nbsp;дані</div>
      </Link>
      <Link
        href="/cabinet/my-orders"
        className={
          pathname === '/cabinet/my-orders'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="orders" />
        </div>
        <div className={styles.navText}>Мої&nbsp;замовлення</div>
      </Link>
      <Link
        href="/cabinet/favorites"
        className={
          pathname === '/cabinet/favorites'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="unliked" />
        </div>

        <div className={styles.navText}>Улюблені</div>
      </Link>
      <Link
        href="/cabinet/my-reviews"
        className={
          pathname === '/cabinet/my-reviews'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="comments" />
        </div>

        <div className={styles.navText}>Відгуки</div>
      </Link>
    </nav>
  );
};

export default UserNav;
