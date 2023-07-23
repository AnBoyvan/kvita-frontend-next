import { logOut } from '@/redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const CabinetPage = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div>
      <h1>CabinetPage</h1>
      <button type="button" onClick={handleLogOut}>
        logout
      </button>
    </div>
  );
};

export default CabinetPage;
