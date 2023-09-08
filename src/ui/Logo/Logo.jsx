import Link from 'next/link';
import Image from 'next/image';

import Name from './Name';

import styles from './Logo.module.scss';
import logo from '/public/images/logo-icon.png';

const Logo = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image src={logo} alt="logo" width="30" />
      <div className={styles.name}>
        <Name />
      </div>
    </Link>
  );
};

export default Logo;
