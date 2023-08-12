import { useRouter } from 'next/router';

import styles from './Categories.module.scss';

const Categories = () => {
  const router = useRouter();

  const handleCategoryChange = e => {
    const selectedCategory = e.target.value;
    let newQuery = { ...router.query };
    delete newQuery.page;

    if (selectedCategory === 'all') {
      delete newQuery.category;
    } else {
      newQuery = { ...newQuery, category: selectedCategory };
    }

    const queryString = new URLSearchParams(newQuery).toString();
    router.push(`/products?${queryString}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className={styles.filters}>
      <label
        className={`${styles.label} ${
          !router.query.category ? styles.checked : ''
        }`}
      >
        <input
          type="radio"
          name="category"
          value="all"
          checked={!router.query.category}
          className={styles.input}
          onChange={handleCategoryChange}
        />
        <span>Все</span>
      </label>
      <label
        className={`${styles.label} ${
          router.query.category === 'pie' ? styles.checked : ''
        }`}
      >
        <input
          type="radio"
          name="category"
          value="pie"
          checked={router.query.category === 'pie'}
          className={styles.input}
          onChange={handleCategoryChange}
        />
        <span>Торти</span>
      </label>
      <label
        className={`${styles.label} ${
          router.query.category === 'cake' ? styles.checked : ''
        }`}
      >
        <input
          type="radio"
          name="category"
          value="cake"
          checked={router.query.category === 'cake'}
          className={styles.input}
          onChange={handleCategoryChange}
        />
        <span>Солодощі</span>
      </label>
      <label
        className={`${styles.label} ${
          router.query.category === 'dessert' ? styles.checked : ''
        }`}
      >
        <input
          type="radio"
          name="category"
          value="dessert"
          checked={router.query.category === 'dessert'}
          className={styles.input}
          onChange={handleCategoryChange}
        />
        <span>Десерти</span>
      </label>
      <label
        className={`${styles.label} ${
          router.query.category === 'other' ? styles.checked : ''
        }`}
      >
        <input
          type="radio"
          name="category"
          value="other"
          checked={router.query.category === 'other'}
          className={styles.input}
          onChange={handleCategoryChange}
        />
        <span>Смаколики</span>
      </label>
    </div>
  );
};

export default Categories;
