import { useRouter } from 'next/router';
import Link from 'next/link';

import Icon from '@/ui/Icon/Icon';

import styles from '../CabinetLayout.module.scss';
import { getAllOrders } from '@/services/kvita-API/orders';
import { useEffect, useState } from 'react';

const AdminNav = () => {
  const { pathname } = useRouter();

  const [hasNewOrder, setHasNewOrder] = useState(false);

  const checkForNewOrders = async () => {
    try {
      const newOrders = await getAllOrders('status=new');
      setHasNewOrder(newOrders);
    } catch (error) {
      console.error('Помилка перевірки нових замовлень:', error);
    }
  };

  useEffect(() => {
    checkForNewOrders();

    const interval = setInterval(checkForNewOrders, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.adminNav}>
      {/* <Link
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
      </Link> */}
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
        <span
          className={
            hasNewOrder.length > 0 ? styles.count : styles.zeroCount
          }
        >
          {hasNewOrder.length}
        </span>
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
