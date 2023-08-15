import { useRouter } from 'next/router';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Icon from '@/ui/Icon/Icon';
import { MainButton } from '@/ui/Buttons';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search || '');

  const initialValues = {
    search,
  };

  const changeSearchParams = newSearch => {
    let newQuery = { ...router.query };
    delete newQuery.page;

    if (newSearch === '') {
      delete newQuery.search;
    } else {
      newQuery = { ...newQuery, search: newSearch };
    }

    const queryString = new URLSearchParams(newQuery).toString();
    router.push(`/products?${queryString}`, undefined, {
      shallow: true,
    });
  };

  const handleChange = e => {
    setSearch(e.currentTarget.value);
    changeSearchParams(e.currentTarget.value);
  };

  const handleSubmit = () => {
    changeSearchParams(search);
  };

  const clearFilter = () => {
    setSearch('');
    changeSearchParams('');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form}>
          <Field
            type="text"
            name="search"
            className={styles.input}
            onChange={handleChange}
            value={search}
          />
          <button
            type="button"
            className={styles.clearBtn}
            onClick={clearFilter}
          >
            <Icon id="close" />
          </button>
          <MainButton onClick={handleSubmit}>
            <Icon id="search" />
          </MainButton>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
