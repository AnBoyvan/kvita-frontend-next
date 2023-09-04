import { Meta } from '@/components';
import { useAuth } from '@/hooks/useAuth';

import Orders from '@/modules/AdminCabinet/Orders/Orders';

const OrdersPage = () => {
  const { managerAccess } = useAuth();

  return (
    <>
      <Meta title="Замовлення" page="admin/orders" />
      {managerAccess && <Orders />}
    </>
  );
};

export default OrdersPage;
