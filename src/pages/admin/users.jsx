import { Meta } from '@/components';
import Users from '@/modules/AdminCabinet/Users/Users';

import { useAuth } from '@/hooks/useAuth';

const UsersPage = () => {
  const { managerAccess } = useAuth();

  return (
    <>
      <Meta title="Користувачі" page="admin/users" />
      {managerAccess && <Users />}
    </>
  );
};

export default UsersPage;
