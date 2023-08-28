import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';

import { ModalContext } from '@/hooks/useModal';
import { useOrders } from '@/hooks/useOrders';
import { formatDate } from '@/utils/helpers/formatDate';
import {
  toEnglish,
  toUkrainian,
} from '@/utils/helpers/categoryTranslate';

import styles from './OrdersModal.module.scss';
import admin from '@/config/admin.json';

const headList = ['Назва', 'Ціна', 'К-сть', 'Сума'];

const OrdersModal = ({ order }) => {
  const {
    _id,
    items,
    orderNumber,
    total,
    discount,
    ownerName,
    ownerEmail,
    ownerPhone,
    status,
    comment,
    description,
    deliveryAdress,
    createdAt,
  } = order;

  const { closeModal } = useContext(ModalContext);
  const { editOrder } = useOrders();

  const [orderDeliveryAdress, setOrderDeliveryAdress] =
    useState(deliveryAdress);
  const [orderDescription, setOrderDescription] =
    useState(description);
  const [currentStatus, setCurrentStatus] = useState(status);

  const tableHead = headList.map(title => (
    <div key={title} className={styles.headerCell}>
      {title}
    </div>
  ));

  const tableRows = items.map(
    ({ productId, productName, quantity, price, sum }) => (
      <div key={productId} className={styles.row}>
        <div className={styles.cell}>{productName}</div>
        <div className={styles.cell}>{price}</div>
        <div className={styles.cell}>{quantity}</div>
        <div className={styles.cell}>{sum}</div>
      </div>
    )
  );

  const handleChange = e => {
    setCurrentStatus(toEnglish(e.target.value));
  };

  const optionsList = admin.statuses.map(({ value, title }) => (
    <option key={value} value={title} className={styles.option}>
      {title}
    </option>
  ));

  const handleClick = () => {
    const isDelivery = orderDeliveryAdress ? true : false;
    const editedOrder = {
      _id,
      data: {
        status: currentStatus,
        description: orderDescription,
        delivery: isDelivery,
        deliveryAdress: orderDeliveryAdress,
      },
    };
    editOrder(editedOrder);
    closeModal();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        №{orderNumber} від {formatDate(createdAt)}
      </h2>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Замовник</h3>
        <div className={styles.infoWrapper}>
          <span>Ім’я:</span>
          <span>{ownerName}</span>
        </div>
        <div className={styles.infoWrapper}>
          <span>Телефон:</span>
          <span>{ownerPhone}</span>
        </div>
        <div className={styles.infoWrapper}>
          <span>Пошта:</span>
          <span>{ownerEmail}</span>
        </div>

        <div className={styles.infoWrapper}>
          <span>Знижка:</span>
          <span>{discount}%</span>
        </div>
        <div className={styles.infoWrapper}>
          <span>Коментар:</span>
          <span>{comment}</span>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Замовлення</h3>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            {tableHead}
            {tableRows}
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <span>Сума:</span>
          <span>{total} грн</span>
        </div>
        <div className={styles.infoWrapper}>
          <span>Доставка:</span>
          <input
            type="text"
            name="adress"
            className={styles.adressInput}
            value={orderDeliveryAdress}
            onChange={e => setOrderDeliveryAdress(e.target.value)}
            placeholder="Вкажіть адресу доставки"
          />
        </div>
        <div className={styles.infoWrapper}>
          <span>Коментар:</span>
          <textarea
            type="textarea"
            name="description"
            className={styles.commentInput}
            value={orderDescription}
            rows="5"
            onChange={e => setOrderDescription(e.target.value)}
            placeholder="Коментар..."
          />
        </div>
        <div className={styles.infoWrapper}>
          <span>Статус:</span>
          <select
            className={styles.status}
            value={toUkrainian(currentStatus)}
            onChange={handleChange}
          >
            {optionsList}
          </select>
        </div>
      </div>

      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>Готово</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

OrdersModal.propTypes = {
  order: PropTypes.shape({
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
  }).isRequired,
};

export default OrdersModal;
