import { useState } from 'react';

import {
  AdminCabinetContainer,
  EditProduct,
  Meta,
} from '@/components';
import AddGalleryImage from '@/modules/AdminCabinet/Create/AddGalleryImage/AddGalleryImage';

import styles from '@/modules/AdminCabinet/Create/Create.module.scss';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState(true);

  return (
    <>
      <Meta title="Нова позиція" page="admin/create" />
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
        {newProduct ? (
          <EditProduct isNew={true} />
        ) : (
          <AddGalleryImage />
        )}
      </AdminCabinetContainer>
    </>
  );
};

export default CreatePage;
