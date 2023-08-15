import { useState } from 'react';

import { AdminCabinetContainer } from '@/components';
import { Filter } from '@/modules/AdminCabinet/Products/components';

import styles from '@/modules/AdminCabinet/Products/Products.module.scss';
import CategoryFilter from '@/ui/Inputs/CategoryFilter/CategoryFilter';

const ProductsPage = () => {
  const [categories, setCategories] = useState([
    'pie',
    'cake',
    'dessert',
    'other',
  ]);
  const [search, setSearch] = useState();
  const [sort, setSort] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const sorting = ['name', 'createdAt', 'updatedAt'];

  return (
    <>
      <AdminCabinetContainer title="Продукція">
        <div className={styles.container}>
          <div>
            <CategoryFilter
              current={categories}
              setCurrent={setCategories}
            />
          </div>
        </div>
      </AdminCabinetContainer>
    </>
  );
};

export default ProductsPage;
