import { instance } from './kvita-instance';

export const getAllUsers = async () => {
  const response = await instance.get('/users');
  return response;
};

export const getUserById = async _id => {
  const response = await instance.get(`/users/${_id}`);
  return response;
};

export const updateUserByAdmin = async _id => {
  const response = await instance.patch(`/users/${_id}`);
  return response;
};

export const deleteUser = async _id => {
  const response = await instance.delete(`/users/${_id}`);
  return response;
};
