import {
  getAllUsers,
  updateUserByAdmin,
} from '@/services/kvita-API/users';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Notiflix from 'notiflix';

export const useUsers = query => {
  const client = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ['users', query],
    queryFn: async () => {
      const data = await getAllUsers(query);
      return data;
    },
  });

  const { mutate: editUser } = useMutation({
    mutationFn: data => updateUserByAdmin(data),
    onSuccess: response => {
      Notiflix.Notify.success(
        `Дані користувача ${response.name} оновлено`
      );
      client.invalidateQueries(['users']);
    },
    onError: error =>
      Notiflix.Notify.failure(`${error.response.data.message}`),
  });

  return { users, editUser };
};
