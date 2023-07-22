import Logo from '@/ui/Logo/Logo';
import styles from './Header.module.scss';
import { Icon } from '@/ui/Icon/Icon';
import HeaderNav from './components/Navigation/HeaderNav';
import { useAuth } from '@/hooks/useAuth';
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={styles.container}>
      <Logo
        styles={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      />
      <HeaderNav />
      {isLoggedIn ? (
        <button type="button" className={styles.user}>
          <Icon id="user" />
        </button>
      ) : (
        <button type="button" className={styles.user}>
          <Icon id="login" />
        </button>
      )}

      <button type="button" className={styles.burger}>
        <Icon id="burger" />
      </button>
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
