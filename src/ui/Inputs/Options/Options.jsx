import PropTypes from 'prop-types';

import styles from './Options.module.scss';

const Options = ({ action, name, value, title, checked }) => {
  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        id={value}
        className={styles.input}
        type="radio"
        onChange={action}
        checked={checked}
      />
      <label htmlFor={value} className={styles.label}>
        <span className={styles.custom}></span>
        {title}
      </label>
    </div>
  );
};

Options.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Options;
