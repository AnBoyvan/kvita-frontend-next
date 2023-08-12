import { useRouter } from 'next/router';
import Link from 'next/link';

import Icon from '@/ui/Icon/Icon';

import styles from '../CabinetLayout.module.scss';

const AdminNav = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.adminNav}>
      <Link
        href="/cabinet/admin"
        className={
          pathname === '/cabinet/admin'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="dashboard" />
        </div>
        <div className={styles.navText}>Адміністратор</div>
      </Link>
      <Link
        href="/cabinet/create"
        className={
          pathname === '/cabinet/create'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="increase" />
        </div>
        <div className={styles.navText}>Створити</div>
      </Link>
      <Link
        href="/cabinet/products"
        className={
          pathname === '/cabinet/products'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="products" />
        </div>

        <div className={styles.navText}>Продукція</div>
      </Link>
      <Link
        href="/cabinet/orders"
        className={
          pathname === '/cabinet/orders'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="ordersList" />
        </div>

        <div className={styles.navText}>Замовлення</div>
      </Link>
      <Link
        href="/cabinet/users"
        className={
          pathname === '/cabinet/users'
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink
        }
      >
        <div className={styles.navIcon}>
          <Icon id="users" />
        </div>

        <div className={styles.navText}>Користувачі</div>
      </Link>
    </nav>
  );
};

export default AdminNav;
