import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './Category.module.scss';
import MainButton from '@/ui/Buttons/MainButton';
import { Icon } from '@/ui/Icon/Icon';
import Link from 'next/link';

const Category = ({ products, title, category }) => {
  const items = products.map(product => (
    <ProductCard key={product._id} product={product} />
  ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>{items}</ul>
      <Link
        href={`products?category=${category}`}
        className={styles.btnWrapper}
      >
        <MainButton>
          <span className={styles.btn}>
            Всі <Icon id="arrowRight" />
          </span>
        </MainButton>
      </Link>
    </div>
  );
};

export default Category;
