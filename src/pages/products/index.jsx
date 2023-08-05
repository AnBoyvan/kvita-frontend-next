import Container from '@/components/Container/Container';

import SearchBar from '@/modules/Products/components/SearchBar/SearchBar';

import styles from '@/modules/Products/Products.module.scss';
import Categories from '@/modules/Products/components/Categories/Categories';
import ProductsList from '@/modules/Products/components/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <>
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
