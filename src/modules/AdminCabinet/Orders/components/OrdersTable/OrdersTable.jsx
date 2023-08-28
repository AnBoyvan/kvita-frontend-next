import PropTypes from 'prop-types';
import { useContext } from 'react';

import SortOrderButton from '@/ui/Buttons/SortOrderButton';
import OrdersModal from '../OrdersModal/OrdersModal';

import { ModalContext } from '@/hooks/useModal';
import { toUkrainian } from '@/utils/helpers/categoryTranslate';
import { formatDate } from '@/utils/helpers/formatDate';

import styles from './OrdersTable.module.scss';

const headList = [
  { value: 'orderNumber', title: 'Номер' },
  { value: 'total', title: 'Сума' },
  { value: 'ownerName', title: 'Замовник' },
  { value: 'status', title: 'Статус' },
  { value: 'createdAt', title: 'Дата замовлення' },
];

const OrdersTable = ({
  orders,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) => {
  const { openModal } = useContext(ModalContext);

  const editOrder = order => {
    openModal(<OrdersModal order={order} />);
  };

  const tableHead = headList.map(({ value, title }) => (
    <div
      key={value}
      className={styles.headerCell}
      onClick={() => setSortField(value)}
    >
      <span>{title}</span>
      {sortField === value && (
        <SortOrderButton
          sortOrder={sortOrder}
          onChange={setSortOrder}
        />
      )}
    </div>
  ));

  const tableRows =
    orders &&
    orders.map(order => (
      <div key={order._id} className={styles.row}>
        <button
          type="button"
          className={styles.cell}
          onClick={() => editOrder(order)}
        >
          {order.orderNumber}
        </button>
        <div className={styles.cell}>{order.total}</div>
        <div className={styles.cell}>{order.ownerName}</div>
        <div className={styles.cell}>{toUkrainian(order.status)}</div>
        <div className={styles.cell}>
          {formatDate(order.createdAt)}
        </div>
      </div>
    ));

  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {tableHead}
        {orders && tableRows}
      </div>
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.string.isRequired,
          productName: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          sum: PropTypes.number.isRequired,
        })
      ).isRequired,
      orderNumber: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      discount: PropTypes.number,
      ownerName: PropTypes.string.isRequired,
      ownerEmail: PropTypes.string.isRequired,
      ownerPhone: PropTypes.string,
      status: PropTypes.string.isRequired,
      comment: PropTypes.string,
      description: PropTypes.string,
      deliveryAdress: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

export default OrdersTable;
