import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUser,
  getIsRefreshing,
  getToken,
} from '@/redux/auth/auth-selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const adminRoles = ['manager', 'admin', 'superuser'];
  const managerAccess = isLoggedIn && adminRoles.includes(user.role);
  const adminAccess =
    (isLoggedIn && user.role === 'admin') ||
    (isLoggedIn && user.role === 'superuser');
  const superuserAccess = isLoggedIn && user.role === 'superuser';
  return {
    isLoggedIn,
    isRefreshing: useSelector(getIsRefreshing),
    user,
    token: useSelector(getToken),
    managerAccess,
    adminAccess,
    superuserAccess,
  };
};
