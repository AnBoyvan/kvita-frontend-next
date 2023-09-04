import { Meta, UserCabinetContainer } from '@/components';
import UserOrders from '@/modules/UserCabinet/UserOrders/UserOrders';

const MyOrdersPage = () => {
  return (
    <>
      <Meta title="Замовлення" page="cabinet/my-orders" />
      <UserCabinetContainer title="Замовлення">
        <UserOrders />
      </UserCabinetContainer>
    </>
  );
};

export default MyOrdersPage;
