import { getAllGalleryImages } from '@/services/kvita-API/gallery';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Notiflix from 'notiflix';

export const usePictures = data => {
  const queryClient = useQueryClient();
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

  return { fetchedPictures, hasNextPage, fetchNextPage };
};
