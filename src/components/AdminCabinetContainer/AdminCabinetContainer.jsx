import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import CabinetLayout from '../CabinetLayout/CabinetLayout';

import { useAuth } from '@/hooks/useAuth';

import styles from './AdminCabinetContainer.module.scss';

const AdminCabinetContainer = ({ children, title }) => {
  const { replace } = useRouter();
  const { isLoggedIn, managerAccess } = useAuth();

  useEffect(() => {
    if (isLoggedIn && !managerAccess) {
      replace('/');
    }
  }, [isLoggedIn, managerAccess, replace]);

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
