import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { ProductCard } from '@/components';
import Icon from '@/ui/Icon/Icon';
import { MainButton } from '@/ui/Buttons';

import styles from './Category.module.scss';

const Category = ({ products, title, category }) => {
  const router = useRouter();

  const items = products.map(product => (
    <ProductCard key={product._id} product={product} />
  ));

  const handleClick = () => {
    router.push(`products?category=${category}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>{items}</ul>
      <div className={styles.btnWrapper}>
        <MainButton onClick={handleClick}>
          <span className={styles.btn}>
            Всі <Icon id="arrowRight" />
          </span>
        </MainButton>
      </div>
    </div>
  );
};

Category.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Category;
