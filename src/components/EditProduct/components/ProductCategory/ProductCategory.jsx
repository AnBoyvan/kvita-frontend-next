import styles from './ProductCategory.module.scss';
import EditContainer from '../EditContainer/EditContainer';
import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

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

export default ProductCategory;
