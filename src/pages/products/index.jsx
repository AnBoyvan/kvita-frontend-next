import { Container, Meta } from '@/components';
import {
  Categories,
  ProductsList,
  SearchBar,
} from '@/modules/Products/components';

import styles from '@/modules/Products/Products.module.scss';

const ProductsPage = () => {
  return (
    <>
      <Meta
        title="Наша продукція"
        page="products"
        robots="index, follow"
      />
      <Container>
        <h1 className={styles.pageTitle}>НАША ПРОДУКЦІЯ</h1>
        <SearchBar />
        <Categories />
        <ProductsList />
      </Container>
    </>
  );
};

export default ProductsPage;
