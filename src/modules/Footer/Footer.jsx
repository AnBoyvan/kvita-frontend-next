import { Address, FooterContacts, FooterNav } from './components';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Address />
      <FooterNav />
      <FooterContacts />
    </footer>
  );
};

export default Footer;
