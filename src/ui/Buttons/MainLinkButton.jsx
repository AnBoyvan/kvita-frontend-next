import Link from 'next/link';
import styles from './Buttons.module.scss';

const MainLinkButton = ({ children, link }) => {
  return (
    <Link href={link} className={styles.mainBtn}>
      {children}
    </Link>
  );
};

export default MainLinkButton;
