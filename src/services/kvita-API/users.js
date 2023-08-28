import { instance } from './kvita-instance';

export const getAllUsers = async data => {
  const response = await instance.get(`/users?${data}`);
  return response.data;
};

// export const getUserById = async _id => {
//   const response = await instance.get(`/users/${_id}`);
//   return response;
// };

export const updateUserByAdmin = async ({ _id, data }) => {
  const response = await instance.patch(`/users/${_id}`, data);
  return response.data;
};

// export const deleteUser = async _id => {
//   const response = await instance.delete(`/users/${_id}`);
//   return response;
// };
