import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Icon from '@/ui/Icon/Icon';
import { MainButton } from '@/ui/Buttons';
import FilterItem from '../FilterItem/FilterItem';

import styles from './Filter.module.scss';
import tagsList from '@/config/tags.json';

const Filter = () => {
  const { query, push } = useRouter();

  const [open, setOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState(
    (query?.tags && query.tags.split(',')) || []
  );

  const handleOptionChange = option => {
    let newOptions;

    if (selectedOptions.includes(option)) {
      newOptions = selectedOptions.filter(item => item !== option);
    } else {
      newOptions = [...selectedOptions, option];
    }

    setSelectedOptions(newOptions);
    push(`/gallery?tags=${newOptions.join(',')}`, undefined, {
      shallow: true,
    });
  };

  const clearFilter = () => {
    setSelectedOptions([]);
    push('/gallery', undefined, {
      shallow: true,
    });
  };

  const optionsList = tagsList.map(option => (
    <FilterItem
      key={option}
      option={option}
      checked={selectedOptions.includes(option)}
      onChange={() => handleOptionChange(option)}
    />
  ));

  useEffect(() => {
    if (query?.tags) {
      const currenTags = query?.tags && query.tags.split(',');
      setSelectedOptions(currenTags);
    }
  }, [query.tags]);

  return (
    <div className={styles.container}>
      <label
        htmlFor="filter"
        className={
          open ? `${styles.label} ${styles.open}` : styles.label
        }
      >
        <input
          type="checkbox"
          id="filter"
          onChange={() => setOpen(!open)}
          className={styles.input}
          checked={open}
        />
        <div className={styles.title}>
          Фільтр <Icon id="filter" />
        </div>
      </label>
      <div
        className={open ? styles.dropdownOpen : styles.dropdownClose}
      >
        <MainButton onClick={clearFilter}>
          <span>Скинути фільтр</span>
        </MainButton>
        <ul className={styles.list}>{optionsList}</ul>
      </div>
    </div>
  );
};

export default Filter;
