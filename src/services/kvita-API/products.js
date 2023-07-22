import { instance } from './kvita-instance';

export const getAllProducts = async data => {
  const response = await instance.get(`/products?${data}`);
  return response;
};

export const getFavoritesProducts = async () => {
  const response = await instance.get('/products/favorite');
  return response;
};

export const getProductById = async _id => {
  const response = await instance.get(`/products/${_id}`);
  return response;
};

export const addProduct = async data => {
  const response = await instance.post('/products', data);
  return response;
};

export const updateProductInfo = async data => {
  const response = await instance.patch(`/products/${data._id}/info`, data);
  return response;
};

export const updateProductImage = async data => {
  const response = await instance.patch(`/products/${data._id}/image`, data);
  return response;
};

export const updateFavorites = async _id => {
  const response = await instance.patch(`/products/${_id}/favorite`);
  return response;
};

export const addGalleryImages = async data => {
  const response = await instance.patch(`/products/${data._id}/gallery`, data);
  return response;
};

export const deleteGalleryImages = async data => {
  const response = await instance.patch(`/products/${data._id}/delete`, data);
  return response;
};

export const deleteProduct = async _id => {
  const response = await instance.delete(`/products/${_id}`);
  return response;
};
