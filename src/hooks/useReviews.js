import {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
} from '@/services/kvita-API/reviews';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';

export const useFetchReviews = filter => {
  const { data: reviews, refetch: refetchReviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const data = await getAllReviews(filter);
      return data;
    },
  });

  return { reviews, refetchReviews };
};

export const useMutateReviews = () => {
  const client = useQueryClient();

  const { mutate: addNewReview } = useMutation({
    mutationFn: review => addReview(review),
    onSuccess: () => {
      client.invalidateQueries(['reviews']);
    },
  });

  const { mutate: editReview } = useMutation({
    mutationFn: review => updateReview(review),
    onSuccess: () => {
      client.invalidateQueries(['reviews']);
    },
  });

  const { mutate: removeReview } = useMutation({
    mutationFn: id => deleteReview(id),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['reviews']);
    },
  });

  return { addNewReview, editReview, removeReview };
};
