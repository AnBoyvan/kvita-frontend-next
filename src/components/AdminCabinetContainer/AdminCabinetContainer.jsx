import PropTypes from 'prop-types';
import CabinetLayout from '@/components/CabinetLayout/CabinetLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
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

AdminCabinetContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default AdminCabinetContainer;
