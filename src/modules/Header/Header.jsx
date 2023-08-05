import { useAuth } from '@/hooks/useAuth';
import { ModalContext } from '@/hooks/useModal';
import { Icon } from '@/ui/Icon/Icon';
import Logo from '@/ui/Logo/Logo';
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Auth from '../Auth/Auth';
import styles from './Header.module.scss';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import HeaderNav from './components/HeaderNav/HeaderNav';
import useCartItemsTransfer from '@/hooks/useCartItemsTransfer';
import { getLocalCart } from '@/redux/localCart/localCart-selectors';
import { useSelector } from 'react-redux';
import { getCart } from '@/redux/auth/auth-selectors';
import Cart from '@/components/Cart/Cart';

const Header = () => {
  const { transferItems } = useCartItemsTransfer();
  const localCart = useSelector(getLocalCart);
  const userCart = useSelector(getCart);
  const { isLoggedIn } = useAuth();
  const { openModal } = useContext(ModalContext);

  const [currentCart, setCurrentCart] = useState(localCart);
  const [counter, setCounter] = useState(null);

  const openMenu = () => {
    openModal(<DropdownMenu />);
  };

  const handleLoginClick = () => {
    openModal(<Auth />);
  };

  const handleCartClick = () => {
    openModal(<Cart />);
  };

  useEffect(() => {
    setCurrentCart(isLoggedIn ? userCart : localCart);
    setCounter(currentCart.length);
  }, [currentCart.length, isLoggedIn, localCart, userCart]);

  useEffect(() => {
    if (isLoggedIn && localCart.length > 0) {
      transferItems();
    }
  }, [isLoggedIn, localCart.length, transferItems]);

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
      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.headerBtn}
          onClick={handleCartClick}
        >
          <Icon id="cart" />
          <span className={counter ? styles.count : styles.zeroCount}>
            {counter}
          </span>
        </button>
        {isLoggedIn ? (
          <Link href="/cabinet" className={styles.headerBtn}>
            <Icon id="user" />
          </Link>
        ) : (
          <button
            type="button"
            className={styles.headerBtn}
            onClick={handleLoginClick}
          >
            <Icon id="login" />
          </button>
        )}
      </div>
      <button
        type="button"
        className={styles.burger}
        onClick={openMenu}
      >
        <Icon id="burger" />
      </button>
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
