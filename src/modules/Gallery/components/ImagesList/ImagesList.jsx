import styles from './ImagesList.module.scss';
import { usePictures } from '@/hooks/usePictures';
import ImageItem from '../ImageItem/ImageItem';
import { useContext, useEffect } from 'react';
import GalleryImageModal from '../GalleryImageModal/GalleryImageModal';
import { ModalContext } from '@/hooks/useModal';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

const ImagesList = () => {
  const { ref, inView } = useInView();
  const { query } = useRouter();

  const { fetchedPictures, hasNextPage, fetchNextPage } = usePictures(
    { tags: query.tags }
  );

  const { openModal } = useContext(ModalContext);

  const pictures = () => {
    if (fetchedPictures) {
      return fetchedPictures.pages.reduce(
        (result, array) => result.concat(array),
        []
      );
    }

    return null;
  };

  const openImageModal = image => {
    openModal(
      <GalleryImageModal
        images={pictures.result}
        currentImage={image}
      />
    );
  };

  const list = pictures()
    ? pictures().map(item => (
        <ImageItem
          key={item._id}
          image={item}
          action={openImageModal}
        />
      ))
    : null;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <>
      {list && list.length > 0 && (
        <>
          <ul className={styles.list}>{list}</ul>
          <div ref={ref}></div>
        </>
      )}
    </>
  );
};

export default ImagesList;
