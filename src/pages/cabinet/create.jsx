import AdminCabinetContainer from '@/components/AdminCabinetContainer/AdminCabinetContainer';
import { useState } from 'react';
import styles from '@/modules/AdminCabinet/Create/Create.module.scss';
import EditProduct from '@/components/EditProduct/EditProduct';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState(true);

  return (
    <>
      <AdminCabinetContainer title="Нова позиція">
        <div className={styles.switchWrapper}>
          <button
            onClick={() => setNewProduct(true)}
            type="button"
            className={
              newProduct
                ? `${styles.switchBtn} ${styles.active}`
                : styles.switchBtn
            }
          >
            Товар
          </button>
          <button
            onClick={() => setNewProduct(false)}
            type="button"
            className={
              !newProduct
                ? `${styles.switchBtn} ${styles.active}`
                : styles.switchBtn
            }
          >
            Фото
          </button>
        </div>
        {newProduct ? <EditProduct isNew={true} /> : 'picture'}
      </AdminCabinetContainer>
    </>
  );
};

export default CreatePage;
