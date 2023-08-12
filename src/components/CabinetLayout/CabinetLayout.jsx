import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Container from '@/components/Container/Container';
import { AdminNav, UserNav } from './components';
import { LogoutButton } from '@/ui/Buttons';

import { useAuth } from '@/hooks/useAuth';

import styles from './CabinetLayout.module.scss';

const CabinetLayout = ({ children }) => {
  const { replace } = useRouter();
  const { isLoggedIn, token, user } = useAuth();

  const adminRoles = ['manager', 'admin', 'superuser'];

  const adminCheck = Boolean(
    isLoggedIn && adminRoles.includes(user?.role)
  );

  useEffect(() => {
    if (!isLoggedIn && !token) {
      replace('/');
    }
  }, [isLoggedIn, replace, token]);
  return (
    <Container>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          {adminCheck && <AdminNav />}
          <UserNav />
          <div className={styles.logoutWrapper}>
            <LogoutButton />
          </div>
        </aside>
        <div className={styles.content}>{children}</div>
      </div>
    </Container>
  );
};

CabinetLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CabinetLayout;
