import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AdminCabinetContainer, DropdownFilter } from '@/components';
import {
  CabinetSearch,
  DiscountFilter,
  PeriodFilter,
  RoleFilter,
  VerifiedFilter,
} from '@/ui/Inputs';
import { UsersTable } from '@/modules/AdminCabinet/Users';

import { useUsers } from '@/hooks/useUsers';

import styles from './Users.module.scss';

const Users = () => {
  const { query, push } = useRouter();
  const queryParams = new URLSearchParams(query).toString();
  const requestParams = queryParams
    ? queryParams
    : `/admin/users?search=&role=&verify=&minDiscount=0&maxDiscount=100&
    createdStart=&createdEnd=&sortField=createdAt&sortOrder=desc`;

  const [roles, setRoles] = useState([
    'customer',
    'manager',
    'admin',
    'superuser',
  ]);
  const [search, setSearch] = useState('');
  const [discount, setDiscount] = useState({
    minDiscount: 0,
    maxDiscount: 100,
  });
  const [verify, setVerify] = useState('all');
  const [created, setCreated] = useState({
    start: null,
    end: null,
  });

  const [sortOrder, setSortOrder] = useState('desc');
  const [sortField, setSortField] = useState('createdAt');

  const { users } = useUsers(requestParams);

  const changeSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    push(
      `/admin/users?search=${search}&role=${roles.join(',')}&verify=${
        verify === 'all' ? '' : verify
      }&minDiscount=${discount.minDiscount}&maxDiscount=${
        discount.maxDiscount
      }&createdStart=${
        created.start ? created.start : ''
      }&createdEnd=${
        created.end ? created.end : ''
      }&sortField=${sortField}&sortOrder=${sortOrder}`,
      undefined,
      {
        shallow: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    created.end,
    created.start,
    discount.maxDiscount,
    discount.minDiscount,
    roles,
    search,
    sortField,
    sortOrder,
    verify,
  ]);

  return (
    <>
      <AdminCabinetContainer title="Користувачі">
        <div className={styles.filter}>
          <CabinetSearch search={search} setSearch={setSearch} />
          <DropdownFilter>
            <RoleFilter current={roles} setCurrent={setRoles} />
            <DiscountFilter
              current={discount}
              setCurrent={setDiscount}
            />
            <VerifiedFilter current={verify} setCurrent={setVerify} />
            <PeriodFilter
              title="Зареєстрований:"
              current={created}
              setCurrent={setCreated}
            />
          </DropdownFilter>
        </div>
        <UsersTable
          users={users}
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={changeSortOrder}
        />
      </AdminCabinetContainer>
    </>
  );
};

export default Users;
