import styles from './ProductNutrients.module.scss';
import EditContainer from '../EditContainer/EditContainer';

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
      {/* <table className={styles.table}>
        <tbody className={styles.table}>
          <tr className={styles.tableRow}>
            <td className={styles.title}>Калорії</td>
            <td className={styles.value}>
              <input
                type="number"
                name="calories"
                value={nutrients.calories}
                onChange={handleChange}
                className={styles.input}
              />
            </td>
          </tr>
        </tbody>
      </table> */}
    </EditContainer>
  );
};

export default ProductNutrients;

// <input
// type="number"
// value={price}
// min="0"
// required
// className={styles.input}
// onChange={e => setPrice(e.target.value)}
// />
// <span className={styles.currency}>ГРН</span>
