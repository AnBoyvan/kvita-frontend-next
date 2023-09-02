import { instance } from './kvita-instance';

export const getAllGalleryImages = async ({
  queryKey,
  pageParam = 1,
}) => {
  const tags = queryKey[1];
  const response = await instance.get(
    `/pictures?tags=${tags}&page=${pageParam}`
  );
  return response.data.result;
};

export const addGalleryImage = async data => {
  const response = await instance.post('/pictures', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateGalleryImage = async ({ updatedPicture, _id }) => {
  const response = await instance.patch(
    `/pictures/${_id}`,
    updatedPicture
  );
  return response.data;
};

export const deleteGalleryImage = async _id => {
  const response = await instance.delete(`/pictures/${_id}`);
  return response.data;
};
