import { instance } from './kvita-instance';

export const getAllReviews = async () => {
  const response = await instance.get('/reviews');
  return response;
};

export const getReviewById = async _id => {
  const response = await instance.get(`/reviews/favorite/${_id}`);
  return response;
};

export const addReview = async data => {
  const response = await instance.post('/reviews', data);
  return response;
};

export const updateReview = async data => {
  const response = await instance.patch(`/reviews/${data._id}`, data);
  return response;
};

export const deleteReview = async _id => {
  const response = await instance.delete(`/reviews/${_id}`);
  return response;
};
