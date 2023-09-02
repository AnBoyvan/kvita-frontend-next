import { UserCabinetContainer } from '@/components';
import UserOrders from '@/modules/UserCabinet/UserOrders/UserOrders';

const MyOrdersPage = () => {
  return (
    <>
      <>
        <UserCabinetContainer title="Замовлення">
          <UserOrders />
        </UserCabinetContainer>
      </>
    </>
  );
};

export default MyOrdersPage;
