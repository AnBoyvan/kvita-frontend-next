import { getAllOrders, addOrder } from '@/services/kvita-API/orders';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';
import { useAuth } from './useAuth';
import { useCart } from './useCart';

export const useFetchOrders = () => {
  const { data: orders, refetch: refetchOrders } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const data = await getAllOrders();
      return data;
    },
  });

  return { orders, refetchOrders };
};

export const useMutateOrders = () => {
  const client = useQueryClient();
  const { isLoggedIn } = useAuth();
  const { clearLocalCart, clearUserCart } = useCart();

  const { mutate: addNewOrder } = useMutation({
    mutationFn: order => addOrder(order),
    onSuccess: () => {
      Notiflix.Report.success('Замовлення відправлено', '', 'Ok');
      client.invalidateQueries(['orders']);
      if (isLoggedIn) {
        clearUserCart();
      }
      clearLocalCart();
    },
  });

  return { addNewOrder };
};
