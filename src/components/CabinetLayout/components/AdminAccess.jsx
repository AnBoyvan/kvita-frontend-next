// import CabinetLayout from '@/components/CabinetLayout/CabinetLayout';
// import { useAuth } from '@/hooks/useAuth';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const adminRoles = ['manager', 'admin', 'superuser'];

// const AdminAccess = () => {
//   const { replace } = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user.role && !adminRoles.includes(user.role)) {
//       replace('/');
//     }
//   }, [replace, user.role]);
//   return <></>;
// };

// export default AdminAccess;
