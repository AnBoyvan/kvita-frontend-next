import styles from './Footer.module.scss';
import Adress from './components/Adress/Adress';
import FooterContacts from './components/FooterContacts/FooterContacts';
import FooterNav from './components/FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Adress />
      <FooterNav />
      <FooterContacts />
    </footer>
  );
};

export default Footer;
