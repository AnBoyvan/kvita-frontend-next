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

export default Delivery;
