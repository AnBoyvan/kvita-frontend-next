import PropTypes from 'prop-types';

import { EditContainer } from '..';

import styles from './ProductPrice.module.scss';

const ProductPrice = ({ price, setPrice }) => {
  return (
    <EditContainer title="Ціна">
      <input
        type="number"
        value={price}
        min="0"
        required
        className={styles.input}
        onChange={e => setPrice(Number(e.target.value))}
      />
      <span className={styles.currency}>ГРН</span>
    </EditContainer>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  setPrice: PropTypes.func.isRequired,
};

export default ProductPrice;
