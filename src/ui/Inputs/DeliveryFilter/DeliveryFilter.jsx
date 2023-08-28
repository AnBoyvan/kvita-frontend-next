import PropTypes from 'prop-types';

import styles from './DeliveryFilter.module.scss';

const DeliveryFilter = ({ current, setCurrent }) => {
  const deliveryOptons = [
    { value: 'all', title: 'всі' },
    { value: 'true', title: 'з доставкою' },
    { value: 'false', title: 'без доставки' },
  ];

  const list = deliveryOptons.map(({ value, title }, index) => (
    <div key={index} className={styles.wrapper}>
      <input
        name="delivery"
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
      <h3 className={styles.title}>Доставка:</h3>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

DeliveryFilter.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default DeliveryFilter;
