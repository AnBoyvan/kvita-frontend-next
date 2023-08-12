import PropTypes from 'prop-types';

import styles from './AdministrationSection.module.scss';

const AdministrationSection = ({ children, title }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

AdministrationSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AdministrationSection;
