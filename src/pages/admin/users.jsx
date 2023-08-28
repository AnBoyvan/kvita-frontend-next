import Users from '@/modules/AdminCabinet/Users/Users';

import { useAuth } from '@/hooks/useAuth';

const UsersPage = () => {
  const { managerAccess } = useAuth();

  return <>{managerAccess && <Users />}</>;
};

export default UsersPage;
