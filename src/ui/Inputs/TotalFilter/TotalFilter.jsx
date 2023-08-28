import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './TotalFilter.module.scss';

const TotalFilter = ({ current, setCurrent }) => {
  const handleSliderChange = ([min, max]) => {
    setCurrent({ totalMin: min, totalMax: max });
  };

  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.title}>Вартість замовлення:</h3>
        <label>
          {current.totalMin} - {current.totalMax}
        </label>
        <Slider
          range
          min={0}
          max={100000}
          step={1}
          value={[current.totalMin, current.totalMax]}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

TotalFilter.propTypes = {
  current: PropTypes.shape({
    totalMin: PropTypes.number,
    totalMax: PropTypes.number,
  }).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default TotalFilter;
