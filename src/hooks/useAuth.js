import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUser,
  getIsRefreshing,
  getToken,
} from '@/redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshing),
    user: useSelector(getUser),
    token: useSelector(getToken),
  };
};
