import { instance } from './kvita-instance';

export const register = async data => {
  const response = await instance.post('/users/register', data);
  return response;
};

export const logIn = async data => {
  const response = await instance.post('/users/login', data);
  return response;
};

export const logOut = async () => {
  const response = await instance.post('/users/logout');
  return response;
};

export const refresh = async () => {
  const response = await instance.get('/users/current');
  return response;
};

export const verify = async verificationToken => {
  const response = await instance.get(
    `/users/verify/${verificationToken}`
  );
  return response;
};

export const resendVerificationEmail = async data => {
  const response = await instance.post('/users/verify/', data);
  return response;
};

export const changePasswordEmail = async data => {
  const response = await instance.post('/users/password/', data);
  return response;
};

export const changePassword = async ({ password, passwordToken }) => {
  const response = await instance.patch(
    `/users/password/${passwordToken}`,
    {
      password,
    }
  );
  return response;
};

export const updateByUser = async data => {
  const response = await instance.patch('/users/current', data);
  return response;
};
