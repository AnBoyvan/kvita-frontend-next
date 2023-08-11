import { useState } from 'react';
import styles from './ProductName.module.scss';

const ProductName = ({ value, action }) => {
  const [newName, setNewName] = useState(value || '');

  const handleChange = () => {
    setNewName(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <label htmlFor="name" className={styles.label}>
        Назва
      </label>
      <input
        name="name"
        type="text"
        value={newName}
        required
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductName;
