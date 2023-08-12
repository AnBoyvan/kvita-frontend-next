import PropTypes from 'prop-types';

import { Container, Meta } from '@/components';
import { Category, Hero, InOrder } from '@/modules/Home/components';

import { getProductsForMain } from '@/services/kvita-API/products';

export const getStaticProps = async () => {
  try {
    const data = await getProductsForMain();
    return { props: { data }, revalidate: 1000 };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: {
          pie: [],
          cake: [],
          dessert: [],
          other: [],
        },
      },
    };
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

HomePage.propTypes = {
  data: PropTypes.shape({
    pie: PropTypes.array,
    cake: PropTypes.array,
    dessert: PropTypes.array,
    other: PropTypes.array,
  }),
};

export default HomePage;
