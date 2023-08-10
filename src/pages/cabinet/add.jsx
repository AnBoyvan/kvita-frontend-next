import CabinetLayout from '@/components/CabinetLayout/CabinetLayout';
// import AdminAccess from '@/components/CabinetLayout/components/AdminAccess';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const adminRoles = ['manager', 'admin', 'superuser'];

const AddPage = () => {
  // const { replace } = useRouter();
  // const { user } = useAuth();

  // useEffect(() => {
  //   if (user.role && !adminRoles.includes(user.role)) {
  //     replace('/');
  //   }
  // }, [replace, user.role]);
  return (
    <>
      {/* <AdminAccess /> */}
      <CabinetLayout>
        <div>
          <h1>AddProductPage</h1>
        </div>
      </CabinetLayout>
    </>
  );
};

export default AddPage;
