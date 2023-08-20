import PropTypes from 'prop-types';

import { EditContainer } from '..';

import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

import styles from './ProductCategory.module.scss';
import admin from '@/config/admin.json';

const ProductCategory = ({ category, setCategory }) => {
  const handleChange = e => {
    setCategory(toEnglish(e.target.value));
  };

  const optionsList = admin.categories.map(({ value, title }) => (
    <option key={value} value={title} className={styles.option}>
      {title}
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
