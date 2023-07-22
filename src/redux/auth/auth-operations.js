import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { instance } from '@/services/kvita-API/kvita-instance';
import * as api from '@/services/kvita-API/auth';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.register(data);
      Notiflix.Report.success(
        `${response.data.message}`,
        '',
        'Ok'
      );
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.logIn(data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logOut(_);
      clearAuthHeader();
      return Promise.resolve();
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue(
        'Unable to fetch user'
      );
    }
    setAuthHeader(token);
    try {
      const response = await api.refresh();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.verify(data);
      setAuthHeader(response.data.token);
      Notiflix.Report.success(
        `${response.data.message}`,
        '',
        'Ok'
      );
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  'auth/resend',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.resendVerificationEmail(
        data
      );
      Notiflix.Report.success(
        `${response.data.message}`,
        '',
        'Ok'
      );
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePasswordEmail = createAsyncThunk(
  'auth/changePasswordEmail',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.changePasswordEmail(data);
      Notiflix.Report.success(
        `${response.data.message}`,
        '',
        'Ok'
      );
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.changePassword(data);
      Notiflix.Report.success(
        `${response.data.message}`,
        '',
        'Ok'
      );
      return response.data;
    } catch (error) {
      Notiflix.Report.failure(
        `${error.response.data.message}`,
        '',
        'Ok'
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const update = createAsyncThunk(
  'auth/update',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.updateByUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
