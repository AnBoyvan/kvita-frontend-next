import styles from './ProductName.module.scss';
import EditContainer from '../EditContainer/EditContainer';

const ProductName = ({ name, setName }) => {
  return (
    <EditContainer title="Назва">
      <input
        name="name"
        type="text"
        value={name}
        required
        className={styles.input}
        onChange={e => setName(e.target.value)}
      />
    </EditContainer>
  );
};

export default ProductName;
