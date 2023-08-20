import { useAuth } from '@/hooks/useAuth';
import Users from '@/modules/AdminCabinet/Users/Users';

const UsersPage = () => {
  const { managerAccess } = useAuth();

  return <>{managerAccess && <Users />}</>;
};

export default UsersPage;
