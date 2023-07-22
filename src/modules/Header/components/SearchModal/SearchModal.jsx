import styles from './SearchModal.module.scss';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import MainButton from '../../../../ui/Buttons/MainButton';
import { Icon } from '../../../../ui/Icon/Icon';
import { useState } from 'react';

const SearchForm = ({ action, initialSearch }) => {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch || '');

  const initialValues = {
    search,
  };

  const handleChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (search.trim() === '') {
      router.push('/products');
      setSearch('');
      action();
      return;
    }

    router.push(`/products/?search=${search}`);
    setSearch('');
    action();
  };

  const clearFilter = () => {
    setSearch('');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <Field
            type="text"
            name="search"
            className={styles.input}
            onChange={handleChange}
            value={search}
          ></Field>
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

export default SearchForm;
