import PropTypes from 'prop-types';

import { EditContainer } from '..';

import styles from './ProductDescription.module.scss';

const ProductDescription = ({ description, setDescription }) => {
  return (
    <EditContainer title="Опис">
      <textarea
        type="text"
        value={description}
        className={styles.input}
        rows="10"
        onChange={e => setDescription(e.target.value)}
      />
    </EditContainer>
  );
};

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default ProductDescription;
