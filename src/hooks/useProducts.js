import {
  addProduct,
  deleteGalleryImages,
  deleteProduct,
  getAllProducts,
  getFavoritesProducts,
  updateFavorites,
  updateProduct,
} from '@/services/kvita-API/products';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';

export const useFetchProducts = query => {
  const { data: products, refetch: refetchProducts } = useQuery({
    queryKey: ['products', query],
    queryFn: async () => {
      const data = await getAllProducts(query);
      return data;
    },
  });

  return { products, refetchProducts };
};

export const useFavoriteProducts = () => {
  const { data: favoriteProducts } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await getFavoritesProducts();
      return data;
    },
  });

  return { favoriteProducts };
};

export const useMutateProducts = () => {
  const client = useQueryClient();

  const { mutate: updFavorites } = useMutation({
    mutationFn: id => updateFavorites(id),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['products']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
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

  const { mutate: removeProductImage } = useMutation({
    mutationFn: data => deleteGalleryImages(data),
    onSuccess: () => {
      client.invalidateQueries(['products']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  const { mutate: updProduct } = useMutation({
    mutationFn: data => updateProduct(data),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['products']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  const { mutate: removeProduct } = useMutation({
    mutationFn: data => deleteProduct(data),
    onSuccess: ({ message }) => {
      Notiflix.Notify.success(`${message}`);
      client.invalidateQueries(['products']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  return {
    updFavorites,
    addNewProduct,
    removeProductImage,
    updProduct,
    removeProduct,
  };
};
