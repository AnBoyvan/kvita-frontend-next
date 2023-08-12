import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Container } from '@/components';
import { MainButton } from '@/ui/Buttons';
import { ProductInfo, Reviews } from '@/modules/Product/components';

import { getProductById } from '@/services/kvita-API/products';

import styles from '@/modules/Product/Product.module.scss';

export const getServerSideProps = async context => {
  const { id } = context.params;

  try {
    const product = await getProductById(id);
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { product: {} } };
  }
};

const SingleProductPage = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <Container>
        <div className={styles.titleWrapper}>
          <h1 className={styles.pageTitle}>{product.name}</h1>
          <MainButton onClick={() => router.back()}>Назад</MainButton>
        </div>

        <ProductInfo product={product} />
        <Reviews id={product._id} />
      </Container>
    </>
  );
};

SingleProductPage.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProductPage;
