import styles from './ProductDescription.module.scss';
import EditContainer from '../EditContainer/EditContainer';

const ProductDescription = ({ description, setDescription }) => {
  return (
    <EditContainer title="Опис">
      <textarea
        type="text"
        value={description}
        className={styles.input}
        rows="10"
        onChange={e => setDescription(e.target.value)}
      />
    </EditContainer>
  );
};

export default ProductDescription;
