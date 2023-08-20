import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './DiscountFilter.module.scss';

const DiscountFilter = ({ current, setCurrent }) => {
  const handleSliderChange = ([min, max]) => {
    setCurrent({ minDiscount: min, maxDiscount: max });
  };

  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.title}>Знижка:</h3>
        <label>
          {current.minDiscount}% - {current.maxDiscount}%
        </label>
        <Slider
          range
          min={0}
          max={100}
          step={1}
          value={[current.minDiscount, current.maxDiscount]}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

DiscountFilter.propTypes = {
  current: PropTypes.shape({
    minDiscount: PropTypes.number.isRequired,
    maxDiscount: PropTypes.number.isRequired,
  }).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default DiscountFilter;
