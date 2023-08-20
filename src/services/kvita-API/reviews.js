import { instance } from './kvita-instance';

export const getAllReviews = async data => {
  const { productId = '', ownerId = '' } = data;
  const response = await instance.get(
    `/reviews?productId=${productId}&ownerId=${ownerId}`,
    data
  );
  return response.data;
};

// export const getReviewById = async _id => {
//   const response = await instance.get(`/reviews/favorite/${_id}`);
//   return response.data;
// };

export const addReview = async data => {
  const response = await instance.post('/reviews', data);
  return response.data;
};

export const updateReview = async ({ _id, comment }) => {
  const response = await instance.patch(`/reviews/${_id}`, {
    comment,
  });
  return response.data;
};

export const deleteReview = async _id => {
  const response = await instance.delete(`/reviews/${_id}`);
  return response.data;
};
