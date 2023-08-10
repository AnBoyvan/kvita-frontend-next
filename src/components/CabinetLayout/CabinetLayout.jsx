import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from './CabinetLayout.module.scss';
import LogoutButton from '@/ui/Buttons/LogoutButton';
import Container from '../Container/Container';
import UserNav from './components/UserNav';
import AdminNav from './components/AdminNav';

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

export default CabinetLayout;
