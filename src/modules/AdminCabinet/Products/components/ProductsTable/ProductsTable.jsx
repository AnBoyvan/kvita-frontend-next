import PropTypes from 'prop-types';
import Link from 'next/link';

import SortOrderButton from '@/ui/Buttons/SortOrderButton';

import { toUkrainian } from '@/utils/helpers/categoryTranslate';
import { formatDate } from '@/utils/helpers/formatDate';

import styles from './ProductsTable.module.scss';

const headList = [
  { value: 'name', title: 'Назва' },
  { value: 'price', title: 'Ціна' },
  { value: 'category', title: 'Категорія' },
  { value: 'createdAt', title: 'Створено' },
  { value: 'updatedAt', title: 'Редаговано' },
];

const ProductsTable = ({
  products,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) => {
  const tableHead = headList.map(({ value, title }) => (
    <div
      key={value}
      className={styles.headerCell}
      onClick={() => setSortField(value)}
    >
      <span>{title}</span>
      {sortField === value && (
        <SortOrderButton
          sortOrder={sortOrder}
          onChange={setSortOrder}
        />
      )}
    </div>
  ));

  const tableRows =
    products &&
    products.result.map(
      ({ _id, name, price, category, createdAt, updatedAt }) => (
        <div key={_id} className={styles.row}>
          <Link
            href={`/admin/products/${_id}`}
            className={styles.cell}
          >
            {name}
          </Link>
          <div className={styles.cell}>{price}</div>
          <div className={styles.cell}>{toUkrainian(category)}</div>
          <div className={styles.cell}>{formatDate(createdAt)}</div>
          <div className={styles.cell}>{formatDate(updatedAt)}</div>
        </div>
      )
    );

  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {tableHead}
        {products && tableRows}
      </div>
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.shape({
    result: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
      })
    ),
  }),
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

export default ProductsTable;
