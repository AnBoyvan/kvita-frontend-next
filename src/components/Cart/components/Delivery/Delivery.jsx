import PropTypes from 'prop-types';

import styles from './Delivery.module.scss';

const Delivery = ({
  delivery,
  setDelivery,
  deliveryAdress,
  setDeliveryAdress,
}) => {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={delivery ? true : false}
            onChange={() => setDelivery(!delivery)}
          />
          <span className={styles.checkmark}></span>
        </label>
        Доставка
      </div>
      {delivery && (
        <input
          type="text"
          name="adress"
          className={styles.adressInput}
          value={deliveryAdress}
          onChange={e => setDeliveryAdress(e.target.value)}
          placeholder="Вкажіть адресу доставки"
        />
      )}
    </div>
  );
};

Delivery.propTypes = {
  delivery: PropTypes.bool.isRequired,
  setDelivery: PropTypes.func.isRequired,
  deliveryAdress: PropTypes.string.isRequired,
  setDeliveryAdress: PropTypes.func.isRequired,
};

export default Delivery;
