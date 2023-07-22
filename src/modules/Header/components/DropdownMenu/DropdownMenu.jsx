import styles from './DropdownMenu.module.scss';
import navList from '@/data/navigation.json';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '@/ui/Logo/Logo';
import { Icon } from '@/ui/Icon/Icon';
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher';
import SearchModal from '@/modules/Header/components/SearchModal/SearchModal';

const DropdownMenu = () => {
  const { pathname } = useRouter();

  const { closeModal, openModal } =
    useContext(ModalContext);

  const handleSearchClick = () => {
    openModal(<SearchModal action={closeModal} />);
  };

  const handleCartClick = () => {
    closeModal();
  };

  const links = navList.map(({ title, link }, index) => (
    <li
      key={index}
      className={
        pathname === link
          ? `${styles.navLink} active`
          : styles.navLink
      }
    >
      <Link href={link} onClick={closeModal}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo
          styles={{ display: 'flex', flexDirection: 'row' }}
        />
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeBtn}
        >
          <Icon id="close" />
        </button>
      </div>
      <ul className={styles.navList}>
        {links}
        <li>
          <button
            type="button"
            className={styles.navBtn}
            onClick={handleSearchClick}
          >
            <Icon id="search" />
            <span>Пошук</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles.navBtn}
            onClick={handleCartClick}
          >
            <Icon id="cart" />
            <span>Корзина</span>
          </button>
        </li>
      </ul>
      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default DropdownMenu;
