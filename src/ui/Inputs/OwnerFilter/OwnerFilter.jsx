import PropTypes from 'prop-types';

import styles from './OwnerFilter.module.scss';
import { useUsers } from '@/hooks/useUsers';
import { useState } from 'react';
import Icon from '@/ui/Icon/Icon';

const OwnerFilter = ({ setCurrent }) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const { users } = useUsers(`search=${search}`);

  const handlePickOption = e => {
    const optionId = e.target.dataset.id;
    const pickedUser = users.result.find(
      user => user._id === optionId
    );
    setSearch(pickedUser.name);
    setCurrent(pickedUser._id);
  };

  const list =
    users &&
    users.result.map(({ _id, name }) => (
      <li
        key={_id}
        className={styles.option}
        onClick={handlePickOption}
        data-id={_id}
      >
        {name}
      </li>
    ));

  const handleClear = () => {
    setCurrent('');
    setSearch('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Замовник:</div>
      <div className={styles.searchWrapper}>
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
          {isOpen && <ul className={styles.optionsList}>{list}</ul>}
        </div>
        <button
          type="button"
          className={styles.clearBtn}
          onClick={handleClear}
        >
          <Icon id="close" />
        </button>
      </div>
    </div>
  );
};

OwnerFilter.propTypes = {
  setCurrent: PropTypes.func.isRequired,
};

export default OwnerFilter;
