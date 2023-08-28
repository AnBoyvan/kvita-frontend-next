import { instance } from './kvita-instance';

export const getAllOrders = async data => {
  const response = await instance.get(`/orders?${data}`);
  return response.data;
};

// export const getUserOrders = async () => {
//   const response = await instance.get('/orders/own');
//   return response.data;
// };

// export const getOrderById = async _id => {
//   const response = await instance.get(`/orders/${_id}`);
//   return response.data;
// };

export const addOrder = async data => {
  const response = await instance.post('/orders', data);
  return response.data;
};

export const updateOrder = async ({ _id, data }) => {
  const response = await instance.patch(`/orders/${_id}`, data);
  return response.data;
};

// export const deleteOrder = async _id => {
//   const response = await instance.delete(`/orders/${_id}`);
//   return response.data;
// };
