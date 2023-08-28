import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AdminCabinetContainer, DropdownFilter } from '@/components';
import {
  DeliveryFilter,
  OwnerFilter,
  PeriodFilter,
  ProductsFilter,
  StatusFilter,
  TotalFilter,
} from '@/ui/Inputs';
import OrdersTable from '@/modules/AdminCabinet/Orders/components/OrdersTable/OrdersTable';

import { useOrders } from '@/hooks/useOrders';

import styles from './Orders.module.scss';

const Orders = () => {
  const { query, push } = useRouter();
  const queryParams = new URLSearchParams(query).toString();
  const requestParams = queryParams
    ? queryParams
    : `/admin/orders?productId=&status=&totalMin=&totalMax=&
      ownerId=&delivery=&createdStart=&createdEnd=&sortField=createdAt&sortOrder=desc`;

  const [products, setProducts] = useState([]);
  const [orderStatus, setOrderStatus] = useState([
    'new',
    'active',
    'closed',
    'rejected',
  ]);
  const [orderTotal, setOrderTotal] = useState({
    totalMin: null,
    totalMax: null,
  });
  const [orderOwner, setOrderOwner] = useState('');
  const [delivery, setDelivery] = useState('all');
  const [created, setCreated] = useState({
    start: null,
    end: null,
  });
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortField, setSortField] = useState('createdAt');

  const { orders } = useOrders(requestParams);

  const changeSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    push(
      `/admin/orders?productId=${products.join(
        ','
      )}&status=${orderStatus.join(',')}&totalMin=${
        orderTotal.totalMin ? orderTotal.totalMin : ''
      }&totalMax=${
        orderTotal.totalMax ? orderTotal.totalMax : ''
      }&ownerId=${orderOwner}&delivery=${
        delivery === 'all' ? '' : delivery
      }&createdStart=${
        created.start ? created.start : ''
      }&createdEnd=${
        created.end ? created.end : ''
      }&sortField=${sortField}&sortOrder=${sortOrder}`,
      undefined,
      {
        shallow: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    created.end,
    created.start,
    delivery,
    orderOwner,
    orderStatus,
    orderTotal.totalMax,
    orderTotal.totalMin,
    products,
    sortField,
    sortOrder,
  ]);

  return (
    <>
      <AdminCabinetContainer title="Замовлення">
        <div className={styles.filter}>
          <DropdownFilter>
            <div className={styles.filtersWrapper}>
              <ProductsFilter
                current={products}
                setCurrent={setProducts}
              />
              <OwnerFilter setCurrent={setOrderOwner} />
              <StatusFilter
                current={orderStatus}
                setCurrent={setOrderStatus}
              />
              <TotalFilter
                current={orderTotal}
                setCurrent={setOrderTotal}
              />
              <DeliveryFilter
                current={delivery}
                setCurrent={setDelivery}
              />
              <PeriodFilter
                title="Дата замовлення:"
                current={created}
                setCurrent={setCreated}
              />
            </div>
          </DropdownFilter>
        </div>
        <OrdersTable
          orders={orders}
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={changeSortOrder}
        />
      </AdminCabinetContainer>
    </>
  );
};

export default Orders;
