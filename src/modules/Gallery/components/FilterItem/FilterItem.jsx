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

export default FilterItem;
