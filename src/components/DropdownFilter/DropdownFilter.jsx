import PropTypes from 'prop-types';
import { useState } from 'react';

import { SecondaryButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';

import styles from './DropdownFilter.module.scss';

const DropdownFilter = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    return;
  };

  return (
    <div className={styles.container}>
      <SecondaryButton onClick={toggleDropdown}>
        <span>Фільтр</span>
        <Icon id="filter" />
      </SecondaryButton>
      {isDropdownOpen && (
        <div className={styles.filters}>{children}</div>
      )}
    </div>
  );
};

DropdownFilter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownFilter;
