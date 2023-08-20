import PropTypes from 'prop-types';

import styles from './VerifiedFilter.module.scss';

const VerifiedFilter = ({ current, setCurrent }) => {
  const verifedOptons = [
    { value: 'all', title: 'всі' },
    { value: 'true', title: 'верифіковані' },
    { value: 'false', title: 'неверифіковані' },
  ];

  const list = verifedOptons.map(({ value, title }, index) => (
    <div key={index} className={styles.wrapper}>
      <input
        name="verification"
        id={value}
        className={styles.input}
        type="radio"
        onChange={() => {
          setCurrent(value);
        }}
        checked={current === value}
      />
      <label htmlFor={value} className={styles.label}>
        <span className={styles.custom}></span>
        {title}
      </label>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Верифікація:</h3>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

VerifiedFilter.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default VerifiedFilter;
