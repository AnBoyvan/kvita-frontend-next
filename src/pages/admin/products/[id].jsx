import { AdminCabinetContainer, EditProduct } from '@/components';

import { getProductById } from '@/services/kvita-API/products';

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

const ProductEditPage = ({ product }) => {
  return (
    <>
      <AdminCabinetContainer title={product.name}>
        <EditProduct product={product} isNew={false} />
      </AdminCabinetContainer>
    </>
  );
};

export default ProductEditPage;
