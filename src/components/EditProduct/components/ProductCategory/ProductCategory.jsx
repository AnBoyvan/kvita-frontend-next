import PropTypes from 'prop-types';

import { EditContainer } from '..';

import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

import styles from './ProductCategory.module.scss';

const ProductCategory = ({ category, setCategory }) => {
  const options = ['pie', 'cake', 'dessert', 'other'];

  const handleChange = e => {
    setCategory(toEnglish(e.target.value));
  };

  const optionsList = options.map(option => (
    <option
      key={option}
      value={toUkrainian(option)}
      className={styles.option}
    >
      {toUkrainian(option)}
    </option>
  ));

  return (
    <EditContainer title="Ціна">
      <select
        className={styles.input}
        value={toUkrainian(category)}
        onChange={handleChange}
      >
        <option className={styles.option} value="">
          Оберіть категорію
        </option>
        {optionsList}
      </select>
    </EditContainer>
  );
};

ProductCategory.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ProductCategory;
