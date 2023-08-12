import Link from 'next/link';

import Logo from '@/ui/Logo/Logo';

import styles from './Address.module.scss';

const Address = () => {
  return (
    <div className={styles.container}>
      <Logo
        styles={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      />
      <Link href="/about" className={styles.name}>
        Кондитерська студія &quot;КВіТа&quot;
      </Link>
      <Link
        href="https://www.google.com/maps?q=49.030460287330506,24.35892483480406"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.adress}
      >
        м.Калуш, вул. Олени Пчілки, 61
      </Link>
    </div>
  );
};

export default Address;
