import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import Icon from '@/ui/Icon/Icon';

import { useState } from 'react';
import { formatDate } from '@/utils/helpers/formatDate';
import { toUkrainian } from '@/utils/helpers/categoryTranslate';

import styles from './UserOrders.module.scss';

const UserOrdersItem = ({ order }) => {
  const {
    orderNumber,
    createdAt,
    status,
    total,
    items,
    discount,
    comment,
    deliveryAdress,
  } = order;
  const [open, setOpen] = useState(false);

  const shortList = items.map(
    ({ productId, productImage, productName }) => (
      <li key={productId} className={styles.shortListImg}>
        <Image
          src={productImage}
          alt={productName}
          fill={true}
          sizes="(max-width: 100px)"
          style={{
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
        />
      </li>
    )
  );

  const productsList = items.map(
    ({
      productId,
      productImage,
      productName,
      quantity,
      price,
      sum,
    }) => (
      <li key={productId} className={styles.listItem}>
        <div className={styles.nameWrapper}>
          <div className={styles.shortListImg}>
            <Image
              src={productImage}
              alt={productName}
              fill={true}
              sizes="(max-width: 100px)"
              style={{
                objectFit: 'cover',
                borderRadius: 'inherit',
              }}
            />
          </div>
          <Link
            href={`/products/${productId}`}
            className={styles.productName}
          >
            {productName}
          </Link>
        </div>
        <div className={styles.countWrapper}>
          <div className={styles.countItem}>
            <span>Ціна</span>
            <span className={styles.countItemNumber}>
              &#8372; {price}
            </span>
          </div>
          <div className={styles.countItem}>
            <span>Кількість</span>
            <span className={styles.countItemNumber}>
              {quantity} шт
            </span>
          </div>
          <div className={styles.countItem}>
            <span>Сума</span>
            <span className={styles.countItemNumber}>
              &#8372; {sum}
            </span>
          </div>
        </div>
      </li>
    )
  );

  return (
    <div className={styles.order}>
      <div className={styles.orderHead}>
        <div className={styles.orderNumber}>
          <span>
            № {orderNumber} від {formatDate(createdAt)}
          </span>
          <span className={styles.status}>{toUkrainian(status)}</span>
        </div>
        {!open && (
          <>
            <div className={styles.orderTotal}>
              <span>Сума замовлення</span>
              <span className={styles.status}>&#8372; {total}</span>
            </div>
            <ul className={styles.shortList}>{shortList}</ul>
          </>
        )}
        <button
          type="button"
          className={styles.openBtn}
          onClick={() => setOpen(!open)}
        >
          {open ? <Icon id="up" /> : <Icon id="down" />}
        </button>
      </div>
      {open && (
        <div className={styles.fullOrder}>
          <ul className={styles.productsList}>{productsList}</ul>
          {comment && (
            <div className={styles.infoWrapper}>
              <span>Коментар:</span>
              <span>{comment}</span>
            </div>
          )}
          {deliveryAdress && (
            <div className={styles.infoWrapper}>
              <span>Адреса доставки:</span>
              <span>{deliveryAdress}</span>
            </div>
          )}
          {discount && (
            <div className={styles.infoWrapper}>
              <span>Знижка:</span>
              <span>{discount} %</span>
            </div>
          )}
          <div className={styles.infoWrapper}>
            <span>Сума замовлення:</span>
            <span>&#8372; {total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

UserOrdersItem.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        productId: PropTypes.string.isRequired,
        productImage: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        sum: PropTypes.number.isRequired,
      })
    ).isRequired,
    discount: PropTypes.number,
    comment: PropTypes.string,
    deliveryAdress: PropTypes.string,
  }).isRequired,
};

export default UserOrdersItem;
