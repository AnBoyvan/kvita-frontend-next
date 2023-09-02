import { useOrders } from '@/hooks/useOrders';
import UserOrdersItem from './UserOrdersItem';

import styles from './UserOrders.module.scss';

const UserOrders = () => {
  const { userOrders } = useOrders();

  const ordersList =
    userOrders &&
    userOrders?.map(item => (
      <UserOrdersItem order={item} key={item._id} />
    ));

  return (
    <div>
      {userOrders && userOrders.length > 0 && (
        <ul className={styles.list}>{ordersList}</ul>
      )}
    </div>
  );
};

export default UserOrders;
