import Container from '@/components/Container/Container';
import { getProductById } from '@/services/kvita-API/products';
import styles from '@/modules/Product/Product.module.scss';
import ProductInfo from '@/modules/Product/components/ProductInfo/ProductInfo';
import { useRouter } from 'next/router';
import MainButton from '@/ui/Buttons/MainButton';
import Reviews from '@/modules/Product/components/Reviews/Reviews';

export const getServerSideProps = async context => {
  const { id } = context.params;

  try {
    const product = await getProductById(id);
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { product: null } };
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

export default SingleProductPage;
