import {
  getAllOrders,
  addOrder,
  updateOrder,
  getUserOrders,
} from '@/services/kvita-API/orders';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';
import { useAuth } from './useAuth';
import { useCart } from './useCart';

export const useOrders = query => {
  const client = useQueryClient();
  const { isLoggedIn } = useAuth();
  const { clearLocalCart, clearUserCart } = useCart();

  const { data: orders, refetch: refetchOrders } = useQuery({
    queryKey: ['orders', query],
    queryFn: async () => {
      const data = await getAllOrders(query);
      return data;
    },
  });

  const { data: userOrders } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const data = await getUserOrders();
      return data;
    },
  });

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

  const { mutate: editOrder } = useMutation({
    mutationFn: data => updateOrder(data),
    onSuccess: response => {
      Notiflix.Notify.success(
        `Замовлення №${response.orderNumber} оновлено`
      );
      client.invalidateQueries(['orders']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  return {
    orders,
    refetchOrders,
    userOrders,
    addNewOrder,
    editOrder,
  };
};
