import { Container, Meta } from '@/components';
import Image from 'next/image';

import styles from '@/modules/NotFound/NotFound.module.scss';
import image from '/public/images/notFound.png';

const NotFoundPage = () => {
  return (
    <>
      <Meta title="Сторінку не знайдено" refresh={true} />
      <Container>
        <div className={styles.imgWrapper}>
          <Image
            src={image}
            alt="not found"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 700,
              objectFit: 'contain',
              borderRadius: 'inherit',
            }}
          />
        </div>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
      </Container>
    </>
  );
};

export default NotFoundPage;
