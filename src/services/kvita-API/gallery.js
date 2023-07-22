import { instance } from './kvita-instance';

export const getAllGalleryImages = async () => {
  const response = await instance.get('/pictures');
  return response;
};

export const getGalleryImageById = async _id => {
  const response = await instance.get(`/pictures/${_id}`);
  return response;
};

export const addGalleryImage = async data => {
  const response = await instance.post('/pictures', data);
  return response;
};

export const updateGalleryImage = async data => {
  const response = await instance.patch(`/pictures/${data._id}`, data);
  return response;
};

export const deleteGalleryImage = async _id => {
  const response = await instance.delete(`/pictures/${_id}`);
  return response;
};
