import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);
import 'react-datepicker/dist/react-datepicker.css';

import styles from './PeriodFilter.module.scss';

const PeriodFilter = ({ title, current, setCurrent }) => {
  const { start, end } = current;

  const handleStartDateChange = date => {
    setCurrent({
      ...current,
      start: date.toISOString(),
    });
  };

  const handleEndDateChange = date => {
    setCurrent({
      ...current,
      end: date.toISOString(),
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.wrapper}>
        <span className={styles.dateTitle}>з</span>
        <DatePicker
          locale="uk"
          selected={start ? new Date(start) : null}
          dateFormat="dd.MM.yyyy"
          onChange={handleStartDateChange}
        />
      </div>
      <div className={styles.wrapper}>
        <span className={styles.dateTitle}>по</span>
        <DatePicker
          locale="uk"
          selected={end ? new Date(end) : null}
          dateFormat="dd.MM.yyyy"
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

PeriodFilter.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default PeriodFilter;
