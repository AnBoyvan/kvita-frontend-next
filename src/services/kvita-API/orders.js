import { instance } from './kvita-instance';

// export const getAllOrders = async () => {
//   const response = await instance.get('/orders');
//   return response.data;
// };

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

// export const updateOrder = async data => {
//   const response = await instance.patch(`/orders/${data._id}`, data);
//   return response.data;
// };

// export const deleteOrder = async _id => {
//   const response = await instance.delete(`/orders/${_id}`);
//   return response.data;
// };
