import {
  addGalleryImage,
  deleteGalleryImage,
  getAllGalleryImages,
  updateGalleryImage,
} from '@/services/kvita-API/gallery';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';

export const usePictures = (data = {}) => {
  const client = useQueryClient();
  const { tags } = data;

  const {
    status,
    data: fetchedPictures,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['pictures', tags || ''],
    queryFn: getAllGalleryImages,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length ? pages.length + 1 : undefined;
    },
  });

  const { mutate: addNewPicture } = useMutation({
    mutationFn: data => addGalleryImage(data),
    onSuccess: () => {
      Notiflix.Notify.success(`Новий продукт додано`);
      client.invalidateQueries(['pictures', tags || '']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  const { mutate: updatePicture } = useMutation({
    mutationFn: data => updateGalleryImage(data),
    onSuccess: () => {
      Notiflix.Notify.success(`Зміни успішно внесено`);
      client.invalidateQueries(['pictures', tags || '']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  const { mutate: deletePicture } = useMutation({
    mutationFn: data => deleteGalleryImage(data),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['pictures', tags || '']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  return {
    fetchedPictures,
    hasNextPage,
    fetchNextPage,
    addNewPicture,
    updatePicture,
    deletePicture,
  };
};
