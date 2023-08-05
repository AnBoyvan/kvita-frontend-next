import Meta from '@/components/Meta/Meta';
import Hero from '@/modules/Home/components/Hero/Hero';
import Container from '@/components/Container/Container';
import Category from '@/modules/Home/components/Category/Category';
import { getProductsForMain } from '@/services/kvita-API/products';
import InOrder from '@/modules/Home/components/InOrder/InOrder';

export const getStaticProps = async () => {
  try {
    const data = await getProductsForMain();
    return { props: { data }, revalidate: 1000 };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null } };
  }
};

const HomePage = ({ data }) => {
  const { pie, cake, dessert, other } = data;

  return (
    <>
      <Meta title="KVITA" />
      <Hero />
      <Container>
        <Category title="Торти" products={pie} category="pie" />
        <Category title="Солодощі" products={cake} category="cake" />
        <Category
          title="Десерти"
          products={dessert}
          category="dessert"
        />
        <Category
          title="Смаколики"
          products={other}
          category="other"
        />
      </Container>
      <InOrder />
    </>
  );
};

export default HomePage;
