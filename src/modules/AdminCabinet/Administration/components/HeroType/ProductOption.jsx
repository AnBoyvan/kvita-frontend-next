import PropTypes from 'prop-types';
import { useContext } from 'react';

import Icon from '@/ui/Icon/Icon';
import ChangeProduct from './ChangeProduct';

import { ModalContext } from '@/hooks/useModal';

import styles from './HeroType.module.scss';
import newProduct from '@/config/newProduct.json';

const ProductOption = ({ action }) => {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal(<ChangeProduct />);
  };
  return (
    <div className={styles.contaier}>
      <div className={styles.type}>
        <span className={styles.typeTitle}>Тип:</span>
        <span className={styles.typeOption}>Новинка</span>
        <button
          type="button"
          className={styles.typeBtn}
          onClick={action}
        >
          <Icon id="pencil" />
        </button>
      </div>
      <div className={styles.type}>
        <span className={styles.typeTitle}>Обрано:</span>
        <span className={styles.typeOption}>{newProduct.name}</span>
        <button
          type="button"
          className={styles.typeBtn}
          onClick={handleClick}
        >
          <Icon id="pencil" />
        </button>
      </div>
    </div>
  );
};

ProductOption.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ProductOption;
