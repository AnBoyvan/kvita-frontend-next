import { instance } from './kvita-instance';

export const getAllProducts = async data => {
  const response = await instance.get(`/products?${data}`);
  return response.data;
};

export const getProductsForMain = async () => {
  const response = await instance.get(`/products/main`);
  return response.data;
};

export const getFavoritesProducts = async () => {
  const response = await instance.get('/products/favorite');
  return response.data;
};

export const getProductById = async _id => {
  const response = await instance.get(`/products/${_id}`);
  return response.data;
};

export const addProduct = async data => {
  const response = await instance.post('/products', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateProduct = async ({ _id, data }) => {
  const response = await instance.patch(`/products/${_id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateFavorites = async _id => {
  const response = await instance.patch(`/products/${_id}/favorite`);
  return response.data;
};

export const deleteGalleryImages = async data => {
  const { _id, imgURL } = data;
  const response = await instance.patch(`/products/${_id}/delete`, {
    imgURL,
  });
  return response.data;
};

export const deleteProduct = async _id => {
  const response = await instance.delete(`/products/${_id}`);
  return response.data;
};
