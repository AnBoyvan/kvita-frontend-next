import { useAuth } from '@/hooks/useAuth';

import Orders from '@/modules/AdminCabinet/Orders/Orders';

const OrdersPage = () => {
  const { managerAccess } = useAuth();

  return <>{managerAccess && <Orders />}</>;
};

export default OrdersPage;
