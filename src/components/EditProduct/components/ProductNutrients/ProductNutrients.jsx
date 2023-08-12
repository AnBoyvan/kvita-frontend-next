import PropTypes from 'prop-types';

import { EditContainer } from '..';

import styles from './ProductNutrients.module.scss';

const ProductNutrients = ({ nutrients, setNutrients }) => {
  const { calories, proteins, fats, carbohydrates } = nutrients;
  const handleChange = e => {
    const field = e.target.name;
    const value = Number(e.target.value);
    const newNutrients = {
      ...nutrients,
      [field]: value,
    };

    setNutrients(newNutrients);
  };

  return (
    <EditContainer title="Нутрієнти">
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.title}>Калорії</div>
          <div className={styles.value}>
            <input
              type="number"
              name="calories"
              value={calories}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>Калорії</div>
          <div className={styles.value}>
            <input
              type="number"
              name="proteins"
              value={proteins}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>Білки</div>
          <div className={styles.value}>
            <input
              type="number"
              name="fats"
              value={fats}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>Вуглеводи</div>
          <div className={styles.value}>
            <input
              type="number"
              name="carbohydrates"
              value={carbohydrates}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </EditContainer>
  );
};

ProductNutrients.propTypes = {
  nutrients: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fats: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
  setNutrients: PropTypes.func.isRequired,
};

export default ProductNutrients;
