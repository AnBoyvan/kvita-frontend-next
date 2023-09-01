import FavoriteItem from './FavoriteItem';

import { useFetchProducts } from '@/hooks/useProducts';

import styles from './Favorites.module.scss';

const Favorites = () => {
  const { favoriteProducts } = useFetchProducts();

  const productList =
    favoriteProducts &&
    favoriteProducts?.result.map(item => (
      <FavoriteItem product={item} key={item._id} />
    ));

  return (
    <div>
      {favoriteProducts && favoriteProducts.result.length > 0 && (
        <ul className={styles.list}>{productList}</ul>
      )}
    </div>
  );
};

export default Favorites;
