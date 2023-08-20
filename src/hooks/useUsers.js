import { getAllUsers } from '@/services/kvita-API/users';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const useUsers = query => {
  const { data: users } = useQuery({
    queryKey: ['users', query],
    queryFn: async () => {
      const data = await getAllUsers(query);
      return data;
    },
  });

  return { users };
};
