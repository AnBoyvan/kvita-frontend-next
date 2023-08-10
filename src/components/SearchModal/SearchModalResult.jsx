import Link from 'next/link';
import styles from './SearchModal.module.scss';
import Image from 'next/image';

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

export default SearchModaResult;
