import { Container, Meta } from '@/components';
import { Filter, ImagesList } from '@/modules/Gallery/components';

import styles from '@/modules/Gallery/Gallery.module.scss';

const GalleryPage = () => {
  return (
    <>
      <Meta title="Галерея" page="gallery" robots="index, follow" />
      <Container>
        <h1 className={styles.pageTitle}>Галерея</h1>
        <Filter />
        <ImagesList />
      </Container>
    </>
  );
};

export default GalleryPage;
