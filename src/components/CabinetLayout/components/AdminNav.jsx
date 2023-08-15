import { useRouter } from 'next/router';
import Link from 'next/link';

import Icon from '@/ui/Icon/Icon';

import styles from '../CabinetLayout.module.scss';

const AdminNav = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.adminNav}>
      <Link
        href="/admin/administrating"
        className={
          pathname === '/admin/administrating'
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
        href="/admin/create"
        className={
          pathname === '/admin/create'
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
        href="/admin/products"
        className={
          pathname === '/admin/products'
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
        href="/admin/orders"
        className={
          pathname === '/admin/orders'
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
        href="/admin/users"
        className={
          pathname === '/admin/users'
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
