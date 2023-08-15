import PropTypes from 'prop-types';
import { useState } from 'react';

import { SecondaryButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';

import styles from './CategoryFilter.module.scss';
import admin from '@/config/admin.json';

const CategoryFilter = ({ current, setCurrent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    return;
  };

  const handleChange = e => {
    const option = e.target.value;
    if (current.includes(option)) {
      setCurrent(current.filter(item => item !== option));
    } else {
      setCurrent([...current, option]);
    }
  };

  const list = admin.categories.map(({ value, title }) => (
    <li key={value}>
      <label className={styles.label}>
        <input
          type="checkbox"
          value={value}
          checked={current.includes(value)}
          onChange={handleChange}
        />
        <div className={styles.checkmark}></div>
        <span>{title}</span>
      </label>
    </li>
  ));

  return (
    <div className={styles.container}>
      <SecondaryButton onClick={toggleDropdown}>
        <span>Категорії</span>
        <Icon id="filter" />
      </SecondaryButton>
      {isDropdownOpen && <ul className={styles.list}>{list}</ul>}
    </div>
  );
};

CategoryFilter.propTypes = {};

export default CategoryFilter;
