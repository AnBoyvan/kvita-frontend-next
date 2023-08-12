import PropTypes from 'prop-types';

import { EditContainer } from '..';

import styles from './ProductName.module.scss';

const ProductName = ({ name, setName }) => {
  return (
    <EditContainer title="Назва">
      <input
        name="name"
        type="text"
        value={name}
        required
        className={styles.input}
        onChange={e => setName(e.target.value)}
      />
    </EditContainer>
  );
};

ProductName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default ProductName;
