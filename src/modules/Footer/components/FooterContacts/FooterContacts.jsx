import Link from 'next/link';
import contacts from '@/config/contacts.json';

import styles from './FooterContacts.module.scss';
import { Icon } from '@/ui/Icon/Icon';

const FooterContacts = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>контакти:</h3>
      <Link
        type="tel"
        href={`tel:${contacts.phone}`}
        className={styles.phoneLink}
      >
        <Icon id="mobile" />
        <span className={styles.phone}>{contacts.phone}</span>
      </Link>
      <div className={styles.social}>
        <Link
          href={contacts.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.facebook}
        >
          <Icon id="facebook" />
        </Link>
        <Link
          href={contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagram}
        >
          <Icon id="instagram" />
        </Link>
        <Link
          href={contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegram}
        >
          <Icon id="telegram" />
        </Link>
      </div>
    </div>
  );
};

export default FooterContacts;
