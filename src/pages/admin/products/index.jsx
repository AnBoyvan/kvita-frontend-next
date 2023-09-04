import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AdminCabinetContainer, Meta } from '@/components';
import { CabinetSearch, CategoryFilter } from '@/ui/Inputs';
import ProductsTable from '@/modules/AdminCabinet/Products/components/ProductsTable/ProductsTable';

import { useFetchProducts } from '@/hooks/useProducts';

import styles from '@/modules/AdminCabinet/Products/Products.module.scss';

const ProductsPage = () => {
  const { query, push } = useRouter();
  const queryParams = new URLSearchParams(query).toString();
  const requestParams = queryParams
    ? queryParams
    : `/admin/products?search=&category=sortField=name&sortOrder=asc&limit=500`;

  const [categories, setCategories] = useState([
    'pie',
    'cake',
    'dessert',
    'other',
  ]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortField, setSortField] = useState('name');

  const { products } = useFetchProducts(requestParams);

  const changeSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    push(
      `/admin/products?search=${search}&category=${categories.join(
        ','
      )}&sortField=${sortField}&sortOrder=${sortOrder}&limit=500`,
      undefined,
      {
        shallow: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, search, sortField, sortOrder]);

  return (
    <>
      <Meta title="Продукція" page="admin/products" />
      <AdminCabinetContainer title="Продукція">
        <div className={styles.filter}>
          <CabinetSearch search={search} setSearch={setSearch} />
          <CategoryFilter
            current={categories}
            setCurrent={setCategories}
          />
        </div>
        <ProductsTable
          products={products}
          sortOrder={sortOrder}
          setSortOrder={changeSortOrder}
          sortField={sortField}
          setSortField={setSortField}
        />
      </AdminCabinetContainer>
    </>
  );
};

export default ProductsPage;
