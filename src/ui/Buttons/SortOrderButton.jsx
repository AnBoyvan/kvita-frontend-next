import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import styles from './Buttons.module.scss';

const SortOrderButton = ({ sortOrder, onChange }) => {
  const isChecked = Boolean(sortOrder === 'desc');

  return (
    <label
      className={`${styles.sortOrderBtnLabel} ${
        isChecked ? styles.checked : ''
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={styles.sortOrderBtnInput}
      />
      <Icon id="arrowUp" />
    </label>
  );
};

SortOrderButton.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortOrderButton;
