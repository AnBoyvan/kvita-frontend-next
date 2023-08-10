import CabinetLayout from '@/components/CabinetLayout/CabinetLayout';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './AdminCabinetContainer.module.scss';

const adminRoles = ['manager', 'admin', 'superuser'];

const AdminCabinetContainer = ({ children, title }) => {
  const { replace } = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user.role && !adminRoles.includes(user.role)) {
      replace('/');
    }
  }, [replace, user.role]);

  return (
    <>
      <CabinetLayout>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>{title}</h1>
          {children}
        </div>
      </CabinetLayout>
    </>
  );
};

export default AdminCabinetContainer;
