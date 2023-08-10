import { Icon } from '@/ui/Icon/Icon';
import styles from './HeroType.module.scss';
import heroImg from '/public/images/heroImg.png';

const HeroOption = ({ action }) => {
  return (
    <div className={styles.contaier}>
      <div className={styles.type}>
        <span className={styles.typeTitle}>Тип:</span>
        <span className={styles.typeOption}>Титульна сторінка</span>
        <button
          type="button"
          className={styles.typeBtn}
          onClick={action}
        >
          <Icon id="pencil" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default HeroOption;
