import { useRouter } from 'next/router';
import Link from 'next/link';
import navList from '@/config/navigation.json';
import styles from './FooterNav.module.scss';

const FooterNav = () => {
  const { pathname } = useRouter();

  const links = navList.map(({ title, link }, index) => (
    <li
      key={index}
      className={
        pathname === link
          ? `${styles.navLink} active`
          : styles.navLink
      }
    >
      <Link href={link}>{title}</Link>
    </li>
  ));

  return <ul className={styles.navList}>{links}</ul>;
};

export default FooterNav;
