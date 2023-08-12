import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import styles from './SearchModal.module.scss';

const SearchModaResult = ({ items, search, action }) => {
  const list = items.map(({ _id, name, imageURL }) => (
    <li key={_id} className={styles.dropdownItem}>
      <Link
        href={`/products/${_id}`}
        className={styles.dropdownLink}
        onClick={action}
      >
        <Image
          src={imageURL}
          alt={name}
          width={50}
          height={50}
          style={{
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <div>{name}</div>
      </Link>
    </li>
  ));

  return (
    <div className={styles.dropdown}>
      {items.length > 0 && search !== '' ? (
        <ul className={styles.dropdownList}>{list}</ul>
      ) : (
        <div className={styles.dropdownMessage}>
          Нічого не знайдено
        </div>
      )}
    </div>
  );
};

SearchModaResult.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  search: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default SearchModaResult;
