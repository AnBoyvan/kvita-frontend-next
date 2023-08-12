import PropTypes from 'prop-types';
import styles from './FilterItem.module.scss';

const FilterItem = ({ option, checked, onChange }) => {
  return (
    <li
      className={
        checked ? `${styles.item} ${styles.checked}` : styles.item
      }
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          value={option}
          onChange={onChange}
          className={styles.input}
          checked={checked}
        />
        {option}
      </label>
    </li>
  );
};

FilterItem.propTypes = {
  option: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterItem;
