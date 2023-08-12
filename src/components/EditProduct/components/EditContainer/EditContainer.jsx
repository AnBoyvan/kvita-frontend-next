import PropTypes from 'prop-types';

import styles from './EditContainer.module.scss';

const EditContainer = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

EditContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default EditContainer;
