import { Container } from '@/components';
import { Filter, ImagesList } from '@/modules/Gallery/components';

import styles from '@/modules/Gallery/Gallery.module.scss';

const GalleryPage = () => {
  return (
    <>
      <Container>
        <h1 className={styles.pageTitle}>Галерея</h1>
        <Filter />
        <ImagesList />
      </Container>
    </>
  );
};

export default GalleryPage;
