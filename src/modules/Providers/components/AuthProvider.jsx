import { useAuth } from '@/hooks/useAuth';
import { refreshUser } from '@/redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{!isRefreshing && <>{children}</>}</>;
};

export default AuthProvider;
