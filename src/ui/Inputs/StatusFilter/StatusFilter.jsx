import PropTypes from 'prop-types';

import styles from './StatusFilter.module.scss';
import admin from '@/config/admin.json';

const StatusFilter = ({ current, setCurrent }) => {
  const handleChange = e => {
    const option = e.target.value;
    if (current.includes(option)) {
      setCurrent(current.filter(item => item !== option));
    } else {
      setCurrent([...current, option]);
    }
  };

  const list = admin.statuses.map(({ value, title }) => (
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
      <h3 className={styles.title}>Статус замовлення:</h3>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

StatusFilter.propTypes = {
  current: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default StatusFilter;
