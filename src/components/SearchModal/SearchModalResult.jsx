import Link from 'next/link';
import styles from './SearchModal.module.scss';

const SearchModaResult = ({ items, search, action }) => {
  const list = items.map(item => (
    <li key={item._id}>
      <Link
        href={`/products/${item._id}`}
        className={styles.item}
        onClick={action}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <ul className={styles.list}>
      {items.length > 0 && search !== '' ? (
        list
      ) : (
        <span className={styles.item}>Нічого не знайдено</span>
      )}
    </ul>
  );
};

export default SearchModaResult;
