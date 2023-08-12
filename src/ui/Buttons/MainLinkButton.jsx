import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Buttons.module.scss';

const MainLinkButton = ({ children, link }) => {
  return (
    <Link href={link} className={styles.mainBtn}>
      {children}
    </Link>
  );
};

MainLinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default MainLinkButton;
