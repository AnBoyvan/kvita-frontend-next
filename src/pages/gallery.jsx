import Container from '@/components/Container/Container';
import styles from '@/modules/Gallery/Gallery.module.scss';
import Filter from '@/modules/Gallery/components/Filter/Filter';
import ImagesList from '@/modules/Gallery/components/ImagesList/ImagesList';

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
