import styles from './SearchModal.module.scss';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import MainButton from '@/ui/Buttons/MainButton';
import { Icon } from '@/ui/Icon/Icon';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { useFetchProducts } from '@/hooks/useProducts';
import SearchModaResult from './SearchModalResult';

const SearcModal = () => {
  const { closeModal } = useContext(ModalContext);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [showList, setShowList] = useState(false);
  const { products, refetchProducts } = useFetchProducts(
    `search=${search}`
  );

  const initialValues = {
    search,
  };

  const handleChange = async e => {
    await setSearch(e.currentTarget.value);
    setShowList(true);
    refetchProducts();
  };

  const handleSubmit = () => {
    if (search.trim() === '') {
      router.push('/products');
      closeModal();
      return;
    }

    router.push(`/products/?search=${search}`);
    closeModal();
  };

  const clearFilter = () => {
    setSearch('');
  };

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search);
    }
  }, [router.query.search]);

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
      {showList && (
        <SearchModaResult
          items={products.result}
          search={search}
          action={closeModal}
        />
      )}
    </div>
  );
};

export default SearcModal;
