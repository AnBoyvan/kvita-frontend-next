import styles from './InOrder.module.scss';
import MainLinkButton from '@/ui/Buttons/MainLinkButton';

const InOrder = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Створимо ідеальний торт та десерти для Вас
      </h2>
      <MainLinkButton link="/ordering">Замовити</MainLinkButton>
    </section>
  );
};

export default InOrder;
