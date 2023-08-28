import PropTypes from 'prop-types';
import { useContext } from 'react';

import SortOrderButton from '@/ui/Buttons/SortOrderButton';
import { UsersModal } from '../..';

import { ModalContext } from '@/hooks/useModal';
import { formatDate } from '@/utils/helpers/formatDate';

import styles from './UsersTable.module.scss';

const headList = [
  { value: 'name', title: 'Ім’я' },
  { value: 'phone', title: 'Телефон' },
  { value: 'email', title: 'Пошта' },
  { value: 'discount', title: 'Знижка' },
  { value: 'createdAt', title: 'Дата реєстрації' },
];

const UsersTable = ({
  users,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) => {
  const { openModal } = useContext(ModalContext);

  const editUser = user => {
    openModal(<UsersModal user={user} />);
  };

  const tableHead = headList.map(({ value, title }) => (
    <div
      key={value}
      className={styles.headerCell}
      onClick={() => setSortField(value)}
    >
      <span>{title}</span>
      {sortField === value && (
        <SortOrderButton
          sortOrder={sortOrder}
          onChange={setSortOrder}
        />
      )}
    </div>
  ));

  const tableRows =
    users &&
    users.result.map(user => (
      <div key={user._id} className={styles.row}>
        <button
          type="button"
          className={styles.cell}
          onClick={() => editUser(user)}
        >
          {user.name}
        </button>
        <div className={styles.cell}>{user.phone}</div>
        <div className={styles.cell}>{user.email}</div>
        <div className={styles.cell}>{user.discount}</div>
        <div className={styles.cell}>
          {formatDate(user.createdAt)}
        </div>
      </div>
    ));

  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {tableHead}
        {users && tableRows}
      </div>
    </div>
  );
};

UsersTable.propTypes = {
  users: PropTypes.shape({
    result: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

export default UsersTable;
