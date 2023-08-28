import PropTypes from 'prop-types';

import styles from './ProductsFilter.module.scss';
import { useState } from 'react';
import Icon from '@/ui/Icon/Icon';
import { useFetchProducts } from '@/hooks/useProducts';
import { sortData } from '@/utils/helpers/sortData';

const ProductsFilter = ({ current, setCurrent }) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [pickedProducts, setPickedProducts] = useState([]);

  const { products } = useFetchProducts('limit=1000');

  const sortedProducts = products
    ? sortData({
        data: products.result,
        fieldName: 'name',
        type: 'asc',
      })
    : null;

  const filteredProducts = sortedProducts?.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePickOption = e => {
    const optionId = e.target.dataset.id;
    const picked = filteredProducts?.filter(
      product => product._id === optionId
    );
    setCurrent([...current, picked[0]._id]);
    setPickedProducts([...pickedProducts, picked[0]]);
    setSearch('');
  };

  const options = filteredProducts?.map(({ _id, name }) => (
    <li
      key={_id}
      className={styles.option}
      onClick={handlePickOption}
      data-id={_id}
    >
      {name}
    </li>
  ));

  const removeFromPicked = _id => {
    setPickedProducts(
      pickedProducts.filter(product => product._id !== _id)
    );
    setCurrent(current.filter(product => product !== _id));
  };

  const productsList = pickedProducts.map(({ _id, name }) => (
    <li key={_id} className={styles.productsListItem}>
      <span>{name}</span>
      <button
        type="button"
        onClick={() => removeFromPicked(_id)}
        className={styles.productsListBtn}
      >
        <Icon id="close" />
      </button>
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Продукція:</div>
      <div className={styles.search}>
        <input
          type="text"
          value={search}
          className={styles.searchInput}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 200);
          }}
        />
        <div className={styles.searchIcon}>
          {!isOpen && <Icon id="dropdown" />}
        </div>
        {isOpen && <ul className={styles.optionsList}>{options}</ul>}
      </div>
      <ul className={styles.productsList}>{productsList}</ul>
    </div>
  );
};

ProductsFilter.propTypes = {
  current: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default ProductsFilter;
