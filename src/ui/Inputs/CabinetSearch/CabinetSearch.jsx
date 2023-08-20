import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import Icon from '@/ui/Icon/Icon';

import styles from './CabinetSearch.module.scss';

const CabinetSearch = ({ search, setSearch }) => {
  const handleChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleClear = () => {
    setSearch('');
  };
  return (
    <Formik>
      {() => (
        <Form className={styles.form}>
          <Field
            type="text"
            name="search"
            className={styles.input}
            autoComplete="off"
            onChange={handleChange}
            value={search}
            placeholder="Пошук..."
          ></Field>
          <button
            type="button"
            className={styles.clearBtn}
            onClick={handleClear}
          >
            <Icon id="close" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

CabinetSearch.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default CabinetSearch;
