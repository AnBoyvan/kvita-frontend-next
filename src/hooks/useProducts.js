import {
  addProduct,
  getAllProducts,
  updateFavorites,
} from '@/services/kvita-API/products';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';

export const useFetchProducts = query => {
  const { data: products, refetch: refetchProducts } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await getAllProducts(query);
      return data;
    },
  });

  return { products, refetchProducts };
};

export const useMutateProducts = () => {
  const client = useQueryClient();

  const { mutate: updFavorites } = useMutation({
    mutationFn: id => updateFavorites(id),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['products']);
    },
  });

  const { mutate: addNewProduct } = useMutation({
    mutationFn: data => addProduct(data),
    onSuccess: () => {
      Notiflix.Notify.success(`Новий продукт додано`);
      client.invalidateQueries(['products']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  return { updFavorites, addNewProduct };
};
