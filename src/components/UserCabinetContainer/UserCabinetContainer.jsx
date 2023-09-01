import PropTypes from 'prop-types';

import CabinetLayout from '../CabinetLayout/CabinetLayout';

import styles from './UserCabinetContainer.module.scss';

const UserCabinetContainer = ({ children, title }) => {
  return (
    <>
      <CabinetLayout>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>{title}</h1>
          {children}
        </div>
      </CabinetLayout>
    </>
  );
};

UserCabinetContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default UserCabinetContainer;
