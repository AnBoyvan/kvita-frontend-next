import styles from './ProductPrice.module.scss';
import EditContainer from '../EditContainer/EditContainer';

const ProductPrice = ({ price, setPrice }) => {
  return (
    <EditContainer title="Ціна">
      <input
        type="number"
        value={price}
        min="0"
        required
        className={styles.input}
        onChange={e => setPrice(e.target.value)}
      />
      <span className={styles.currency}>ГРН</span>
    </EditContainer>
  );
};

export default ProductPrice;
